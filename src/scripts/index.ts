import { LitElement, html, css, customElement } from "lit-element";
import "./components/TopBar";
import './components/AppRouter'

@customElement("app-component")
export class AppComponent extends LitElement {
  static get styles() {
    return css`
      .container {
        background-color: white;
        padding: 1em;
        width: 80%;
        margin: 1em auto;
        border-radius: 10%;
        box-shadow: 3px 5px 10px hsla(0, 0%, 50%, 0.5)
      }
    `
  }
  
  render() {
    return html`
      <top-bar></top-bar>
      <div class="container">
        <app-router></app-router>
      </div>
    `;
  }
}
