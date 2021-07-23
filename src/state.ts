type Jugada = "piedra" | "papel" | "tijera";
type Jugadores = "usuario" | "pc";


export const state = {
    data : {},

    getState(){
        return this.data;
    },

    
    initScore(){ 
        const lastState = this.getState();
        this.data = {
            ...lastState,
            usuario: 0,
            pc: 0,
        }
        localStorage.setItem("score", JSON.stringify(this.data));
    },

    aJugar(jugador:Jugada, pc:Jugada){
        this.data = JSON.parse(localStorage.getItem("score"));
        if( jugador == "piedra" && pc == "tijera" ||
            jugador == "papel" && pc == "piedra" ||
            jugador == "tijera" && pc == "papel"
            )
        {
            // console.log(`gana usuario con ${jugador}`);               
            this.setPunto("usuario")
        }
        else if(jugador == pc){
            // console.log(`Empate. Usuario: ${jugador} y Pc: ${pc}`);
        }
        else{  
            // console.log(`gana pc con ${pc}`);
            this.setPunto("pc");
        }
    },
    setPunto(ganador:Jugadores){
        let puntaje = this.getState()[ganador];
        puntaje++;
        const lastState = this.getState();
        this.data = {
            ...lastState,
            [ganador]: puntaje,
        }
        this.chequear(ganador);
        localStorage.setItem("score", JSON.stringify(this.data));
    },
    chequear(ultimoGanador){
        const puntaje = this.getState();
            const lastState = this.getState();
            this.data = {
                ...lastState,
                ultimoGanador: ultimoGanador ,
            }    
    },
    configPc():string{
        const jugadas = ["piedra", "papel", "tijera"];
        const index = Math.floor(Math.random()*3);
        // console.log('Eligio:',jugadas[index]);
        return jugadas[index];

    },



}
       
    