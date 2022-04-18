let velocity = 80

if(velocity < 40) {
    console.log("Velocidade baixa")
} else if(velocity <= 100) {
        console.log("Você está se aproximando de uma velodade de risco")
    } else {
        console.log("Velocidade de Risco!")
    }
    
(velocity > 100) ? console.log("Velocidade maior que 100") : console.log("Velocidade menor que 100") // if de uma linha (operador ternário)
// Recomendado utilizar apenas para códigos pequenos
