import { LitElement, property, html, customElement } from "lit-element";

@customElement("about-page")
export class AboutPage extends LitElement {
  @property() page = 'About'

  render() {
    return html`
       <h1>${this.page} Page</h1> 
       <p>This is the ${this.page} page.</p>
    `;
  }
}
