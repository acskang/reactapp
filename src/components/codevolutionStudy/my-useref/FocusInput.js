import {useEffect, useRef} from 'react'

const FocusInput = () => {
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  )
}

export default FocusInput

/*
input tag 등 HTML 얼리먼트를 직접 제어하고 싶을 때 사용.
1. input 엘리먼트를 "ref" 속성을 사용해 useRef 변수로 지정.
2. useRef의 current 속성을 통해 tag에 접근.
3. useEffect 에서 제어.
*/
