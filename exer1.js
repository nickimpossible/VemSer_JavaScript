//---------Exercicio 01-----------
// let stringDigitada = prompt("Digite SIM/Nao");
//
// if (stringDigitada === "SIM"){
//     alert("Parabéns");
// } else if (stringDigitada === "Nao"){
//     stringDigitada = prompt("Digite um texto");
//     alert(stringDigitada);
// } else {
//     stringDigitada = prompt("Você tem noções dos seus atos?");
//     alert("blz");
// }

//--------Exercicio 02--------------
// let nomeCliente = prompt("Digite seu nome");
// let nomeAtendente = prompt("Digite o nome do atendente");
//
// alert(`Olá ${nomeCliente} eu me chamo ${nomeAtendente}, em que posso ajudar?`)

//--------Exercicio 03--------------
// let isFriday, isTwoGreaterThanFour, isValueEmpty;
//
// let stringDigitada = prompt("Hoje é sexta-feira? SIM/Nao");
// if (stringDigitada === "SIM"){
//     isFriday = true;
// } else {
//     isFriday = false;
// }
//
// isTwoGreaterThanFour = 2 > 4;
//
// stringDigitada = prompt("digite algo");
// if (stringDigitada === "") {
//     isValueEmpty = true;
// } else {
//     isValueEmpty = false;
// }
// alert(`isFriday = ${isFriday}, isTwoGreaterThanFour = ${isTwoGreaterThanFour}, isValueEmpty = ${isValueEmpty}`);

//--------Exercicio 04----------------
// let num1 = prompt("digite o numero");
// if (isNaN(num1)){
//     alert("valor invalido");
//     throw "valor invalido";
// }
// let num2 = prompt("digite o numero");
// if (isNaN(num2)){
//     alert("valor invalido");
//     throw "valor invalido";
// }
// let operacao = prompt("digite a operação desejada");
// switch (operacao){
//     case "+":
//         alert(num1 + num2);
//         break;
//     case "-":
//         alert(num1 - num2);
//         break;
//     case "*":
//         alert(num1 * num2);
//         break;
//     case "/":
//         if (num2 === "0"){
//             alert("impossivel dividir por zero");
//             throw "impossivel dividir por zero";
//         }
//         alert(num1 / num2);
//         break;
//     default:
//         alert("operação invalida")
//         throw "operação invalida";
//         break;
// }

