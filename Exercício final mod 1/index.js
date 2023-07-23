function pessoa (){
    const form = document.querySelector('#form');
    const resultado = document.querySelector('#resultado');

    const pessoas = [];
    
    function recebeEventoForm(evento){
    evento.preventDefault();
    const nome = form.querySelector('#Nome');
    const sobrenome = form.querySelector('#Sobrenome');
    const peso = form.querySelector('#Peso');
    const altura = form.querySelector('#Altura');
    
        pessoas.push = ({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            alura: altura.value 
        });
        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}`+
        `${peso.value} ${altura.value}</p>`;

    }
    form.addEventListener('submit',  recebeEventoForm);
}
pessoa()