//------------------------------------------------------
//***Código del cuadrado***
console.group("Cuadrados");

/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado +"cm"); */

function perimetroCuadrado(lado){
    return lado * 4;
} 
perimetroCuadrado()
/* console.log("El perímetro del cudrado es: " + perimetroCuadrado +"cm"); */


function areaCuadrado(lado) {
    return lado * lado;
}
areaCuadrado()
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
    return lado1 + lado2 + base;
} 

perimetroTriangulo()

//console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

areaTriangulo()


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
perimetroCirculo()

//console.log("El perímetro del círculo es: " + perimetroCirculo +"cm");

//Area
function areaCirculo(radio) {
    return (radio* radio) * PI;
}
areaCirculo()

//console.log("El área del círculo es: " + areaCirculo +"cm^2");

console.groupEnd();