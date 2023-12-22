// 3. Desenvolva um algoritmo que preenche um vetor com os 4
// primeiros números perfeitos.

let vetor = [];
let numero = 2;

while (vetor.length < 4) {
  let soma = 1;


  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
      soma += i;
    }
  }

  if (soma === numero) {
    vetor.push(numero);
  }

  numero++;

}
console.log(vetor);

