import React from 'react';

const MyProps = (props) => {
  return (
    <div>
      <div className="name"><span>이름</span>{props.name}</div>
      <div className="heroname"><span>별명</span>{props.heroname}</div>
    </div>
  );
};

export default MyProps;