    document.getElementById("calcular").onclick = function botao() {
    const peso = parseFloat(document.getElementById("peso").value)
    const altura = parseFloat(document.getElementById("altura").value)

    var resultado = peso / (altura * altura)

    if(resultado < 18.5){
        document.getElementById("resultado").innerHTML ="Você está abaixo do peso ideal";
    }
    else if(resultado >= 18.5 && resultado <= 24.9){
        document.getElementById("resultado").innerHTML ="Você está com o peso normal";
    }
    else if(resultado >= 25 && resultado <= 29.9){
        document.getElementById("resultado").innerHTML ="Você está acima do peso";
    }
    else if(resultado >= 30 && resultado <= 34.9){
        document.getElementById("resultado").innerHTML ="Você está com obesidade nível 1";
    }
    else if(resultado >= 35 && resultado <= 39.9){
        document.getElementById("resultado").innerHTML ="Você está com obesidade nível 2";
    }
    else if(resultado >= 40){
        document.getElementById("resultado").innerHTML ="Você está com obesidade nível 3";
    }
    console.log(resultado);
}
