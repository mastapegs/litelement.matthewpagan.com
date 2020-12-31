import {
  LitElement,
  html,
  css,
  customElement,
  property,
  TemplateResult,
} from "lit-element";
import resetList from "../styles/reset-list";
import flex from "../styles/flex";
import anchorReset from "../styles/anchor-reset";
import textColor from "../styles/text-color";
import bigShadow from "../styles/big-shadow";

@customElement("top-bar")
export class TopBar extends LitElement {
  static get styles() {
    return [
      resetList,
      bigShadow,
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
    {
      text: "Github Search",
      href: "/github-usersearch",
    },
  ];

  menuItemsTemplate(
    menuItems: { text: string; href: string }[]
  ): TemplateResult[] {
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
      <nav class="big-shadow">
        <ul class="reset-list flex">
          ${this.menuItemsTemplate(this.menuItems)}
        </ul>
      </nav>
    `;
  }
}
