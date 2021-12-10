import React, {useState} from 'react';

const MyUseState = () => {
  // useState for General case
  // const initialCount = 0
  // const [count, setCount] = useState(initialCount)
  // function incrementFive() {
  //   for(let i=0; i<5; i++) {
  //     setCount(prevCount => prevCount + 1)
  //   }
  // }

  // useState for object case
  // const initialName = {
  //   firstName: '',
  //   lastName: ''
  // }
  // const [name, setName] = useState(initialName)

  // useState for array case
  const [items, setItems] = useState([])
  function addItem() {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random()*10) + 1
    }])
  }
  return (
    <div className="flex-container">
      <div className="array">
        <button onClick={addItem}>Add a number</button>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>

      {/* // useState for object case */}
      {/* <div className="object">
        <form action="">
          <input
            type="text"
            value={name.firstName}
            onChange={e => setName({...name, firstName: e.target.value})}
          />
          <input
            type="text"
            value={name.lastName}
            onChange={e => setName({...name, lastName: e.target.value})} />
          <h2>Your first name is - {name.firstName}</h2>
          <h2>Your last name is - {name.lastName}</h2>
          <h2>{JSON.stringify(name)}</h2>
        </form>
      </div> */}
          
      {/* // useState for General case */}
      {/* <div className="counter">
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={incrementFive}>Increment 5</button>
      </div> */}
    </div>
  );
};

export default MyUseState;