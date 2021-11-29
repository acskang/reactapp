/* eslint-disable */

import React, { useState } from "react";
import "./App.css";

const App = () => {
  let [글제목, 글제목변경] = useState([
    "스무스한 재 랜더링",
    "강남 우동 맛집",
    "마장동 머리고기",
  ]);
  let [count, chgCount] = useState(0);

  function 글변경() {
    let newArray = [...글제목];
    글제목변경(newArray.sort());
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div className={posts}>개발 Blog</div>
      </div>
      <div className="list">
        <h3>
          {글제목[0]}
          <span
            onClick={() => {
              chgCount(count + 1);
            }}
          >
            👍
          </span>
          {count}
        </h3>
        <buttom onClick={글변경}>버튼</buttom>
        <p>2월 18일 발행</p>
        <hr />
      </div>
      <Posts myTitle={글제목[1]} />
      <Posts myTitle={글제목[2]} />
      <Modal />
    </div>
  );
};

function Posts(props) {
  return (
    <div className="list">
      <h3>{props.myTitle}</h3>
      <p>2월 18일 발행</p>
      <hr />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
