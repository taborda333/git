function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function sumaHasta(n) {
  if (n === 0) {
    return 0;
  } else {
    return n + sumaHasta(n - 1);
  }
}

console.log("Factorial de 5:", factorial(5));
console.log("Suma hasta 10:", sumaHasta(10));



let numero = 9;
let texto = "javascript es genial";

console.log("Raíz cuadrada:", Math.sqrt(numero));
console.log("Potencia:", Math.pow(2, 5));
console.log("Mayúsculas:", texto.toUpperCase());
console.log("Longitud del texto:", texto.length);



let frutas = ["manzana", "pera", "banano"];
frutas.push("uva");
frutas.pop();

let numeros = [4, 2, 9, 1];
numeros.sort();

console.log("Frutas:", frutas);
console.log("Números ordenados:", numeros);
console.log("Posición del número 2:", numeros.indexOf(2));