import { LitElement, css, html } from 'lit'


export class MyElement extends LitElement {
  

  constructor() {
    super();
    this.image = "/src/assets/image20.svg"
    this.title = "Money Machine"
    this.description = "1000 Gecks"
    this.leftArrow= "/src/assets/leftArrow.png"
    this.playButton = "/src/assets/playbutton.svg"
    this.rightArrow= "/src/assets/rightArrow.png"
  } 

  static styles =css`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  
  body {
      margin: 0;
      display: flex;
      place-items: center;
      min-width: 320px;
      min-height: 100vh;
  }
  
  @media (prefers-color-scheme: light) {
      :root {
          color: #213547;
          background-color: #ffffff;
      }
  }

    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      width: 250px;
      height: 350px;
      border-radius: 20px;
      position: relative;
      overflow: hidden;
    }

    .container::before{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(/src/assets/image20.svg);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      filter: blur(10px);
      z-index: -1;
    }

    .atras img{
      width: 100%;
      height: 100%;
    }

    .atras{
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 20px;
      height: 20px;
      top: 40px;
      left: 10px;
      z-index: 2;
    }

    .main_container{
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      gap: 5px;
      position: relative;
      z-index: 1;
    }

    .main_container .bck_img{
      display: flex;
    }

    .bck_img img{
      width: 200px;
      max-height: 250px;
    }

    .interactive_buttons{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button{
      border-radius: 100px;
      border-style: none;
      background-color: transparent;
    }

    .button_play{
      display: flex;
      justify-content: center;
      align-items: center;  
      margin: 10px;
      border-radius: 100%;
      font-size: 50px;
      width: 40px;
      height: 40px;
    }
  `
  render(){
    return html`
      <div class="container">

        <div class="atras"><img src="/src/assets/atras.svg"></div>
        
        <div class="main_container"> 
          <div class="bck_img">
          <img src="${this.image}">
          </div>
          <h2>${this.title}</h2>
          <h3>${this.description}</h3>
        </div>


        <div class= "interactive_buttons">
          <button><img src="${this.leftArrow}"></button> 
          <button class= "button_play"><img src="${this.playButton}"></button> 
          <button><img src="${this.rightArrow}"></button>
        </div>
      </div>
    `;
  }

}

window.customElements.define('my-notification', MyElement)