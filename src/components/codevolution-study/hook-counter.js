import React, {useState} from 'react';

const HookCounter = () => {

  const [count, setCount] = useState(0)

  const [name, setName] = useState("")
  function changeName(e) {
    setName(e.target.value)
  }
  return (
    <div>
      <button onClick={() => {setCount(count + 1)}}><span>Count</span>{count}</button>
      <br />
      <label htmlFor="name">Name</label>
      <input type="text" placeholder="send name" onChange={changeName} />
      <br />
      <div className="displayName"><span>내 이름은</span>{name}</div>
    </div>
  );
};

export default HookCounter;