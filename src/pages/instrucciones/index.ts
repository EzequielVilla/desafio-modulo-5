export function initInstruccion(param){
    const containerEl = document.createElement('div');
    containerEl.classList.add("inst-cont");
    const componentEl = document.createElement("div");
    var style = document.createElement("style");

    style.textContent=
    `
        .titulo{
            width:315px;
            padding-top : 70px;
            padding-left: 35px;
            font-size: 40px;
            
        }
        .boton-comp{
            margin: 45px 20px 65px 85px;

        }
        .footer-comp{
            margin-left:50px;
        }
        @media (min-width: 376px) {
            .titulo{   
                width:750px;
                padding-left: 435px;                
            }
            .boton-comp{
                margin: 45px 20px 65px 485px;
    
            }
            .footer-comp{
                margin-left:450px;
            }
        
        }

    `

    componentEl.innerHTML=`

            <h1 class="titulo">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos. </h1>
            <div class="boton-comp">
                <boton-component class=>¡Jugar!</boton-component>
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
        param.goTo("/jugada");
    })
    return containerEl;
        
}