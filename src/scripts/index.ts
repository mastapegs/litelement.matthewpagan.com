import { LitElement, html, customElement } from "lit-element";
import "./components/TopBar";

@customElement("app-component")
export class AppComponent extends LitElement {
  render() {
    return html`
      <top-bar></top-bar>
      <h1>Lit Github Search</h1>
      <p>Implementing Github User Search with LitElement</p>
    `;
  }
}
