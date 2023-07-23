const Pessoa = function(nome, sobrenome, idade){
    this.nomepessoa = nome;
    this.sobrenomepessoa = sobrenome;
    this .idadepessoas = idade
}
const daniel = new Pessoa('Daniel','Leaubon',16)
console.log(`${daniel.nomepessoa} ${daniel.sobrenomepessoa}, tem ${daniel.idadepessoas} anos`)

function CriaPessoa1 (nome1, sobrenome1, idade1){
return{
nome: nome1,
sobrenome: sobrenome1,
idade: idade1,
}
}
const pessoa1 = CriaPessoa1("Daniel", "Leaubon", 16)
console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade)

const cabelo = {
    cor:'rosa',
    tamanho: '30cm',

    dizer(){
        console.log(`Cabelo ${this.cor} com ${this.tamanho}`);
    }
}
cabelo.dizer()