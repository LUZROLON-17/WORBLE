//let palabra = "Mause",//APPLE !== apple
let lista = ['APPLE',"PLEASE","MAUSE","GREEN","HAUSE"]
let intento = 6;

//console.log("random",Math.floor(Math.random ()*lista.length))
let indice = Math.floor(Math.random ()*lista.length);
let palabra = lista [indice];

const button = document.getElementById("guess-button");

button.addEventListener("click", intentar);
console.log(palabra);

function intentar(){
    const grid = document.getElementById("grid");
    const row = document.createElement('div');
    row.className = 'row';
    const valor = leerIntento();
    console.log(valor)
    if(valor === palabra){
        terminar("<h1>GANASTE</h1>")   
        return
    }
    for(i in palabra){
        const samp  = document.createElement('samp');
        samp.className = 'letter';
        if(palabra[i] === valor[i]){
            console.log(palabra[i],"verde");
            samp.style.backgroundColor = "green";
            samp.innerHTML = valor[i];
        }else if(palabra.includes (valor[i])){
            console.log(palabra[i],"amarillo"); 
            samp.style.backgroundColor = "yellow"
            samp.innerHTML = valor[i];  
        } { 
            console.log(valor[i],"gris");
            samp.style.backgroundColor = "gray"
            samp.innerHTML = valor[i];  
        }

        row.appendChild(samp)
}
grid.appendChild(row)
intento = intento - 1;
    console.log(intento)
    if( palabra <= 0);{
        console.log("Perdiste");
        terminar("<h1>PERDISTE</h1>")
    }
} 
    
 function leerIntento(){
    let valor= document.getElementById("guess-input").value.toUpperCase();
    return valor;
 }

 function terminar(mensaje){
    const input = document.getElementById("guess-input");
    input.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}