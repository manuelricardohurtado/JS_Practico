//------------------------------------------------------
//***Código del cuadrado***
console.group("Cuadrados");

/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado +"cm"); */

function perimetroCuadrado(lado){
    return lado * 4;
} 

/* console.log("El perímetro del cudrado es: " + perimetroCuadrado +"cm"); */


function areaCuadrado(lado) {
    return lado * lado;
}

/* console.log("El Área del cuadrado es: " + areaCuadrado +"cm^2"); */

console.groupEnd();
//----------------------------------------------------------
//Código del triángulo
console.group("Triángulos");

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 +"cm, " 
    + ladoTriangulo2 +"cm, " 
    + baseTriangulo +"cm"
); */

//console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    lado1 = parseInt(lado1);
    lado2 = parseInt(lado2);
    base =parseInt(base);
    return lado1 + lado2 + base;
} 

function alturaTrangulo(lado1, lado2, base) {
    
    if (lado1 != lado2) {
        alert("Dos lados del Triángulo deben ser Iguales, debe ser Isóceles");
    }   
    
        const altura = Math.sqrt((lado1**2)-((base**2)/4));   

    return altura;
}


//console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}



//console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//----------------------------------------------------------------
//***Código del Circulo***

console.group("Círculos");

//Radio
/* const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo +"cm"); */

//Diametro

function diametroCirculo(radio) {
    return radio * 2;
}

diametroCirculo()
//console.log("El diámetro del círculo es: " + diametroCirculo +"cm");

//PI
const PI = Math.PI;
console.log("PI es: " +PI);

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


//console.log("El perímetro del círculo es: " + perimetroCirculo +"cm");

//Area
function areaCirculo(radio) {
    return (radio* radio) * PI;
}


//console.log("El área del círculo es: " + areaCirculo +"cm^2");

console.groupEnd();

//--------------------------------------------------------------
//Aquí interactuamos con el HTML
//Cudrado:
function calcularPerimetroCuadrado() {

    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {

    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Triángulo:

function calcularPerimetroTriangulo() {
    
    const inputLado_1 = document.getElementById("InputLado_1");
    const value_1 = inputLado_1.value;

    const inputLado_2 = document.getElementById("InputLado_2");
    const value_2 = inputLado_2.value;

    const inputBase = document.getElementById("InputBase");
    const value_3 = inputBase.value;

    const perimetro = perimetroTriangulo(value_1, value_2, value_3);
    alert(perimetro);
}

function calcularAreaTriangulo() {

    const inputLado_1 = document.getElementById("InputLado_1");
    const value_1 = inputLado_1.value;

    const inputLado_2 = document.getElementById("InputLado_2");
    const value_2 = inputLado_2.value;
    
    const inputBase = document.getElementById("InputBase");
    const value_3 = inputBase.value;
    

    const area = areaTriangulo(value_3, alturaTrangulo(value_1,value_2,value_3) )
    alert(area);

}

//Circulo:

function calcularPerimetroCirculo() {
    
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);

}

function calcularAreaCirculo() {
    
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const perimetro = areaCirculo(value);
    alert(perimetro);

}