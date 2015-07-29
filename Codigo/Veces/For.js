function veces (letra, frase) {
  for ( var i=0, n=0; i < frase.length; ++i ) {       // inicialización, condición y acción del bucle
    if ( letra === frase[i] )   { ++n; };             // compara e incrementa el índice
  }
  return n;
};

var l='a', f='la casa roja';
console.log('La frase "' + f + '" tiene '
             + veces(l,f) + ' veces la letra ' + l);
