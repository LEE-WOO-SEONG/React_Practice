import React, { useEffect, useRef, useState } from 'react';

const BUTTON_MESSAGE = {
  ABLED: '버튼이 눌리지 않았다.',
  DISABLED: '버튼이 방금 눌렸다.',
};

function Button() {
  const [message, setMessage] = useState(BUTTON_MESSAGE.ABLED);
  const timer = useRef(null);

  useEffect(() => {
    return () => {
      if (timer.current !== null) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return (
    <>
      <button onClick={click} disabled={message === BUTTON_MESSAGE.DISABLED}>
        button
      </button>
      <p>{message}</p>
    </>
  );

  function click() {
    setMessage(BUTTON_MESSAGE.DISABLED);
    if (timer.current !== null) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setMessage(BUTTON_MESSAGE.ABLED);
    }, 5000);
  }
}

export default Button;
