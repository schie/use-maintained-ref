import React, { useCallback, useEffect, useState } from 'react';

import { useMaintainedRef } from 'use-maintained-ref';

const RandoButton = ({ onSomeEvent, text }) => {
  const [value, setValue] = useState(false);
  const onSomeEventRef = useMaintainedRef(onSomeEvent);

  const toggle = useCallback(async () => {
    setValue(!value);
  }, [text, value]);

  // will call the `onSomeEvent` function prop, but won't be triggered by it
  useEffect(() => {
    onSomeEventRef.current({ event: 'toggleChanged', value });
  }, [value]);

  // will call the `onSomeEvent` function prop, but won't be triggered by it
  useEffect(() => {
    onSomeEventRef.current({ event: 'textChanged', value: text });
  }, [text]);

  return (
    <button onClick={toggle} on>
      {text} - {value.toString()}
    </button>
  );
};

const App = () => {
  const [text, setText] = useState('test');

  useEffect(() => {
    const intervalID = setInterval(() => {
      setText(new Date().toLocaleTimeString());
    }, [1000]);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const [eventData, setEventData] = useState(null);

  return (
    <div>
      <RandoButton text={text} onSomeEvent={(eventData) => setEventData(eventData)} />
      <pre>{JSON.stringify(eventData, null, 2)}</pre>
    </div>
  );
};
export default App;
