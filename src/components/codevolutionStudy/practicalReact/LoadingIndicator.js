import React from "react";
import { css } from "@emotion/react";
import { BounceLoader, BeatLoader } from "react-spinners";

const loaderCSS = css`
  margin-top: 25px;
  margin-bottom: 25px;
  border: 10px solid red;
`;

function LoadingIndicator() {
  return (
    <div>
      <BounceLoader css={loaderCSS} loading />
      <BeatLoader css={loaderCSS} size={120} loading />
    </div>
  );
}

export default LoadingIndicator;
