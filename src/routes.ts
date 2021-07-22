
import { initHome } from "./pages/home"
import { initInstruccion } from "./pages/instrucciones"
import { initJugada} from "./pages/jugada"
import { initResultado } from "./pages/resultado"

const routes = 
[
    {
        path: /^\/desafio-modulo-5$/,
        component: initHome,
    },
    {
        path: /^\/home$/,
        component: initHome,
    },
    {
        path: /^\/instrucciones$/,
        component: initInstruccion,
    },   
    {
        path: /^\/jugada$/,
        component: initJugada,
    },
    {
        path: /^\/resultado$/,
        component: initResultado,
    },
]

export function initRouter(container:Element){
    function goTo(path){
        
        
        history.pushState({},"", path);
        handleRoute(path);        
    }
    function handleRoute(route:string){
        if(route != "/resultado"){
            container.innerHTML=``;
        }
        routes.find((r) =>{
            if(r.path.test(route)){
                localStorage.setItem("path", JSON.stringify(route));
                const el = r.component({goTo:goTo});
                container.appendChild(el);
            }
        });
    }
    const direccionLocalStorage = (JSON.parse(localStorage.getItem("path")));
    if(location.host.includes("github.io"))
        goTo("/home");
    if(direccionLocalStorage != null && location.pathname != "/home")
        handleRoute(direccionLocalStorage )
    else if(location.pathname === "/")
        goTo("/home");
    else
        handleRoute(location.pathname);
}


