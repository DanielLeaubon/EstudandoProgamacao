//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60* 60 * 24 * 1000;
//const data = newDate(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix
//const data = new Date(2019, 3, 20, 15, 14, 27, 1000 )// a, m, d, h , M, s, ms
//const data = new Date('2019-04-20 20:20:59')
//console.log('Dia', data.getDate());
//console.log('Mês', data.getMonth() + 1); // Mês começa do 0
//console.log('Ano', data.getFullYear());
//console.log('Hora', data.getHours());
//console.log('Min', data.getMinutes());
//console.log('Seg', data.getSeconds());
//console.log('ms', data.getMilliseconds());
//console.log('Dia da semana', data.getDay()); // 0 - domingo, 6- Sábado
//console.log(data.toString());
//console.log(Date.now())

function zeroÀEsquerda(num){
    return num >= 10 ? num : `0${num}`

}

function formataData(data) {
    const dia = zeroÀEsquerda(data.getDate());
    const mes = zeroÀEsquerda(data.getMonth() + 1);
    const ano = zeroÀEsquerda(data.getFullYear());
    const hora = zeroÀEsquerda(data.getHours());
    const min = zeroÀEsquerda(data.getMinutes());
    const seg = zeroÀEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`

}
const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil);
