// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function parOrImpar(numero) {
  // let numero = prompt("Ingrese un número");
  if (numero % 2 === 0) {
    console.log(numero + " es un número par");
  } else {
    console.log(numero + " es un número impar");
  }
}

parOrImpar(20);
parOrImpar(23);

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function compararNumeros(numero1, numero2) {
  // let numero1 = parseInt(prompt("Ingrese un número"));
  // let numero2 = parseInt(prompt("Ingrese un número"));

  if (numero1 > numero2) {
    console.log("El número " + numero1 + " es mayor que " + numero2);
  } else if (numero1 < numero2) {
    console.log("El número " + numero2 + " es mayor que " + numero1);
  } else {
    console.log("Ambos números son iguales");
  }
}

compararNumeros(231, 325);
compararNumeros(231, 231);

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiploDeCinco(numero) {
  if (numero % 5 === 0) {
    console.log(`${numero} es múltiple de 5`);
  } else {
    console.log(`${numero} no es múltiple de 5`);
  }
}

multiploDeCinco(10);
multiploDeCinco(21);
multiploDeCinco(15);

// 4- Crear una función que reciba un número por parámetro
// e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function listaNumeros(numero) {
  for (let i = 0; i < numero; i++) {
    console.log(i);
  }
}

listaNumeros(6);

// 5 - Crear una función que reciba una palabra y un número por parámetro
// e imprima por consola esa palabra la cantidad correspondiente al número indicado.

function palabraNumero(word, number) {
  for (let i = 0; i < number; i++) {
    console.log(word);
  }
}

palabraNumero("Martin", 4);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

let diasSemana = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];
// console.log(diasSemana.length);

function arrayImprimir(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

arrayImprimir(diasSemana);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array,
// menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function arrayDecenas(array2) {
  for (let i = 0; i < array2.length; i++)
    if (i !== 4) {
      console.log(array2[i]);
    }
}
let decenas = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
arrayDecenas(decenas);

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola
// cada número del array multiplicado por el número pasado por parámetro.

let años = [78, 86, 2022];
let number = 2;

function multiplicador(array3, numero) {
  for (let i = 0; i < array3.length; i++) {
    let resultado = array3[i] * numero;
    console.log(resultado);
  }
}

multiplicador(años, number);
