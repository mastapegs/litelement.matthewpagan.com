import { css, CSSResult } from "lit-element";

export default (color: CSSResult) => css`
  .text-color {
    color: ${color};
  }
`;
