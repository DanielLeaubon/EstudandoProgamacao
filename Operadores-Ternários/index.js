// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 1100;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal'

const corUsuario = 'White'
const corPadrao = corUsuario || 'Preto'

console.log(nivelUsuario, corPadrao);

// if(pontuacaoUsuario >= 1000){
//     console.log("Usuário VIP");
// }else{
//     console.log('Usuário normal');
//  }
