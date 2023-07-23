const loja = function(produto, quantidade, preco){
    this.nomeproduto = produto,
    this.quantidade = quantidade,
    this.preco = preco

}
const couve = new loja('Couve', 10, 1.50)
console.log(`Nome: ${couve.nomeproduto}`)
console.log(`Quantidade: ${couve.quantidade}`)
console.log(`Preço: R$${couve.preco}`)
console.log(`Preço final: R$${couve.quantidade * couve.preco},00`)

