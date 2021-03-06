import { state } from "../../state";



export function initHome(param){
    //inicializo el score.
    const lastState = state.getState();
    if (lastState.inicializo == false){
        state.initScore();
    }

    const containerEl = document.createElement('div');
    containerEl.classList.add("home-cont");
    const componentEl = document.createElement("div");
    var style = document.createElement("style");

    style.textContent=
    `
        .titulo{
            padding-top : 70px;
            padding-left: 35px;
            font-size: 80px;
            color: #009048;
        }
        .boton-comp{
            margin: 45px 20px 65px 85px;
        }
        .footer-comp{
            margin-left:50px;
        }
        @media (min-width: 376px) {
            .titulo{
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
            }
            .boton-comp{
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
            }
            .footer-comp{
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
            }
        }
    `

    componentEl.innerHTML=`

            <h1 class="titulo">Piedra <br> Papel o<br>Tijera </h1>
            <div class="boton-comp">
                <boton-component >Empezar</boton-component>
            </div>
            <div class="footer-comp">
                <footer-component></footer-component>
            </div>
        
    `

    containerEl.appendChild(style);
    containerEl.appendChild(componentEl);
    
    const continuar = componentEl.querySelector("boton-component");
    continuar.addEventListener("click", (e)=>{
        e.preventDefault();
        param.goTo("/instrucciones");
    })
    return containerEl;
        
}