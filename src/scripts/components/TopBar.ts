import {LitElement, html, css, customElement} from 'lit-element'

@customElement('top-bar')
export class TopBar extends LitElement {

  static get styles() {
    return css`
      nav {
        background-color: blue;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
      }
      a {
        display: inline-block;
        padding: 0.5em;
        margin: 1em 0 1em 1em;
        color: white;
        text-decoration: inherit;
        background-color: hsl(210, 100%, 50%);
        border-radius: 30%;
      }
    `
  }
  
  render() {
    return html`
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    `
  }
  
}