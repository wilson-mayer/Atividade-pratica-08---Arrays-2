// 4. Desenvolva um algoritmo que declare uma lista de 10 números e
// solicite um número para o usuário e no final informe se o número
// que o usuário digitou está dentro da lista ou não.


let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let insiraNumero = Number(prompt('Digite um número'));

for (let numero of vetor) {
  if (insiraNumero == numero) {
  console.log('Seu número está na lista');
  break;
} else {
  console.log('Seu número não está na lista');
  break;
}
}
