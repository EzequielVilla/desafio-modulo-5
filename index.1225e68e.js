!function(){function n(n,e,t,o){Object.defineProperty(n,e,{get:t,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=e.parcelRequire6f0b;null==i&&((i=function(n){if(n in t)return t[n].exports;if(n in o){let e=o[n];delete o[n];let i={id:n,exports:{}};return t[n]=i,e.call(i.exports,i,i.exports),i.exports}var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}).register=function(n,e){o[n]=e},e.parcelRequire6f0b=i),i.register("3OOJ5",(function(e,t){var o,i;n(e.exports,"resolve",(()=>o),(n=>o=n)),n(e.exports,"register",(()=>i),(n=>i=n));var a={};i=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)a[e[t]]=n[e[t]]},o=function(n){var e=a[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),i("3OOJ5").register(JSON.parse('{"X98ws":"index.1225e68e.js","61WpP":"piedra.578f3049.svg","2Oq9a":"papel.411bce94.svg","44GbG":"tijera.0403a6bb.svg","LvS2s":"StarPerdedora.2c13211f.svg","3Z8Dh":"StarGanadora.a89d4f3b.svg"}'));var a;i.register("31oBo",(function(e,t){var o;n(e.exports,"getBundleURL",(()=>o),(n=>o=n));var i=null;function a(n){return(""+n).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(){return i||(i=function(){try{throw new Error}catch(e){var n=(""+e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(n)return a(n[0])}return"/"}()),i}})),i.register("3XRD4",(function(n,e){"use strict";var t=i("3OOJ5").resolve;function o(n){if(""===n)return".";var e="/"===n[n.length-1]?n.slice(0,n.length-1):n,t=e.lastIndexOf("/");return-1===t?".":e.slice(0,t)}function a(n,e){if(n===e)return"";var t=n.split("/");"."===t[0]&&t.shift();var o,i,a=e.split("/");for("."===a[0]&&a.shift(),o=0;(o<a.length||o<t.length)&&null==i;o++)t[o]!==a[o]&&(i=o);var r=[];for(o=0;o<t.length-i;o++)r.push("..");return a.length>i&&r.push.apply(r,a.slice(i)),r.join("/")}n.exports=function(n,e){return a(o(t(n)),t(e))},n.exports._dirname=o,n.exports._relative=a})),a=i("31oBo").getBundleURL()+i("3XRD4")("X98ws","61WpP");var r;r=i("31oBo").getBundleURL()+i("3XRD4")("X98ws","2Oq9a");var c;c=i("31oBo").getBundleURL()+i("3XRD4")("X98ws","44GbG");const d={data:{},getState(){return this.data},initScore(){const n=this.getState();this.data={...n,usuario:0,pc:0},localStorage.setItem("score",JSON.stringify(this.data))},aJugar(n,e){this.data=JSON.parse(localStorage.getItem("score")),"piedra"==n&&"tijera"==e||"papel"==n&&"piedra"==e||"tijera"==n&&"papel"==e?this.setPunto("usuario"):n==e||this.setPunto("pc")},setPunto(n){let e=this.getState()[n];e++;const t=this.getState();this.data={...t,[n]:e},this.chequear(n),localStorage.setItem("score",JSON.stringify(this.data))},chequear(n){this.getState();const e=this.getState();this.data={...e,ultimoGanador:n}},configPc:()=>["piedra","papel","tijera"][Math.floor(3*Math.random())]};function s(n){0==d.getState().inicializo&&d.initScore();const e=document.createElement("div");e.classList.add("home-cont");const t=document.createElement("div");var o=document.createElement("style");o.textContent="\n        .titulo{\n            padding-top : 70px;\n            padding-left: 35px;\n            font-size: 80px;\n            color: #009048;\n        }\n        .boton-comp{\n            margin: 45px 20px 65px 85px;\n        }\n        .footer-comp{\n            margin-left:50px;\n        }\n        @media (min-width: 376px) {\n            .titulo{\n                display:flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                text-align: center;\n            }\n            .boton-comp{\n                display:flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                text-align: center;\n            }\n            .footer-comp{\n                display:flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                text-align: center;\n            }\n        }\n    ",t.innerHTML='\n\n            <h1 class="titulo">Piedra <br> Papel o<br>Tijera </h1>\n            <div class="boton-comp">\n                <boton-component >Empezar</boton-component>\n            </div>\n            <div class="footer-comp">\n                <footer-component></footer-component>\n            </div>\n        \n    ',e.appendChild(o),e.appendChild(t);return t.querySelector("boton-component").addEventListener("click",(e=>{e.preventDefault(),n.goTo("/instrucciones")})),e}function l(n,e){return e.querySelector("footer-component").shadowRoot.querySelector(`.${n}`)}function p(n,e,t){n.addEventListener("click",(o=>{o.preventDefault();const i=n.getAttribute("name"),a=d.configPc();d.aJugar(i,a),console.log(d.getState());d.getState();!function(n,e){const t=n.getAttribute("class"),o=e.querySelector("footer-component").shadowRoot,i=document.createElement("style");i.textContent=`\n    img{\n        opacity:0.7;\n        margin-bottom:-70px;\n        \n    }\n    .${t}{\n        opacity:1;\n        margin-bottom: -30px; \n    }\n    `,o.appendChild(i),setTimeout((()=>{}),1e3)}(n,t),setTimeout((()=>{!function(n,e,t){t.innerHTML="";const o=e.getAttribute("class");var i=document.createElement("style"),a=document.createElement("div");i.textContent="\n    @media (min-width: 376px) {\n        .pc{\n            \n            display:flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            text-align: center;\n        }\n        .usuario{\n            \n            display:flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            text-align: center;\n        }\n    }\n\n        \n    ",a.innerHTML='\n    <div class="pc">\n        <footer-component class="pc__comp">h</footer-component>\n    </div>\n    <div class="usuario">\n        <footer-component class="usuario__comp">k</footer-component> \n    </div>\n    ';a.querySelectorAll("footer-component").forEach((n=>{const e=n.shadowRoot,t=document.createElement("style");t.textContent="\n        img{\n            opacity: 0;\n            position:fixed;              \n        }\n        ",e.appendChild(t)}));const r=a.querySelector(".pc__comp").shadowRoot,c=document.createElement("style");c.textContent=`\n        img{\n            padding-right:120px;\n            padding-top:95px;\n        }\n        .${n}{\n            width:120px;\n            opacity:1;\n            position:initial;\n            transform: rotate(180deg);\n        }\n\n        @media (min-width: 376px) {\n            img{\n                \n                padding-top:95px;\n            }\n        }\n\n        \n    `,r.appendChild(c);const d=a.querySelector(".usuario__comp").shadowRoot,s=document.createElement("style");s.textContent=` \n        img{\n            padding-left:120px;\n            margin-top:100px;\n        }\n\n        .${o}{\n            width:120px;\n            opacity:1;\n            position:initial;\n        }\n        @media (min-width: 376px) {\n            img{\n                \n                padding-top:55px;\n            }\n        }\n    `,d.appendChild(s),t.appendChild(i),t.appendChild(a)}(a,n,t)}),1e3),setTimeout((()=>{e.goTo("/resultado")}),2e3)}))}i.register("1euHZ",(function(n,e){n.exports=i("31oBo").getBundleURL()+i("3XRD4")("X98ws","LvS2s")})),i.register("66bqu",(function(n,e){n.exports=i("31oBo").getBundleURL()+i("3XRD4")("X98ws","3Z8Dh")}));const m=[{path:/^\/desafio-modulo-5$/,component:s},{path:/^\/home$/,component:s},{path:/^\/instrucciones$/,component:function(n){const e=document.createElement("div");e.classList.add("inst-cont");const t=document.createElement("div");var o=document.createElement("style");return o.textContent="\n        .titulo-cont__texto{\n            width:315px;\n            padding-top : 70px;\n            padding-left: 35px;\n            font-size: 40px;\n            \n        }\n        .boton-comp{\n            margin: 45px 20px 65px 85px;\n\n        }\n        .footer-comp{\n            margin-left:50px;\n        }\n        @media (min-width: 376px) {\n            .inst-cont{\n                 display:flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                text-align: center;\n            }\n            .titulo-cont{\n                display:flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                text-align: center;\n            }\n            .titulo-cont__texto{   \n                \n                width:300px;             \n            }\n            .boton-comp{\n                margin-top: 45px;\n                margin-bottom:65px;\n                display:flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                text-align: center;\n    \n            }\n            .footer-comp{\n                display:flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                text-align: center;\n                \n            }\n        \n        }\n\n    ",t.innerHTML='\n            <div class="titulo-cont">\n                <h1 class="titulo-cont__texto">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos. </h1>  \n            </div>\n            <div class="boton-comp">\n                <boton-component class=>¡Jugar!</boton-component>\n            </div>\n            <div class="footer-comp">\n                <footer-component></footer-component>\n            </div>\n        \n    ',e.appendChild(o),e.appendChild(t),t.querySelector("boton-component").addEventListener("click",(e=>{e.preventDefault(),n.goTo("/jugada")})),e}},{path:/^\/jugada$/,component:function(n){const e=document.createElement("div");e.classList.add("inst-cont");const t=document.createElement("div");var o=document.createElement("style");o.textContent="      \n        .comp__tiempo{\n            padding: 170px 60px;\n        }\n        .comp__footer{\n            padding: 0px 80px;\n        }\n\n        @media (min-width: 376px) {\n\n            .comp__tiempo{\n                padding: 170px;\n                display:flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                text-align: center;\n            }\n            .comp__footer{\n                padding: 0px ;\n                 display:flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                text-align: center;\n            }\n        }\n        \n\n    ",t.innerHTML='\n        <div class= "comp__tiempo">\n            <tiempo-component></tiempo-component>\n        </div>\n        <div class= "comp__footer">\n            <footer-component></footer-component>\n        </div>\n    ',e.appendChild(o),e.appendChild(t),function(n){const e=n.querySelector("footer-component").shadowRoot,t=document.createElement("style");t.textContent="\n    img{\n        margin-right:10px;\n        margin-bottom:-30px;\n        cursor: pointer;\n    }\n    ",e.appendChild(t)}(e);const i=l("piedra",e),a=l("papel",e),r=l("tijera",e);return function(n,e){n.querySelector(".comp__footer").addEventListener("click",(n=>{clearInterval(o)}));var t=n.querySelector("tiempo-component").shadowRoot.querySelector(".contador");t.innerHTML="3";const o=setInterval((()=>{t.textContent--,0==t.textContent&&(e.goTo("/home"),clearInterval(o))}),1e3)}(e,n),p(i,n,e),p(a,n,e),p(r,n,e),e}},{path:/^\/resultado$/,component:function(n){const e=i("1euHZ"),t=i("66bqu"),o="usuario"==d.getState().ultimoGanador?"usuario":"pc",a=document.createElement("div");a.classList.add("cuadro-cont");const r=document.createElement("div");var c=document.createElement("style");if(r.innerHTML='\n        <div class="imagen-comp">    \n            <imagen-estrella></imagen-estrella>\n        </div>\n        <div class="cuadro-comp">\n            <cuadro-component></cuadro-component>\n        </div>\n        <div class=\'boton-comp\'>\n            <boton-component>Volver a Jugar</boton-component>\n        </div>\n    ',"usuario"==o){c.textContent='   \n        .inst-cont{\n            position:fixed;\n            background-image: url("./../../img/fondo.svg");\n            overflow: hidden;\n        }\n        .cuadro-cont{\n            background-color:  rgba(136, 137, 73, 0.9);\n            height:100vh;\n            width:100%;\n            z-index:1;\n            position:fixed;\n\n\n        }\n        .imagen-comp{\n            padding: 0px 60px;\n            padding-top: 25px;\n        }\n        .cuadro-comp{\n            padding: 20px 55px;   \n\n        }\n        .boton-comp{\n            padding:0px 20px;\n            padding-bottom:20px;\n        }  \n        @media (min-width: 376px) {\n            .inst-cont{\n                  \n                left:35%;\n\n            }\n            .imagen-comp{\n                display:flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                text-align: center;\n                \n                padding-top: 25px;\n            }\n\n            .cuadro-comp{\n                display:flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                text-align: center;\n                \n                padding: 20px;   \n   \n            }\n            .boton-comp{\n                display:flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                text-align: center;\n                padding:0px;\n                padding-bottom:20px;\n            }  \n        }\n        ',a.appendChild(c),a.appendChild(r);const n=a.querySelector("imagen-estrella").shadowRoot.querySelector("img");a.querySelector("imagen-estrella").shadowRoot.querySelector(".texto").textContent="Ganaste",n.setAttribute("src",t)}else{c.textContent='\n            .inst-cont{\n                position:fixed;\n                background-image: url("./../../img/fondo.svg");    \n                overflow: hidden;\n\n            }\n            .cuadro-cont{\n                background-color: rgba(137, 73, 73, 0.9) ;\n                height:100vh;\n                width:100%;\n                z-index:1;\n                position:fixed;\n\n\n            }\n            .imagen-comp{\n                padding: 0px 60px;\n                padding-top: 25px;\n            }\n            .cuadro-comp{\n                padding: 20px 55px;   \n   \n            }\n            .boton-comp{\n                padding:0px 20px;\n                padding-bottom:20px;\n            }  \n            @media (min-width: 376px) {\n                .inst-cont{\n                    left:35%;\n                }\n                .imagen-comp{\n                    display:flex;\n                    flex-direction: column;\n                    justify-content: center;\n                    align-items: center;\n                    text-align: center;\n                    \n                    padding-top: 25px;\n                }\n                .cuadro-comp{\n                    display:flex;\n                    flex-direction: column;\n                    justify-content: center;\n                    align-items: center;\n                    text-align: center;\n                    \n                    padding: 20px;   \n       \n                }\n                .boton-comp{\n                    display:flex;\n                    flex-direction: column;\n                    justify-content: center;\n                    align-items: center;\n                    text-align: center;\n                    padding:0px;\n                    padding-bottom:20px;\n                }  \n            }\n        ',a.appendChild(c),a.appendChild(r);const n=a.querySelector("imagen-estrella").shadowRoot.querySelector("img");a.querySelector("imagen-estrella").shadowRoot.querySelector(".texto").textContent="Perdiste",n.setAttribute("src",e)}return r.querySelector("boton-component").shadowRoot.querySelector(".boton").addEventListener("click",(e=>{n.goTo("/instrucciones")})),console.log(a),a}}];!function(){class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const n=this.textContent;var e=document.createElement("style");e.textContent='\n            @font-face {\n                font-family: "odibee";\n                src: url("./../../fonts/OdibeeSans-Regular.ttf");\n            }\n                .boton{\n                    padding:20px 20px;\n                    border: solid 10px #001997;\n                    border-radius:10px;\n                    background-color: #006CFC;\n                    font-family: odibee;\n                    font-size: 40px;\n                    color:white;\n                    cursor: pointer; \n                    max-width: 325px;\n                    \n\n                }\n            ',this.shadow.appendChild(e);const t=document.createElement("div");t.innerHTML=`\n                <button class ="boton">${n}</button>\n            `,this.shadow.appendChild(t)}}customElements.define("boton-component",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const n=document.createElement("style");let e=document.createElement("div");n.textContent="\n            .img {\n                position:relative;\n                z-index:0;      \n            }\n            .texto {\n                position:absolute;\n                z-index:1;  \n                top:13%;\n                padding-left:45px;\n\n                margin-top:1023px;\n                \n                display:flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                text-align: center;\n                color: white;\n                font-size: 45px;\n                margin: 0px;                \n            }\n            ",e.innerHTML='\n            <div>\n                <p class="texto"></p>\n                <img class="img" src= "" alt="">\n            </div>\n            ',this.shadow.appendChild(e),this.shadow.appendChild(n)}}customElements.define("imagen-estrella",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){let n=document.createElement("div");n.innerHTML='\n                <img src= "" alt="">\n            ',this.shadow.appendChild(n)}}customElements.define("jugadas-component",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const n=document.createElement("div"),e=document.createElement("style");e.textContent="\n                .full-circle{\n                    width: 200px;\n                    height:200px;\n                    border: 15px solid;\n                    border-radius: 50%;\n                    position: relative;\n                    \n                }\n                .contador{\n                    position: absolute;\n                    font-size: 100px;\n                    \n                    margin: 0px;\n                    top: 40px;\n                    left: 70px;\n                }\n                .\n               \n            ",this.shadow.appendChild(e),n.innerHTML='\n                <div class="full-circle"> \n                    <p class="contador"></p>\n                </div>\n            ',this.shadow.appendChild(n)}}customElements.define("tiempo-component",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const n=document.createElement("div"),e=document.createElement("style");e.textContent="\n                .img-cont{\n                    display: flex;\n                    flex-direction: row;\n                    overflow: hidden;\n                }\n                img{\n                    margin-right:45px;\n                    margin-bottom:-30px; \n                }\n                \n            ",this.shadow.appendChild(e),n.innerHTML=`\n                <div class="img-cont">\n                    <img class="piedra" src= ${a} alt="" name="piedra">\n                    <img class="papel" src= ${r} alt="" name="papel">\n                    <img class="tijera" src= ${c} alt="" name="tijera">  \n                </div>\n            `,this.shadow.appendChild(n)}}customElements.define("footer-component",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const n=JSON.parse(localStorage.getItem("score"));console.log(n);var e=document.createElement("style");e.textContent='\n            @font-face {\n                font-family: "odibee";\n                src: url("./../../fonts/OdibeeSans-Regular.ttf");\n            }\n            .cuadro{\n                z-index: 1;\n                background-color: white;\n                border: solid 10px black;\n                box-sizing: border-box;\n                border-radius: 10px;\n                width: 255px;\n                height: 215px;\n            }\n            .cuadro__titulo{\n                font-size:50px;\n                font-family:"odibee";\n                margin:0px;\n                text-align: center;\n            }\n            .cuadro__usuario{\n                padding-right: 10px;\n                margin:0px;\n                margin-top:10px;\n                font-size:35px;\n                font-family:"odibee";\n                text-align:right;\n            }\n            .cuadro__pc{\n                padding-right: 10px;\n                margin:0px;\n                font-size:35px;\n                font-family:"odibee";\n                text-align:right;\n            }\n\n            ',this.shadow.appendChild(e);const t=document.createElement("div");t.innerHTML=`\n            <div class="cuadro">\n                <p class="cuadro__titulo">Score</p>\r\n                <p class="cuadro__usuario"> Vos: ${n.usuario}</p>\n                <p class="cuadro__pc"> Maquina: ${n.pc}</p>\n            </div>\n            `,this.shadow.appendChild(t)}}customElements.define("cuadro-component",n)}(),function(n){function e(n){history.pushState({},"",n),t(n)}function t(t){"/resultado"!=t&&(n.innerHTML=""),m.find((o=>{if(o.path.test(t)){localStorage.setItem("path",JSON.stringify(t));const i=o.component({goTo:e});n.appendChild(i)}}))}const o=JSON.parse(localStorage.getItem("path"));location.host.includes("github.io")&&e("/home"),null!=o&&"/home"!=location.pathname?t(o):"/"===location.pathname?e("/home"):t(location.pathname)}(document.querySelector(".root"))}();
//# sourceMappingURL=index.1225e68e.js.map
