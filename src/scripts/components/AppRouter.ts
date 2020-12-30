import { LitElement, html, customElement } from "lit-element";
import { Router } from "@vaadin/router";
import '../pages/HomePage'
import '../pages/AboutPage'
import '../pages/ContactPage'

@customElement("app-router")
export class TopBar extends LitElement {
  firstUpdated() {
    const outlet = this.shadowRoot.getElementById("outlet");
    const router = new Router(outlet);
    router.setRoutes([
      { path: "/", component: "home-page" },
      { path: "/about", component: "about-page" },
      { path: "/contact", component: "contact-page" },
    ]);
  }

  render() {
    return html` <div id="outlet"></div> `;
  }
}
