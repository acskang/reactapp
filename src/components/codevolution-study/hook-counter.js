import React, {useState} from 'react';

const HookCounter = () => {

  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  function submitHandler(e) {
    e.preventDefault()
    alert(`Hello ${name}`)
  }

  return (
    <div>
      <button onClick={() => {setCount(count + 1)}}><span>Count</span>{count}</button>
      <br />
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">Name</label>
          <input type="text"
            placeholder="input your name"
            value={name}
            onChange={
              e => setName(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default HookCounter;