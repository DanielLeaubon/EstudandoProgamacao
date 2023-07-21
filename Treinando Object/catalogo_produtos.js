class Produto {
    constructor(codigo, nome, preco) {
      this.codigo = codigo;
      this.nome = nome;
      this.preco = preco;
    }
  }
  
 
  const produto1 = new Produto(1, "Camiseta", 29.99);
  const produto2 = new Produto(2, "Calça Jeans", 79.99);
  const produto3 = new Produto(3, "Tênis", 99.99);
  
 
  const catalogo = {
    // Utilize o código do produto como chave e a instância como valor
    [produto1.codigo]: produto1,
    [produto2.codigo]: produto2,
    [produto3.codigo]: produto3
  };
  

  catalogo.listarProdutos = function() {
    // Percorra o objeto catalogo e imprima as informações de cada produto
    for (const codigo in this) {
      if (this.hasOwnProperty(codigo) && typeof this[codigo] !== "function") {
        const produto = this[codigo];
        console.log(
          `Código: ${produto.codigo}, Nome: ${produto.nome}, Preço: ${produto.preco}`
        );
      }
    }
  };
  
 
  catalogo.listarProdutos();