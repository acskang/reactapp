import React, { forwardRef } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const ColoredTooltip = () => {
  return <span style={{ color: "yellow" }}>Colord component</span>;
};

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First Line</div>
      <div>Second Line</div>
    </div>
  );
});

const Tooltip = () => {
  return (
    <>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy
          placement="right"
          arrow={false}
          delay={1000}
          content="Basic Tooltip"
        >
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<span style={{ color: "orange" }}>Colored</span>}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<ColoredTooltip></ColoredTooltip>}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <Tippy
          placement="top-start"
          content={<ColoredTooltip></ColoredTooltip>}
        >
          <CustomChild></CustomChild>
        </Tippy>
      </div>
    </>
  );
};

export default Tooltip;
