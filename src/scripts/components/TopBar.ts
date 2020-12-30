import { LitElement, html, css, customElement } from "lit-element";
import resetList from "../styles/reset-list";
import flex from "../styles/flex";
import anchorReset from "../styles/anchor-reset";

@customElement("top-bar")
export class TopBar extends LitElement {
  static get styles() {
    return [
      resetList,
      flex,
      anchorReset,
      css`
        ul {
          background-color: blue;
        }
        a {
          display: inline-block;
          padding: 0.5em;
          margin: 1em 0 1em 1em;
          background-color: hsl(210, 100%, 50%);
          border-radius: 30%;
        }
      `,
    ];
  }

  render() {
    return html`
      <nav>
        <ul class="reset-list flex">
          <li><a class="anchor-reset" style="color: white;" href="/">Home</a></li>
          <li><a class="anchor-reset" href="/about">About</a></li>
          <li><a class="anchor-reset" href="/contact">Contact</a></li>
        </ul>
      </nav>
    `;
  }
}
