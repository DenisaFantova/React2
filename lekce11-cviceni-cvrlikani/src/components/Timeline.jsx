import React, { useState } from 'react';
import Message from './Message';

const Timeline = () => {
  const [messages, setMessages] = useState([
    {
      avatar: '',
      name: '',
      handle: '',
      time: '',
      text: '',
    }]);

  return (
    <div className="timeline">
      {messages.map(() => <Message />)}
    </div>
  );
};

export default Timeline;
