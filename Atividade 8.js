//Função somar

function somar()  {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var resultado = document.getElementById("res")
 
}


function somar()  {

    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var resultado = document.getElementById("res")
    num1 = Number(num1)
    num2 = Number(num2)
    resu = num1 + num2
    resultado.innerHTML = (`O resultado da soma entre ${num1} + ${num2} é igual a ${resu}`)

}
    
//AULA 9 REVISÃO
//variaveis, write a concatenação
window.alert('Seja bem vindo ' + nome + '!')// concatenação (seja bem vindo,nome!)
document.write(`Olá ${nome}. Seu nome tem ${nome.length} letras <br>`)
// // document.write escreve, o placeholder precisa ser em crase
document.write(`Seu nome em maiúsculo é  ${nome.toUpperCase()}<br>`)
document.write(`Seu nome em minúsculo é  ${nome.toLowerCase()}<br>`)

//Organizar números
var n1= 21.98563
window.alert(n1.toFixed(2).replace ('.', ','))
//replace substitui o ponto por vírgula
//n1.toLocaleString('pt-BR', {style: 'currency',currency: BLR}) //
//window.alert(n1.toFixed(2))