const estrellaPerdedora = require("url:./../../img/StarPerdedora.svg");
const estrellaGanadora  = require("url:./../../img/StarGanadora.svg");


import { state } from "../../state";

export function initResultado(param){
    const ganador = verificar();
    const containerEl = document.createElement('div');
    containerEl.classList.add("cuadro-cont");
    const componentEl = document.createElement("div");
    var style = document.createElement("style");

    componentEl.innerHTML=`
        <div class="imagen-comp">    
            <imagen-estrella></imagen-estrella>
        </div>
        <div class="cuadro-comp">
            <cuadro-component></cuadro-component>
        </div>
        <div class='boton-comp'>
            <boton-component>Volver a Jugar</boton-component>
        </div>
    `
    //Le doy estilo dependiendo del ganador
    if(ganador == "usuario"){
        style.textContent=
        `   
        .inst-cont{
            position:fixed;
            background-image: url("./../../img/fondo.svg");
            max-height:670px;
            overflow: hidden;

        }
        .cuadro-cont{
            background-color:  rgba(136, 137, 73, 0.9);
            ;
            z-index:1;
            position:fixed;


        }
        .imagen-comp{
            padding: 0px 60px;
            padding-top: 25px;
        }
        .cuadro-comp{
            padding: 20px 55px;   

        }
        .boton-comp{
            padding:0px 20px;
            padding-bottom:20px;
        }  
        @media (min-width: 376px) {
            .imagen-comp{
                padding: 0px 480px;
                padding-top: 25px;
            }
            .cuadro-comp{
                padding: 20px 475px;   
    
            }
            .boton-comp{
                padding:0px 440px;
                padding-bottom:20px;
            }  

        }
        ` 
        containerEl.appendChild(style);
        containerEl.appendChild(componentEl);  
        const imagen = containerEl.querySelector("imagen-estrella").shadowRoot.querySelector("img");
        imagen.setAttribute("src", estrellaGanadora)   
    }
    else{

        style.textContent=
        `
            .inst-cont{
                position:fixed;
                background-image: url("./../../img/fondo.svg");
                max-height:670px;
                overflow: hidden;

            }
            .cuadro-cont{
                background-color: rgba(137, 73, 73, 0.9) ;
                z-index:1;
                position:fixed;


            }
            .imagen-comp{
                padding: 0px 60px;
                padding-top: 25px;
            }
            .cuadro-comp{
                padding: 20px 55px;   
   
            }
            .boton-comp{
                padding:0px 20px;
                padding-bottom:20px;
            }  
            @media (min-width: 376px) {
                .imagen-comp{
                    padding: 0px 480px;
                    padding-top: 25px;
                }
                .cuadro-comp{
                    padding: 20px 475px;   
       
                }
                .boton-comp{
                    padding:0px 440px;
                    padding-bottom:20px;
                }  
            }
        `

        containerEl.appendChild(style);
        containerEl.appendChild(componentEl);
        const imagen = containerEl.querySelector("imagen-estrella").shadowRoot.querySelector("img");
        imagen.setAttribute("src", estrellaPerdedora)        
    }

    const boton = componentEl.querySelector('boton-component').shadowRoot.querySelector('.boton');
    boton.addEventListener("click",(e)=>{
        state.initScore();
        param.goTo("/instrucciones")
    });
    return containerEl;   
}

function verificar(){
    
    const lastState = JSON.parse(localStorage.getItem("score"));
    if(lastState.usuario == 4)
        return "usuario"
    else
        return "pc"
}