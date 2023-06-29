// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

// let numero = prompt("Ingrese un número");

// if (numero % 2 === 0) {
//   console.log("Soy un número par");
// } else {
//   console.log("Soy un número impar");
// }

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

let numero1 = prompt("Ingrese un número");
let numero2 = prompt("Ingrese un número");

if (numero1 > numero2) {
  console.log("El número " + numero1 + " es mayor que " + numero2);
} else if (numero1 < numero2) {
  console.log("El número " + numero2 + " es mayor que " + numero1);
} else {
  console.log("Ambos números son iguales");
}
