/**
 * La búsqueda binaria es un algoritmo eficiente para busccar un elemento en una lista ordenada. el algoritmo 
 * 
 * Empieza a hacer una comparación,conocida como divide y vencerás, el arreglo debe estar formao de forma ascendente, no de forma aleatoria; Cumple con la secuencia de datos que debe de coincidir y cumple con la regla de orientación
 */

function busquedaBinaria(arreglo, target){
	let izquierda = 0
	let derecha = arreglo.length - 1

	while(izquierda <= derecha){
		const mitad = Math.floor((izquierda + derecha )/2)

		if (arreglo[mitad]===target){
			console.log("Te encontré")
			return mitad
		} else if (arreglo[mitad]<target) {
			izquierda = mitad + 1
			console.log("Buscar en la mitad derecha")
		} else{
			derecha = mitad - 1
			console.log("Buscar en la mitad izquierda")
		}
	}
	return -1
}

const arregloBusqueda = [0, 4, 7, 10, 14, 23, 45, 47, 53]
const elementoBuscar = 7

const resultIndex = binarySearch (arregloBusqueda, elementoBuscar)

if (resultIndex !== -1){
	console.log (`El elemento ${elementoBuscar} se encuentra en el índice ${resultIndex}`)
} else {
	console.log(`El elemento ${elementoBuscar} no se encontró en el el índice ${resultIndex}`)
}