/**la búsqueda por comparación, también conocida como secuencial, es un método sencillo de bñusqueda en el que se compara cda elemento de una lista con el elemento objetivo hasta encontrar una coincindencia o recorrer toda la lista sin exito
 * 
 */

function sequentialSearch(array, item) {
	for (let i = 0; i < array.length; i++) {
	  if (array[i] === item) {
		return i;
	  }
	}
	return -1;
  }

  const baseArray = [3, 6, 12, 15, 18, 21];
  const searchItem = 15;
  
  const resultIndex = sequentialSearch(baseArray, searchItem);
  
  if (resultIndex !== -1) {
	console.log(`The element ${searchItem} is found at index ${resultIndex}`);
  } else {
	console.log(`Element ${searchItem} not found in the array ${resultIndex}`);
  }