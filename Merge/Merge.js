var fs = require('fs'); // Importa el módulo file system

if(process.argv.length < 4){
	console.log('Uso: "node merge.js <destino> <f1> <f2> ... <fn>"'); // Si es menor de 4
	process.exit(); // Finaliza el proceso
}

for(var i=3 ; i<process.argv.length ; i++){ 
fs.readFile(
	process.argv[i],
	function(err,data){
		fs.appendFile(
			process.argv[2],
			data,
			function (err) {
				if(err) throw err;
				console.log('Merge Completado');
			}
		);
	});
}
