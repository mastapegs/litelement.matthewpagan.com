import { LitElement,  html, customElement } from "lit-element";

@customElement("search-page")
export class AboutPage extends LitElement {

  render() {
    return html`
       <h1>Github User Search</h1>
    `;
  }
}
