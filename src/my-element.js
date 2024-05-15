import { LitElement, html, css } from "lit";

class Myelement extends LitElement{
  static properties = {
    name: {type: Array}
  }
  constructor(){
    super();
    this.name = [];
  }
  static styles = css`
    .container{
      color: red;
      display: flex;
      justify-content: space-between;
    }
  `
    render(){
    return html`
      <input @change="${this._guardar}">
    `;
  }
  _guardar(e){
    this.name.push(e.target.value);
    console.log(this.name);
    e.target.value = null;
  }
}
customElements.define("my-element", Myelement);

/*${this.name.map(val=> html` <p>${val}</p>`)}*/