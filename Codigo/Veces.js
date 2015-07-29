function veces (letra, frase) {
  var i = 0, n = 0;                         // inicialización del bucle
  do {
     if ( letra === frase[i++]) { ++n;};    // acción del bucle e incremento del índice
  } while ( i < frase.length )              // condición de permanencia del bucle
  return n;
};

var l='a', f='la casa roja';
console.log('La frase "' + f + '" tiene '
             + veces(l,f) + ' veces la letra ' + l);
