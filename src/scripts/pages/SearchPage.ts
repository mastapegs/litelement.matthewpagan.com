import { LitElement, property, html, customElement } from "lit-element";

@customElement("search-page")
export class AboutPage extends LitElement {
  @property() user = "";

  handleUserChange(event) {
    this.user = event.target.value;
  }

  render() {
    return html`
      <h1>Github User Search</h1>
      <div>
        <label for="user">User:</label>
        <input
          id="user"
          .value="${this.user}"
          @input="${this.handleUserChange}"
        />
      </div>
      <p>User: ${this.user}</p>
    `;
  }
}
