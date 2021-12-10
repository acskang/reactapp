import React, { useRef } from "react";
import CountUp, { useCountUp } from "react-countup";

const CountUpStudy = () => {
  const countUpRef = useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    duration: 100,
    end: 200,
    startOnMount: false,
  });

  const butStyle = {
    padding: "1px 5px",
    margin: "1px 10px",
  };
  return (
    <div>
      <div>
        <h2>Hello Madie</h2>
        <div style={{ fontSize: "3rem" }} ref={countUpRef}></div>
        <button style={butStyle} onClick={start}>
          Start
        </button>
        <button style={butStyle} onClick={reset}>
          Reset
        </button>
        <button style={butStyle} onClick={pauseResume}>
          Pause/Resume
        </button>
        <button style={butStyle} onClick={() => update(2000)}>
          Update to 2000
        </button>
      </div>
      <h1>
        <CountUp end={200} duration={2} />
      </h1>
      {/* <h1>
        <CountUp end={200} duration={5} />
      </h1>
      <h1>
        <CountUp start={500} end={1000} duration={2} />
      </h1>
      <h1>
        <CountUp end={1000} duration={2} prefix="$" decimals={2} />
      </h1>
      <h1>
        <CountUp end={1000} duration={2} suffix="USD" decimals={2} />
      </h1> */}
    </div>
  );
};

export default CountUpStudy;
