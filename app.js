const nome = document.getElementById('name');
var altura = document.getElementById('height');
var peso = document.getElementById('weight');
const calcularBtn = document.getElementById('calcular');
const resultado = document.getElementById('results');

calcularBtn.addEventListener("click", function (e) {
    e.preventDefault()

    calcular();
})

function calcular() {
    
    var imc = peso.value / (altura.value * altura.value);
    var imcFormatado = imc.toFixed(2);
    console.log(imcFormatado);

    if (peso.value == "" || altura.value == "") {
        alert("Preencha todos os campos");
        return;
    }

    if(imcFormatado < 18.5){
        resultado.innerText =  `${nome.value} Seu IMC é de ${imcFormatado} Você está abaixo do peso`
    }else if(imcFormatado <= 25){
        resultado.style.color = "green";
        resultado.innerText = `${nome.value} Seu IMC é de ${imcFormatado} Vocé está no peso ideal`
    }else if(imcFormatado <= 30){
        resultado.style.color = "red";
        resultado.innerText = `${nome.value} Seu IMC é de ${imcFormatado} Vocé está com sobrepeso`

    }else if(imcFormatado <= 40){
        resultado.style.color = "red";
        resultado.innerText = `${nome.value} Seu IMC é de ${imcFormatado} Vocé está com obesidade`
    }
}
