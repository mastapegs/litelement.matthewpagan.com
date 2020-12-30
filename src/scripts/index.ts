import { LitElement, html, customElement } from "lit-element";
import "./components/TopBar";
import './components/AppRouter'

@customElement("app-component")
export class AppComponent extends LitElement {
  render() {
    return html`
      <top-bar></top-bar>
      <div>
        <app-router></app-router>
      </div>
    `;
  }
}
