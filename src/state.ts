type Jugada = "piedra" | "papel" | "tijera";
type Jugadores = "usuario" | "pc";



//Falta guardar y leer de localStorage.
//Guardar en localStorage el location.pathname para que cuando se vuelva a cargar vaya a esa pagina directamente.
//Guardar localStorage en initScore()
//Guardar localStorage en setPunto()
//Algo desde afuera avisa que el ganador es true y guarda en localStorage?
//Si la partida volvio a empezar, se borran todos los datos?

//Cuando este en la pagina de inicio y haga click en empezar que inicialice el initScore()

//Se llama aJugar() desde la pagina de inicio cuando se haga click en alguna mano
//get atributte y pasarlo al parametro de la funcion?  

//Cuando ganador == true pase a la pagina de "resultado" y tenga 2 opciones de pagina
//dependiendo el ganador.
//Como activar la pagina dependiendo de ganador == true? Desde la pagina hacer state.chequeo()?
// que devuelva el nombre del ganador y a partir de ahi modificar la pagina!
export const state = {
    data : {},
    listeners: [],

    getState(){
        return this.data;
    },

    
    initScore(){ 
        const lastState = this.getState();
        this.data = {
            ...lastState,
            usuario: 0,
            pc: 0,
            ganador: false,
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
        const puntaje = this.getState()[ultimoGanador];
        if(puntaje == 4){
            const lastState = this.getState();
            this.data = {
                ...lastState,
                ganador: true,
            }
            // console.log(`El ganador es ${ultimoGanador}`); 
            ultimoGanador //?         
        }   
    },
    configPc():string{
        const jugadas = ["piedra", "papel", "tijera"];
        const index = Math.floor(Math.random()*3);
        // console.log('Eligio:',jugadas[index]);
        return jugadas[index];

    },



}
       
    