//VARIAVEIS
//Uma caixa na memória, onde se garda umvalor

//var => má prática, não utilizar

//lest => 

//const

//let numero = 0;
//console.log(numero)

//const nome = "Alison"
//console.log(nome)

//const boleano = false;
//console.log(boleano)

/*
OPERADORES BÁSICOS
Soma: +
Subtração: -
Multiplicação: *
Divisão: /
*/

// let numero1 = 5;
// let numero2 = 10;

// let soma = 2 + 2;
// let soma2 = numero1 + numero2;

// console.log(soma)
// console.log(soma2)


/*
Operadores lógicos
== / ===
!= / !==
> /=>
< / <=
*/

// console.log(numero1 > numero2)
// console.log(numero1 < numero2)
// console.log(numero1 <= numero2)
// console.log(numero1 > numero2)
// console.log(!(numero1 != numero2))

/*
FUNÇÕES
*/

// //Declaração
// function calcularSoma() {
//     let total = 20 + 20;
//     console.log(total)
// }

// //Execução do comando
// calcularSoma()

//Para executar outros valores usa-se:
// function calcular(dado1, dado2) {
//     let resultado = dado1 + dado2;
//     console.log(resultado)
// } 

// calcular(10, 5);
// calcular(10, 10);
// calcular(1, 1);

/**
 * DOM
 * Document Objet Model
 * 
 */
// const cabecalho = document.querySelector ('.cabecalho')

// console.log(cabecalho)

/**
 * Eventos
 * São ações que ocorrem na tela do usuário
 * 
 * propriedade: addEventListener
 * 
 *elemento.addEventListener('evento', 'função')
 */

//  const tweetar = document.querySelector('button');

//  function imprimirAcao() {
//      console.log('clicou no botão')
//  }

//  tweetar.addEventListener('click', imprimirAcao)



// PARTINDO PARA O PROJETO
/**
 * Primeiros passosMensagens Mensagens

 * 
 * 1° - capturar o conteúdo do textarea para crirar o Tweet
 * 2° - construir o Tweet
 * 3° - imprimir o Tweet
 */

const textarea = document.querySelector('textarea')
const tweetar = document.querySelector('button');
const feed = document.querySelector(".feed__box")

function pegarTweet(event) {
    event.preventDefault();
    
    const tweetTextArea = textarea.value;
    criarTweet(tweetTextArea)
}

tweetar.addEventListener('click', pegarTweet)

//CRIRAR O TWEET
/**
 * PRECISA DE:
 * Texto
 * Nome
 * Foto
 * Nome de usuário
 * Horário
 */

function criarTweet(tweetTexto) {
    //Texto
    //console.log(tweetTexto)

    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();

    //Objeto
    const tweet = {
        nome: "Anônimo",
        foto: "assets/img/user3.png",
        texto: tweetTexto,
        tempo: `${hora}:${minutos}`
    }
    criarTemplateTweet(tweet)
}

//Publicar Tweet
function criarTemplateTweet (tweet) {
    //DESESTRUTURAR  OS ELEMENTOS
    const {nome,foto,usuario,texto,tempo} = tweet

    //CRIANDO ELEMENTOS PARA CRIAR O TEMPLATE
    let li = document.createElement("li");
    li.classList.add("feed__item")
    let img = document.createElement("img");
    img.src = foto

    let div = document.createElement("div");
    div.classList.add("box__post")
    let h2 = document.createElement("h2");
    h2.innerText = nome

    let span = document.createElement("span");
    span.innerText = `${usuario} - ${tempo}`
    span.classList.add("user__name")

    let p = document.createElement("p");
    p.innerText = texto

    //ADCIONANDO OS ELEMENTOS DENTRO DA LI
    li.appendChild(img)
    li.appendChild(div)

    //ADCIONANDO OS ELEMENTOS DENTRO DA div
    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)

    feed.appendChild(li)
    textarea.value = ""
}
