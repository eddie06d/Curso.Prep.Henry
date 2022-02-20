// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz = [];
  for(const key of Object.keys(objeto)) matriz.push([key, objeto[key]]);
  return matriz;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h: 1, j: 4, s: 5 } 
  //Escribe tu código aquí
  return string.split('').reduce((el, acc) => {
    if (el[acc]) el[acc]++;
    else el[acc] = 1;
    return el;
  }, {});
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let arr = s.split('');
  let lower = arr.filter(el => el.toLowerCase() === el).join('');
  let upper = arr.filter(el => el.toUpperCase() === el).join('');
  return upper + lower;
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let arr = str.split(' ');
  arr = arr.map(el => el.split('').reverse().join(''));
  return arr.join(' ');
} 

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  if(numero.toString() === numero.toString().split('').reverse().join('')) return "Es capicua";
  return "No es capicua";
}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let newArr = [];
  for(const el of cadena.split('')) {
    if(el !== 'a' && el !== 'b' && el !== 'c') newArr.push(el);
  }
  return newArr.join('');
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let objArr = [];
  for(const el of arr) objArr.push({length: el.length, value: el});
  objArr.sort((a, b) => {
    if(a.length > b.length) return 1;
    if(a.length < b.length) return -1;
    return 0;
  });
  return objArr.map(el => el.value);
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let newArr = [];
  for(let i=0; i<arreglo1.length; i++) {
    const num = arreglo1[i];
    for(let j=0; j<arreglo2.length; j++) {
      if(num === arreglo2[j]) newArr.push(num);
    }
  }
  if(newArr.length === 0) return [];
  return newArr;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

