function veces (letra, frase) {
  var i = 0, n = 0;                           // inicialización del bucle
  while (true) {
    if ( i >= frase.length )     { break };   // condición de saida del bucle con break
    if ( letra === frase[i++])   { ++n; };    // incrementa el índice y n si coincide con letra
  }
  return n;
};

var l='a', f='la casa roja';
console.log('La frase "' + f + '" tiene '
             + veces(l,f) + ' veces la letra ' + l);
