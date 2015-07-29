function veces (letra, frase) {
  var i = 0, n = 0;                 // inicialización del bucle
  while ( i < frase.length ) {      // condición de permanencia del bucle
    if ( letra !== frase[i++])      // compara e incrementa el índice
       { continue };                // vuelve al comienzo del bucle
    ++n;                            // acción del bucle
  }
  return n;
};

var l='a', f='la casa roja';
console.log('La frase "' + f + '" tiene '
             + veces(l,f) + ' veces la letra ' + l);
