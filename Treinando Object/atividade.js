function couve (){
    const form = document.querySelector('#formcouve');
    const resultado = document.querySelector('#resultado1');

    const couveinfo = [];
    
    function recebeEventoForm(evento){
    evento.preventDefault();
    const quantidadecouve = document.querySelector("#quantidadecouve")
    
        couveinfo.push = ({
            quantide: quantidadecouve.value
        });
        console.log(couveinfo);
        resultado.innerHTML += `<p>${quantidadecouve.value}</p>`;

    }
    form.addEventListener('submit', recebeEventoForm);
}
couve()

function tomate (){
    const form2 = document.querySelector('#formtomate');
    const resultado2 = document.querySelector('#resultado2');

    const tomateinfo = [];
    
    function recebeEventoForm(evento){
    evento.preventDefault();
    const quantidadetomate = document.querySelector("quantidadetomate")
    
        tomateinfo.push = ({
            quantide: quantidadetomate.value
        });
        console.log(tomateinfo);
        resultado.innerHTML += `<p>${quantidadetomate.value}</p>`;

    }
    form.addEventListener('submit',  recebeEventoForm);
}
tomate()


function alface(){
    const form3 = document.querySelector('#formalface');
    const resultado3 = document.querySelector('#resultado3');

    const alfaceinfo = [];
    
    function recebeEventoForm(evento){
    evento.preventDefault();
    const quantidadealface = document.querySelector("quantidadealface")
    
        couveinfo.push = ({
            quantide: quantidadealface.value
        });
        console.log(alfaceinfo);
        resultado.innerHTML += `<p>${quantidadealface.value}</p>`;

    }
    form.addEventListener('submit',  recebeEventoForm);
}
alface()


