let numtexto = prompt('Digite um número: ');
numtexto = parseFloat(Number(numtexto));
const numtitulo = document.getElementById("numerodotitulo");
const texto1 = document.getElementById("texto");
const raiz = document.getElementById("raiz")
const inteirinho = document.getElementById("inteiro")
const isnan = document.getElementById("isnan")
const parabaixo = document.getElementById("parabaixo")
const paracima = document.getElementById("paracima")
const decimal = document.getElementById("decimal")

numtitulo.innerHTML = numtexto;
texto.innerHTML = `<p>Seu numero + 2 é ${numtexto + 2}</p>`;
raiz.innerHTML = `<p>A raiz quadrada do seu número é ${numtexto ** 0.5}</p>`
inteirinho.innerHTML = `<p>O número é inteiro: ${Number.isInteger(numtexto)} </p>`
isnan.innerHTML =  `<p>isNaN: ${Number.isNaN(numtexto)}</p>`
parabaixo.innerHTML = `<p>Arredondando para baixo: ${Math.floor(numtexto)}</p>`
paracima.innerHTML = `<p>Arredondando para cima: ${Math.ceil(numtexto)}</p>`
decimal.innerHTML = `<p>Colocando duas casas decimais: ${numtexto.toFixed(2)}</p>`





