import { LitElement, html, customElement } from "lit-element";
import "./components/TopBar";
import "./components/AppRouter";
import container from "./styles/container";
import bigShadow from './styles/big-shadow'

@customElement("app-component")
export class AppComponent extends LitElement {
  static get styles() {
    return [
      container,
      bigShadow,
    ];
  }

  render() {
    return html`
      <top-bar></top-bar>
      <div class="container big-shadow">
        <app-router></app-router>
      </div>
    `;
  }
}
