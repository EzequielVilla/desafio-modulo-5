import { initBoton } from "./components/boton";
import { initCuadro } from "./components/cuadro-score/cuadroScore";
import { initEstrella } from "./components/estrella";
import { initFooter } from "./components/footer";
import { initJugadas } from "./components/jugadas";
import { initTiempo } from "./components/tiempo";

import { initRouter } from "./routes";
import { state } from "./state";

import {tests} from "./stateTest"

// tests();

function main(){
    initBoton();
    initEstrella();
    initJugadas();
    initTiempo();
    initFooter();
    initCuadro();
    const root = document.querySelector(".root");  
    
    
    initRouter(root);
}

main();
