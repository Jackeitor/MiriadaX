function veces (letra, frase) {
  var n=0;                                                                  // inicialización del bucle
  frase.split("").forEach( function(x) { if ( letra === x ) { ++n; }; } )   // todo en uno
  return n;
};

var l='a', f='la casa roja';
console.log('La frase "' + f + '" tiene '
             + veces(l,f) + ' veces la letra ' + l);
