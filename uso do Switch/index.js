let distanceYL = prompt("Distância em anos-luz");
let chosenOption = prompt(
  "Escolha qual operação você deseja realizar:\n1 - Parsec(pc) \n2 - Unidade astronônima(AU) \n3 - Quilômetros(km) "
);
let distance

switch (chosenOption) {
  case "1":
    distance = distanceYL * 0.306601;
    alert("Distância em Anos-Luz: " + distanceYL + "\n" + distance + " pc");
    break;
  case "2":
    distance = distanceYL * 63241.1;
    alert("Distância em Anos-Luz: " + distanceYL + "\n" + distance + " AU");
    break;
  case "3":
    distance = distanceYL * (9.5 *  Math.pow(10,12))
    alert("Distância em Anos-Luz: " + distanceYL + "\n" + distance + " km");
    break;
  default:
    alert(
      "Distância em Anos-Luz: " +
     distanceYL +
        "\n Unidade não identificada: Conversão fora do escopo"
    );
}
