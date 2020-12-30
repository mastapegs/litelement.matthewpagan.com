import { css } from "lit-element";

export default css`
  .container {
    background-color: white;
    padding: 1em;
    margin: 2em auto;
    border-radius: 10%;
    width: 80%;
  }
  @media screen and (min-width: 720px) {
    .container {
      width: 70%;
    }
  }
  @media screen and (min-width: 1080px) {
    .container {
      width: 60%;
    }
  }
`;
