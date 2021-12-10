import {useState, useEffect} from 'react';

const HookMouse = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log('Mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }
  useEffect(() => {
    console.log('useEffect called')
    window.addEventListener('mouseover', logMousePosition)

    return () => {
      console.log('Component unmount code')
      window.removeEventListener('mouseover', logMousePosition)
    }
  }, [])
  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
};

export default HookMouse