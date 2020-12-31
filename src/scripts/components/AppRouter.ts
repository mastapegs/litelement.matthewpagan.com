import { LitElement, html, customElement } from "lit-element";
import { Router } from "@vaadin/router";
import("../pages/HomePage").then();
import("../pages/AboutPage").then();
import("../pages/ContactPage").then();
import("../pages/SearchPage").then();

@customElement("app-router")
export class TopBar extends LitElement {
  firstUpdated() {
    const outlet = this.shadowRoot?.getElementById("outlet");
    const router = new Router(outlet);
    router.setRoutes([
      {
        path: "/",
        component: "home-page",
      },
      { path: "/about", component: "about-page" },
      { path: "/contact", component: "contact-page" },
      { path: "/github-usersearch", component: "search-page" },
    ]);
  }

  render() {
    return html` <div id="outlet"></div> `;
  }
}
