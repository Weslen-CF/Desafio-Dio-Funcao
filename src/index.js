let nome = "Tracer"
let xpinicial = 1
let quantidadeXp = 0
let nivel = " "

for (let contador = 0; contador < 10; contador ++ ){
   
    quantidadeXp = quantidadeXp + 1000 + xpinicial
   
  }


if (quantidadeXp == 1 || quantidadeXp == 999){
    nivel = "Ferro"
    console.log("Se XP for menor do que 1.000 = " + nivel)
    console.log("O Herói de nome " + nome + " " + "está no nivel "+ nivel)

}
else if(quantidadeXp == 1001 || quantidadeXp == 2000) {
    nivel = "Bronze"
    console.log("Se XP for entre 1.001 e 2.000 = " + nivel)
    console.log("O Herói de nome " + nome + " " + "está no nivel "+ nivel)

}
else  if(quantidadeXp == 2001 || quantidadeXp == 5000) {
    nivel = "Prata"
    console.log("Se XP for entre 2.001 e 5.000 = " + nivel)
    console.log("O Herói de nome " + nome + " " + "está no nivel "+ nivel)
}
else  if(quantidadeXp == 5000 || quantidadeXp == 7000) {
    nivel = "Ouro"
    console.log("Se XP for entre 5.001 e 7.000 = " + nivel)
    console.log("O Herói de nome " + nome + " " + "está no nivel "+ nivel)
}
else  if(quantidadeXp == 7001 || quantidadeXp == 8000) {
    nivel = "Platina"
    console.log("Se XP for entre 7.001 e 8.000 = " + nivel)
    console.log("O Herói de nome " + nome + " " + "está no nivel "+ nivel)
}
else  if(quantidadeXp == 8001 || quantidadeXp == 9000) {
    nivel = "Ascendente"
    console.log("Se XP for entre 8.001 e 9.000 = " + nivel)
    console.log("O Herói de nome " + nome + " " + "está no nivel "+ nivel)
}
else  if(quantidadeXp == 9001 || quantidadeXp == 10000) {
    nivel = "Imortal"
    console.log("Se XP for entre 9.001 e 10.000 = " + nivel)
    console.log("O Herói de nome " + nome + " " + "está no nivel "+ nivel)
}
else if (quantidadeXp == 10001 || quantidadeXp == 10010){
    nivel = "Radiante"
    console.log("Se XP for maior ou igual a 10.001 = " + nivel)
    console.log("O Herói de nome " + nome + " " + "está no nivel "+ nivel)
}