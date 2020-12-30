import {LitElement, html, customElement} from 'lit-element'

@customElement('app-component')
export class AppComponent extends LitElement {
  render() {
    return html`
      <h1>Lit Github Search</h1>
      <p>Implementing Github User Search with LitElement</p>
    `
  }
}