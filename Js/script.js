let nameOld = prompt("Digite o Nome da pessoa mais velha:")
let ageOld = prompt("Digite a Idade da pessoa mais velha:")
let nameYounger = prompt("Digite o Nome da pessoa mais nova:")
let ageYounger = prompt("Digite a Idade da pessoa mais nova:")

const final = ageOld - ageYounger 

alert(
        "Nome " + nameOld + 
            "\nIdade: " + ageOld + " anos" +

        "\n\n" +

        "Nome " + nameYounger + 
            "\nIdade: " + ageYounger + " anos"

      )

alert("A diferença de idade entre os dois é de " + final)

