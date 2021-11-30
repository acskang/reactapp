import { useState } from 'react';
import InputBind from './input-bind'

const UserInput = () => {
  const [title, setTitle] = useState("")
  const [firstname, bindfirstname, resetfirstname] = InputBind('david')
  const [secondname, bindsecondname, resetsecondname] = InputBind('kang')

  function submitHandler(e) {
    e.preventdefault()
    alert({firstname}, {secondname})
    resetfirstname();
    resetsecondname();
  }
 
  return (
    <div>
      <div className="inputbox">
        <label>movie title</label>
        <input type="text"
          placeholder="your favorite movie"
          value={title}
          onChange={
            e => setTitle(e.target.value)}
        />
      </div>
      <br />
      <form onSubmit={submitHandler}>
        <div className="inputbox">
          <label>firstname</label>
          <input type="text"
            placeholder="input your firstname"
            { ...bindfirstname }
          />
        </div>
        <div className="inputbox">
          <label>secondname</label>
          <input type="text"
            placeholder="input your lastname"
            { ...bindsecondname }
          />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};

export default UserInput;