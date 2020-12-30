import { LitElement, html, css, customElement, property } from "lit-element";
import resetList from "../styles/reset-list";
import flex from "../styles/flex";
import anchorReset from "../styles/anchor-reset";
import textColor from "../styles/text-color";

@customElement("top-bar")
export class TopBar extends LitElement {
  static get styles() {
    return [
      resetList,
      flex,
      anchorReset,
      textColor(css`white`),
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

  @property({ type: Array }) menuItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ];

  menuItemsTemplate(menuItems) {
    return menuItems.map(
      ({ text, href }) => html`
        <li>
          <a class="anchor-reset text-color" href=${href}>${text}</a>
        </li>
      `
    );
  }

  render() {
    return html`
      <nav>
        <ul class="reset-list flex">
          ${this.menuItemsTemplate(this.menuItems)}
        </ul>
      </nav>
    `;
  }
}
