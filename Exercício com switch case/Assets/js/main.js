const data = new Date();
const h1 = document.querySelector('.container h1');


/* function GetdiaSemana(diaSemana){
    let diaSemanaTexto;

switch (diaSemana) {
    case 0:
    diaSemanaTexto = "Domingo";
    return  diaSemanaTexto
    
    case 1:
    diaSemanaTexto = "Segunda-Feira";
    return  diaSemanaTexto;

    case 2:
    diaSemanaTexto = "Terça-Feira";
    return  diaSemanaTexto;

    case 3:
    diaSemanaTexto = "Quarta-Feira";
    return  diaSemanaTexto;

    case 4:
    diaSemanaTexto = "Quinta-feira";
    return  diaSemanaTexto;

    case 5:
    diaSemanaTexto = "Sexta-Feira";
    return  diaSemanaTexto;

    case 6:
    diaSemanaTexto = "Sábado";
    return  diaSemanaTexto;

    default:
    diaSemanaTexto = "Data inválida"
        break;
}
}

function GetdiaMes(mes){
    let mesTexto

switch (mes) {
    case 0:
    mesTexto = "Janeiro";
    return  mesTexto
    
    case 1:
    mesTexto = "Fevereiro";
    return  mesTexto

    case 2:
    mesTexto = "Março";
    return  mesTexto

    case 3:
    mesTexto = "Abril";
    return  mesTexto

    case 4:
    mesTexto = "Maio";
    return  mesTexto

    case 5:
    mesTexto = "Junho";
    return  mesTexto

    case 6:
    mesTexto = "Julho";
    return  mesTexto

    case 7:
    mesTexto = "Agosto";
    return  mesTexto

    case 8:
    mesTexto = "Setembro";
    return  mesTexto

    case 9:
    mesTexto = "Outubro";
    return  mesTexto

    case 10:
    mesTexto = "Novembro";
    return  mesTexto

    case 11:
    mesTexto = "Dezembro";
    return  mesTexto

    default:
    mesTexto = "Data inválida"
    break;
}
} */

function GetdiaSemanaTexto(diaSemana){
    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    return diasDaSemana[diaSemana]

}
function GetMes(mes){
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ]
    return meses[mes]
}
function zeroÀEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
    
}
const mes = data.getMonth()
const diaSemana = data.getDay()
const diaSemanafeito = GetdiaSemanaTexto(diaSemana)
const diaMes = GetMes(mes)
const hora = zeroÀEsquerda(data.getHours());
const min =  zeroÀEsquerda(data.getMinutes());
h1.innerHTML= `${diaSemanafeito}, ${data.getDate()} de ${diaMes} de ${data.getFullYear()}`+
` às ${hora}:${min}`
