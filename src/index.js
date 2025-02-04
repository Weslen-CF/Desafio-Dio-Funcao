let nome = "Zelda"
let saldoVitorias =  1
let saldoDerrotas = 0

for (let contador = 0; contador < 10; contador ++ ){
    saldoVitorias = saldoVitorias - saldoDerrotas
    saldoVitorias = saldoVitorias + 10 
  }
 
if ( saldoVitorias == 1 || saldoVitorias == 10){
    ferro("Ferro")
}
else if( saldoVitorias == 11 || saldoVitorias == 20) {
    bronze("Bronze")
}
else  if( saldoVitorias == 21 || saldoVitorias == 50) {
    prata("Prata")
}
else  if(saldoVitorias == 51 || saldoVitorias == 80) {
    ouro("Ouro")
}
else  if( saldoVitorias == 81 || saldoVitorias == 90) {
    diamante("Diamante")
}
else  if( saldoVitorias == 91 || saldoVitorias == 100) {
    lendario("Lendario")
}
else  if(saldoVitorias == 101 || saldoVitorias == 110) {
    imortal("Imortal")
}
  function ferro(nivel){
    console.log("Se vitórias for menor do que 10 = " + nivel)
    console.log("O Herói tem de saldo " + saldoVitorias + " " + "está no nivel "+ nivel)
  }
  function bronze(nivel){
    console.log("Se vitórias for entre 11 e 20 = " + nivel)
    console.log("O Herói tem de saldo " + saldoVitorias + " " + "está no nivel "+ nivel)
  }
  function prata (nivel){
    console.log("Se vitórias for entre 21 e 50 = " + nivel)
    console.log("O Herói tem de saldo " + saldoVitorias + " " + "está no nivel "+ nivel)
  }
  function ouro (nivel){
    console.log("Se vitórias for entre 51 e 80 = " + nivel)
    console.log("O Herói tem de saldo " + saldoVitorias + " " + "está no nivel "+ nivel)
  }
  function diamante (nivel){
    console.log("Se vitórias for entre 81 e 90 = " + nivel)
    console.log("O Herói tem de saldo " + saldoVitorias + " " + "está no nivel "+ nivel)
  }
  function lendario (nivel){
    console.log("Se vitórias for entre 91 e 100 = " + nivel)
    console.log("O Herói tem de saldo " + saldoVitorias + " " + "está no nivel "+ nivel)
  }
  function imortal (nivel){
    console.log("Se vitórias for maior ou igual a 101 " + nivel)
    console.log("O Herói tem de saldo " + saldoVitorias + " " + "está no nivel "+ nivel)
} 
