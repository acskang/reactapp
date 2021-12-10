import React, {useState} from 'react';
import HookMouse from './hook-mouse';

const MouseContainer = () => {
  const [display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      { display && <HookMouse/> }
    </div>
  );
};

export default MouseContainer;