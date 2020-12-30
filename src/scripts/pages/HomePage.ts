import { LitElement, property, html, customElement } from "lit-element";

@customElement("home-page")
export class HomePage extends LitElement {
  @property() page = 'Home'

  render() {
    return html`
       <h1>${this.page} Page</h1> 
       <p>This is the ${this.page} page.</p>
    `;
  }
}
