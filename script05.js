/* 
 -----------Jogo da adivinhação------------
 Apresenta a mensagem ao usuário:
 "Adivinhe o número que estou pensando? Está entre 0 e 10"

 Crie uma lógica para gerar um número aleatório
 e verifique se o número digitado é o mesmo que o aleatório gerado pelo sistema.

 Enquanto o usuário não acertar o número, mostrar a mensagem:
 "Erro, tente novamente: "
 
 Caso o usuário acerte o número, apresentar a mensagem: "Parabéns! Você acertou o número em x tentativas"

 Substitua o "x" para o número de tentativas
*/

let result =  prompt("Adivinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)
 
let xAttempts = 1;

while(Number(result) != randomNumber){

    result = prompt("Erro, tente novamente:")
    xAttempts++ 

}

alert(`Parabéns! Você advinhou o número em   ${xAttempts}  tentativas`)