import { LitElement, property, html, customElement } from "lit-element";

@customElement("contact-page")
export class ContactPage extends LitElement {
  @property() page = 'Contact'

  render() {
    return html`
       <h1>${this.page} Page</h1> 
       <p>This is the ${this.page} page.</p>
    `;
  }
}
