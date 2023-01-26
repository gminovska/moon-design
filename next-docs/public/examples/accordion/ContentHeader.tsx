import { Accordion } from '@heathmont/moon-core-tw';
import {
  ChatChat,
  ChatComment,
  ChatCommentAdd,
  ChatDoubleBubble,
  ControlsChevronDown,
} from '@heathmont/moon-icons-tw';

const Example = () => (
  <Accordion>
    <Accordion.Item value="item-3">
      <Accordion.Header>
        <Accordion.Button className="moon-open:[&_span_svg]:rotate-180">
          <span className="grow">Test accordion</span>
          <div className="flex text-moon-24 text-trunks items-center">
            <ChatChat />
            <ChatComment />
            <ChatCommentAdd />
            <ChatDoubleBubble />
          </div>
          <span className="flex justify-center w-6">
            <ControlsChevronDown className="text-trunks text-moon-16 transition-transform duration-200" />
          </span>
        </Accordion.Button>
      </Accordion.Header>
      <Accordion.ContentOutside>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Accordion.ContentOutside>
    </Accordion.Item>
  </Accordion>
);

export default Example;
