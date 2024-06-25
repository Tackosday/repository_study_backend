let uni = prompt("¿cuantas universidades partisipan en el proceso?")

let i=0

if(uni != 0){
    let name = prompt("¿cual es el nombre  de tu universidad?")
    let voto = prompt("¿cual es tu voto?(si eliges otra letra no acorde a lo escrito sera nulo el voto): A(aceptar) R(rechasar) B(blanco) X(no mas votos)")
    let votosList=[]
    switch(voto){
        case "A" || "a":
            votosList.push("A")
            break;
        
        case "R" || "r":
            votosList.push("R")
            break;
        
        case "B" || "b":
            votosList.push("B")
            break;
        
        case "X" || "x":
            break;

        default: "N"
    }
        
}
    

