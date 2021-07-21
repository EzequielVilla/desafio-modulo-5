

export function initEstrella(){
    class EstrellaComponent extends HTMLElement{
        shadow = this.attachShadow({mode: "open"});
        constructor(){
            super();
            this.render();
        }
        render(){

            let div = document.createElement("div");
            div.innerHTML = `
                <img class="img" src= "" alt="">
            `
            this.shadow.appendChild(div);
        }
    }
    customElements.define('imagen-estrella', EstrellaComponent);
}