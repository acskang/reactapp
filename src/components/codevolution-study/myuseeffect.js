import {useState, useEffect} from 'react';

const MyUseEffect = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  useEffect(() => {
    console.log('useEffect - Updating document title')
    document.title = `You clicked ${count} times`
  }, [count])
  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={() => setCount(count+1)}>Click {count} times</button>
    </div>
  );
};

export default MyUseEffect;