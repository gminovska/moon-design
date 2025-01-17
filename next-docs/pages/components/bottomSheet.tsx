import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import getComponent from '../../components/getComponent';
import PropsTable from '../../components/PropsTable';
import CustomHeight from '../../public/examples/bottomSheet/CustomHeight';
import Default from '../../public/examples/bottomSheet/Default';
import LargeWithOptionalExtras from '../../public/examples/bottomSheet/LargeWithOptionalExtras';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('bottomSheet');
  const { name, text, image } = getComponent('BottomSheet');
  return (
    <>
      <ComponentPageDescription title={name} image={image} isInProgress>
        <p>{text}</p>
        <p>
          Bottom sheets can contain any anything so let your imagination fly.
        </p>
        <p>
          Based on{' '}
          <a
            href="https://headlessui.com/"
            className="transition-colors underline hover:text-piccolo"
            target="_blank"
            rel="noreferrer"
          >
            Headless UI
          </a>
          .
        </p>
      </ComponentPageDescription>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="Large with all optional extras"
        preview={<LargeWithOptionalExtras />}
        code={examples ? examples.LargeWithOptionalExtras : 'Loading'}
      />
      <Preview
        title="Custom height"
        preview={<CustomHeight />}
        code={examples ? examples.CustomHeight : 'Loading'}
      />
      <PropsTable
        title="BottomSheet"
        data={[
          {
            name: 'hasShadow',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Whether the BottomSheet has a shadow or not.',
          },
          {
            name: 'onClose',
            type: '() => void',
            required: true,
            default: '-',
            description: 'Called when the BottomSheet is dismissed.',
          },
          {
            name: 'open',
            type: 'boolean',
            required: true,
            default: '-',
            description: 'Whether the BottomSheet is open or not.',
          },
          {
            name: 'size',
            type: 'string',
            required: false,
            default: 'sm',
            description:
              'The size of the BottomSheet, sm, md, lg or custom pixel/percentage/rem value.',
          },
        ]}
      />
      <PropsTable
        title="BottomSheet.Draghandle"
        data={[
          {
            name: 'children',
            type: 'ReactNode',
            required: false,
            default: '-',
            description:
              'Optional title as a child to render text next to the drag handle.',
          },
        ]}
      />
      <PropsTable
        title="BottomSheet.Title"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description:
              'Tailwind classes for customization of BottomSheet Title.',
          },
        ]}
      />
      <PropsTable
        title="BottomSheet.Panel"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description:
              'Tailwind classes for customization of BottomSheet Panel.',
          },
          {
            name: 'hasShadow',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Whether the BottomSheet has a shadow or not.',
          },
          {
            name: 'onClose',
            type: '() => void',
            required: false,
            default: '-',
            description: 'Called when the BottomSheet is dismissed.',
          },
        ]}
      />
      <PropsTable
        title="BottomSheet.Backdrop"
        data={[
          {
            name: 'className',
            type: 'string',
            required: false,
            default: '-',
            description:
              'Tailwind classes for customization of BottomSheet Backdrop.',
          },
        ]}
      />
    </>
  );
};

export default Example;
