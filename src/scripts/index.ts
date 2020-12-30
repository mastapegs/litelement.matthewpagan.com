import { LitElement, html, customElement } from "lit-element";
import "./components/TopBar";
import "./components/AppRouter";
import container from "./styles/container";

@customElement("app-component")
export class AppComponent extends LitElement {
  static get styles() {
    return [container];
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
