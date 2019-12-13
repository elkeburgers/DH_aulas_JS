// Seletores
// 1. Utilizando document.getElementById(""), ocultar o elemento <h1 id=”cabecalho”> ao carregar a página.

let cabecalho = document.getElementById('cabecalho')
cabecalho.style.display = 'none'

// 2. Utilizando querySelector(“”) fazer com que, depois do carregamento da página, a coruja fique preta e branca. Para isso, utilizar:
let grayscale = document.querySelector('img')
grayscale.style.filter = "grayscale(100%)"

// 3. Utilizando querySelectorAll(“”) selecionar todos os inputs do formulário e alterar a cor de fundo de cada um (percorrê-los), usando:
let vermelho = document.querySelectorAll('input')

for (let i = 0; i < vermelho.length; i++) {
  vermelho[i].style.background = "red"
}

elemento.style.background = "red";

// DOM - Seletores e Atributos
// 1. Selecionar o elemento com id “copyright” e mostrar todos os atributos dele na linha de comando, utilizando elemento.attributes.
  // copyright.attributes

// 2. Usando getAttribute, mostrar na linha de comando a url à qual o botão do Twitter redireciona.


// 3. Usando getAttribute, mostrar na linha de comando a url à qual o botão do Facebook redireciona.


// 4. Ficamos sabendo que o ícone do YouTube direciona ao Google. Queremos mudar isso com JavaScript, usando setAttribute, para que o ícone direcione ao canal da Digital House no YouTube.