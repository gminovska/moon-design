import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentAnatomy from '../../components/ComponentAnatomy';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import getComponent from '../../components/getComponent';
import PropsTable from '../../components/PropsTable';
import AsLink from '../../public/examples/menuItem/AsLink';
import Checkbox from '../../public/examples/menuItem/Checkbox';
import Default from '../../public/examples/menuItem/Default';
import ExpandCollapse from '../../public/examples/menuItem/ExpandCollapse';
import MultiLine from '../../public/examples/menuItem/MultiLine';
import MultiTitle from '../../public/examples/menuItem/MultiTitle';
import Radio from '../../public/examples/menuItem/Radio';
import WithIcon from '../../public/examples/menuItem/WithIcon';
import WithMeta from '../../public/examples/menuItem/WithMeta';
import useExamples from '../../utils/useExamples';

const Example = () => {
  const examples = useExamples('menuItem');
  const { name, text, image } = getComponent('MenuItem');
  return (
    <>
      <ComponentPageDescription title={name} image={image} isInProgress>
        <p>{text}</p>
        <p>
          Menu item row heights can vary based on the amount of content in each
          row. The content in each row is flexible. By default, each menu item
          row height is Medium(md) 40px for one line of content.
        </p>
      </ComponentPageDescription>
      <ComponentAnatomy>{`
    <MenuItem>...</MenuItem>
      `}</ComponentAnatomy>
      <Preview
        title="Default"
        preview={<Default />}
        code={examples ? examples.Default : 'Loading'}
      />
      <Preview
        title="AsLink"
        preview={<AsLink />}
        code={examples ? examples.AsLink : 'Loading'}
      />
      <ComponentAnatomy>{`
    <MenuItem>
      ...
      <MenuItem.Title>...</MenuItem.Title>
      ...
    </MenuItem>
      `}</ComponentAnatomy>
      <Preview
        title="With icon"
        preview={<WithIcon />}
        code={examples ? examples.WithIcon : 'Loading'}
      />
      <Preview
        title="With meta"
        preview={<WithMeta />}
        code={examples ? examples.WithMeta : 'Loading'}
      />
      <ComponentAnatomy>{`
    <MenuItem>
      ...
      <MenuItem.Title>...</MenuItem.Title>
      <MenuItem.Checkbox />
      ...
    </MenuItem>
      `}</ComponentAnatomy>
      <Preview
        title="Checkbox"
        preview={<Checkbox />}
        code={examples ? examples.Checkbox : 'Loading'}
      />
      <ComponentAnatomy>{`
    <MenuItem>
      ...
      <MenuItem.Title>...</MenuItem.Title>
      <MenuItem.Radio />
      ...
    </MenuItem>
      `}</ComponentAnatomy>
      <Preview
        title="Radio"
        preview={<Radio />}
        code={examples ? examples.Radio : 'Loading'}
      />
      <ComponentAnatomy>{`
    <MenuItem>
      ...
      <MenuItem.MultiTitle />
      ...
    </MenuItem>
      `}</ComponentAnatomy>
      <Preview
        title="MultiTitle"
        preview={<MultiTitle />}
        code={examples ? examples.MultiTitle : 'Loading'}
      />
      <Preview
        title="Multi Line Items"
        preview={<MultiLine />}
        code={examples ? examples.MultiLine : 'Loading'}
      />
      <Preview
        title="Expand collapse"
        preview={<ExpandCollapse />}
        code={examples ? examples.ExpandCollapse : 'Loading'}
      />
      <PropsTable
        title="MenuItem"
        data={[
          {
            name: 'as',
            type: 'a | button',
            required: false,
            default: 'button',
            description: 'Rendered HTML element',
          },
          {
            name: 'isActive',
            type: 'boolean',
            required: false,
            default: 'false',
            description:
              'Is MenuItem checked/unchecked. For radio and checkbox variant.',
          },
          {
            name: 'className',
            type: 'string',
            required: true,
            default: '-',
            description: 'Tailwind classes for customization of wrapper.',
          },
        ]}
      />
    </>
  );
};

export default Example;
