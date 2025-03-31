// Se te proponen una serie de ejercicios para practicar
// los arrays y el bucle for.

// Para resolver NO hay que utilizar ninguna función matemática
// Crea el código necesario para resolver los requerimientos

// Dado este array:
let arrayNumeros1 = [4, 5, 3, 8, 2, 7, 1, 6,]
let arrayNumeros2 = [4, 2, 7, 1, 6]
// o cualquier otro array solo con números

// 1) Mostrar por consola la suma de todos los valores
let suma1 = 0
let suma2 = 0 

for (let i = 0; i < arrayNumeros1.length; i++) {
    suma1 += arrayNumeros1[i]
}
for (let i = 0; i < arrayNumeros2.length; i++) {
    suma2 += arrayNumeros2[i];
  }
console.log(`La suma de (${arrayNumeros1}) es de ${suma1}`);
console.log(`La suma de (${arrayNumeros2}) es de ${suma2}`);

// 2) Mostrar por consola el promedio

let recuento1 = arrayNumeros1.length
console.log(recuento1)
let recuento2 = arrayNumeros2.length
console.log(recuento2)
let promedioArray1 = suma1 / recuento1
console.log(promedioArray1)
let promedioArray2 = suma2 / recuento2
console.log(promedioArray2)

console.log(`El promedio del primer array es de ${promedioArray1}`)
console.log(`El promedio del segundo array es de ${promedioArray2}`
)
// 3) Encontrar los valores máximo y mínimo
arrayNumeros1.sort()
console.log(arrayNumeros1)
let primerNumA1 = arrayNumeros1.sort()[0]
console.log(primerNumA1)
let ultimoNumA1 = arrayNumeros1.sort()[7]
console.log(ultimoNumA1)


arrayNumeros2.sort()
console.log(arrayNumeros2)
let primerNumA2 = arrayNumeros2.sort()[0]
console.log(primerNumA2)
let ultimoNumA2 = arrayNumeros2.sort()[4]
console.log(ultimoNumA2)


// 4) Sumar los valores con índice par y restar los impares
let sumaPar1 = 0;
let restaImpar1 = 0;

let sumaPar2 = 0;
let restaImpar2 = 0;

// Operaciones para arrayNumeros1
for (let i = 0; i < arrayNumeros1.length; i++) {
    if (i % 2 === 0) { // Índice par
        sumaPar1 += arrayNumeros1[i];
    } else { // Índice impar
        restaImpar1 -= arrayNumeros1[i];
    }
}

// Operaciones para arrayNumeros2
for (let i = 0; i < arrayNumeros2.length; i++) {
    if (i % 2 === 0) { // Índice par
        sumaPar2 += arrayNumeros2[i];
    } else { // Índice impar
        restaImpar2 -= arrayNumeros2[i];
    }
}
console.log(sumaPar1)
console.log(restaImpar1)

console.log(sumaPar2)
console.log(restaImpar2)
// Hay que mostrar por consola cada resultado

// ====================================================================================================

// Para este array:
let arrayNombres2 = ["Clint", "Robert", "James", "Anne", "Ingrid", "John", "Patricia", "Marie"]

// 5) Programa el código para encontrar el elemento con el texto más largo
// y guardarlo en la variable varTextoMasLargo
// Si hay más de un valor, guardarlos en el array arrayTextosMasLargos.
console.log(arrayNombres2.length)
console.log(arrayNombres2[0].length)
console.log(arrayNombres2[1].length)
console.log(arrayNombres2[2].length)
console.log(arrayNombres2[3].length)
console.log(arrayNombres2[4].length)
console.log(arrayNombres2[5].length)
console.log(arrayNombres2[6].length)
console.log(arrayNombres2[7].length)

let varTextoMasLargo = ""
let arrayTextosMasLargos = []
for (let i = 0; i < arrayNombres2.length; i++) {

    if (arrayNombres2[i].length > varTextoMasLargo.length) {
        varTextoMasLargo = arrayNombres2[i]
        arrayTextosMasLargos = [arrayNombres2[i]]
    } 
    else if (arrayNombres2[i].length === varTextoMasLargo.length) {
        arrayTextosMasLargos.push(arrayNombres2[i]); 
    }
}
console.log(varTextoMasLargo)
console.log(arrayTextosMasLargos)

// 6) Lo mismo para el texto más corto.
let varTextoMasCorto = arrayNombres2[0]
let arrayTextosMasCortos = []
for (let i = 0; i < arrayNombres2.length; i++) {
if (arrayNombres2[i].length < varTextoMasCorto.length) {
        varTextoMasCorto = arrayNombres2[i]
        arrayTextosMasCortos = [arrayNombres2[i]]
    } 
 
    else if (arrayNombres2[i].length === varTextoMasCorto.length) {
        arrayTextosMasCortos.push(arrayNombres2[i])


}
}

    
    
console.log(varTextoMasCorto)
console.log(arrayTextosMasCortos)

// 7) Obtén un array llamado longitudNombres que tenga como elementos las longitudes de los textos
// incluidos en cualquiera de los arrays anteriores. Por tanto debes mostrar : [ 5, 6, 5, etc.

let longitudNombres = []
for (let i = 0; i < arrayNombres2.length; i++) {
    longitudNombres.push(arrayNombres2[i].length)

}
console.log(longitudNombres)
// 8) Crea un array llamado arrayNombresConI que incluya solo los nombres que contengan la letra i
let arrayNombresConI = []
for (let i = 0; i < arrayNombres2.length; i++) {
    let nombre = arrayNombres2[i];
    for (let i = 0; i < nombre.length; i++) {
        if (nombre[i] === 'i' || nombre[i] === 'I') {
            arrayNombresConI.push(nombre);
            break
        }
    }
}


console.log(arrayNombresConI)
// ====================================================================================================

// Dado este array:
let arrayMixto = [ "Marie", 24, "Pol", 18, "Judith", 22, "Eva", 28 ]

// 9) Debes obtener otro array llamado arrayBidimensional que sea así:
// [ ["Marie", 24 ], ["Pol", 18], ["Judith", 22 ], [ "Eva", 28] ]
let arrayBidimensional = []

for (let i = 0; i < arrayMixto.length; i += 2) {
    arrayBidimensional.push([arrayMixto[i], arrayMixto[i + 1]]);
}

console.log(arrayBidimensional);

// ====================================================================================================

// 10) Este array incluye una operación de compra:
const compra = [
    ["Leche", 1.2, 2],
    ["Pan", 0.8, 3],
    ["Huevos", 2.5, 1],
    ["Café", 5.2, 0.5]
]
// Se muestra el nombre del artículo, su precio y la cantidad comprada.
// Debes obtener la cantidad de artículos comprados (no de cada tipo) y el importe total.
// Por ejemplo: "Has comprado 4 artículos y el importe total es de 12.7 euros"

// Después añade otro articulo al array anterior y muestra de nuevo el mensaje informativo con los nuevos datos.



let cantidadTotal = 0;
let importeTotal = 0;

for (let i = 0; i < compra.length; i++) {
    cantidadTotal += compra[i][2];
    importeTotal += compra[i][1] * compra[i][2]
}

console.log(`Has comprado ${cantidadTotal} artículos y el importe total es de ${importeTotal.toFixed(2)} €.`)


compra.push(["Patatas", 3.0, 1])


cantidadTotal = 0
importeTotal = 0

for (let i = 0; i < compra.length; i++) {
    cantidadTotal += compra[i][2];
    importeTotal += compra[i][1] * compra[i][2]
}

console.log(`Ahora has comprado ${cantidadTotal}`)