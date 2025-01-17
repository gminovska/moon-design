import React, { ReactNode, useCallback, useEffect, useReducer } from 'react';
import { Dialog } from '@headlessui/react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import BottomSheetContext, { useBottomSheetContext } from './private/context';
import stateReducer from './private/stateReducer';
import useDrag from './private/useDrag';
import type BackdropProps from './private/types/BackdropProps';
import type BottomSheetRootProps from './private/types/BottomSheetRootProps';
import type PanelProps from './private/types/PanelProps';
import type TitleProps from './private/types/TitleProps';

const BottomSheetRoot: React.FC<BottomSheetRootProps> = ({
  open,
  onClose,
  hasShadow,
  size,
  children,
}) => {
  const [state, dispatch] = useReducer(stateReducer, {
    bottomSheetChildren: [],
  });
  const registerChild = useCallback((child: string) => {
    dispatch?.({ type: 'RegisterChild', children: child });
    return () => dispatch?.({ type: 'UnregisterChild', children: child });
  }, []);
  return (
    <BottomSheetContext.Provider
      value={{ ...state, size, registerChild, dispatch }}
    >
      <Dialog as="div" open={open} className="relative z-10" onClose={onClose}>
        {React.Children.map<ReactNode, ReactNode>(children, (child) => {
          if (React.isValidElement(child)) {
            let extraProps = {};
            if (typeof child.type !== 'string' && child.type.name === 'Panel') {
              extraProps = { onClose, hasShadow };
            }
            return React.cloneElement(child, extraProps);
          }
          return null;
        })}
      </Dialog>
    </BottomSheetContext.Provider>
  );
};

const Panel: React.FC<PanelProps> = ({
  children,
  className,
  hasShadow,
  onClose,
}) => {
  const { size } = useBottomSheetContext('BottomSheet.Panel');
  const { isTransition, hasDraghandle, panelRef, contentRef } =
    useDrag(onClose);
  let height;
  switch (size) {
    case 'lg':
      height = 'h-[88%]';
      break;
    case 'sm':
      height = 'h-[32%]';
      break;
    case 'md':
    default:
      height = 'h-[64%]';
  }
  return (
    <div className="fixed inset-0">
      <Dialog.Panel
        className={mergeClassnames(
          'absolute inset-x-0 bottom-0 rounded-t-xl bg-gohan translate-y-full',
          height,
          !hasDraghandle && 'overflow-y-auto',
          hasShadow && 'shadow-moon-lg',
          isTransition && 'duration-200 transition-all',
          className
        )}
        ref={panelRef}
      >
        {hasDraghandle ? (
          <div className="h-full overflow-y-auto" ref={contentRef}>
            {children}
          </div>
        ) : (
          children
        )}
      </Dialog.Panel>
    </div>
  );
};

const Draghandle = ({ children }: { children: ReactNode }) => {
  const { registerChild, draghandleRef } = useBottomSheetContext(
    'BottomSheet.Draghandle'
  );
  useEffect(() => {
    registerChild?.('Draghandle');
  }, [registerChild]);
  return (
    <div
      className="sticky inset-x-0 top-0 flex flex-col items-center justify-start pt-2 min-h-[48px] z-10 bg-gohan rounded-t-xl"
      ref={draghandleRef}
    >
      <div className="w-10 h-1 rounded bg-beerus"></div>
      {children && <div className="w-full">{children}</div>}
    </div>
  );
};

const Backdrop: React.FC<BackdropProps> = ({ className }) => (
  <div
    className={mergeClassnames('fixed inset-0 bg-black/[0.56]', className)}
  ></div>
);

const Title: React.FC<TitleProps> = ({ children, className }) => (
  <div className="p-4 border-b-2 border-beerus">
    <Dialog.Title
      as="h3"
      className={mergeClassnames(
        'text-moon-18 text-bulma font-medium',
        className
      )}
    >
      {children}
    </Dialog.Title>
  </div>
);

const BottomSheet = Object.assign(BottomSheetRoot, {
  Backdrop,
  Draghandle,
  Title,
  Panel,
});

export default BottomSheet;
