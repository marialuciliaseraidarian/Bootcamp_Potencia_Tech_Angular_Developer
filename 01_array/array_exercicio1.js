// 1) crie um programa que dado um número imprima a sua tabuada:

const numero = 7;

for (let i = 1; i <= 10; i++) {
  const resulTabuada = i * numero;
  const tabuada =  numero + "X" + i;
  console.log(tabuada + " = " + resulTabuada);    
}

