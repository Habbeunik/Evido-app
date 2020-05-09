import React from "react";
import {
  Layout,
  MessageBox,
  ChatMessages,
  ChatInput,
  ClearButton,
  Trigger,
} from "./elements";

function Messenger() {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggleOpenState() {
    setIsOpen((pState) => !pState);
  }

  return (
    <Layout>
      <Trigger state={isOpen ? "open" : "close"} onClick={toggleOpenState} />
      {isOpen && (
        <MessageBox>
          <ChatMessages />
          <ChatInput />
        </MessageBox>
      )}
    </Layout>
  );
}

export default Messenger;
