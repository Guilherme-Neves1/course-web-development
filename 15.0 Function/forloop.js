// For é uma maneira simplificada de While.

for(var i = 1; i < 2; i++) {
  console.log(i);
}

// 1. var i = 1; // Declarando a variável;
// 2. i < 2 // Condição do loop;
// 3. Após confirmar a condição realiza o código interno;
// 4. Agora chegando no fechamento das chaves, faz o incremento i++;
// 5. Volta direto na Condição do loop e realiza tudo de novo enquanto for verdade.
// Se for falso, vai para a próxima linha do código.

var output = [];

function fizzBuzz() {

    for(var count = 1; count <= 100; count++) {
    
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    }
    else if (count % 3 === 0) {
        output.push("Fizz"); 
    } 
    else if (count % 5 === 0) {
        output.push("Buzz");
    }
    else {
        output.push(count);
    }
}
    console.log(output);
}

// ############################################
// ########## WHILE VERSION ##########
// var output = [];
// var count = 1;

// function fizzBuzz() {

//     while (count <= 100) {
    
//     if (count % 3 === 0 && count % 5 === 0) {
//         output.push("FizzBuzz");
//     }
//     else if (count % 3 === 0) {
//         output.push("Fizz"); 
//     } 
//     else if (count % 5 === 0) {
//         output.push("Buzz");
//     }
//     else {
//         output.push(count);
//     }
//     count++;
// }
//     console.log(output);
// }

