const Produtos = function(nome, preco, quantidade){
    this.nomeDoProduto = nome;
    this.precoDoProduto = preco;
    this.quantidadeDeProdutos = quantidade;
}

const leite = new Produtos('Pera', 5, 10)
const leiteDeKalvan = new Produtos('LeiteKalvan', 1000000, 1)
console.log(leite);
console.log(leiteDeKalvan);
console.log(`${leite.nomeDoProduto},${leite.precoDoProduto}, ${leite.quantidadeDeProdutos} `);