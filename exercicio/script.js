let name = prompt("Qual é o seu nome?")
let velocity = 0
let velocity1 = prompt("Certo, Sr." + name + " a qual velocidade gostaria de acelerar a nave? ")
let confirmVelocity = confirm("Indo para a velocidade " + velocity1 + " km/h")

if(confirmVelocity) {
    velocity = velocity1
}


if (velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if (velocity < 40) {
    alert("Você está devagar, podemos aumentar mais")
} else if (velocity >= 40 && velocity < 80) {
    alert("Parece uma boa velocidade para manter")
} else if (velocity >= 80 && velocity < 100) {
    alert("Velocidade alta. Considere diminuir.")
} else if (velocity >= 100) {
    alert("Velocidade perigosa. Controle automática forçado")
}

alert("Sr. " + name + ", sua velocidade atual é de " + velocity + " km/h")
