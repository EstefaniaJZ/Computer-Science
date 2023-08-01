//El arbol binario de busqqueda BST es una estructura de datos en la que cada noto tiene, como maximo, dos hijos y para cada nodo, todos los valores en el subarbol izquierdo son menores que el valor del nodo y todos lo valores del subarbol derecho son mayores.
/**
 * 
 *                 12
 *          3              16
 *     2       4     13          18
 *                 11   15    17   19  
 */

class Nodo{
	constructor(value){
		this.value = value 
		this.left = null 
		this.right = null
	}
}

class BinarySearchTree{
	constructor(){
		this.root = null
	}

	insert(value){
		const nuevoNodo = new Nodo(value)

		if(!this.root){
			this.root = nuevoNodo
			return this;
		}

		let current = this.root
		while(true){
			if (value === current.value) return undefined
			if (value < current.value){
				if (current.left === null) {
					current.left = nuevoNodo
					return this
				}
				current = current.left
			} else {
				if (current.right === null){
					current.right = nuevoNodo
					return this
				}
				current = current.right
			}
		}
	}
	find(value){
		if (!this.root) return false 
		
		let current = this.root 
		while (current){
			if (value === current.value){
				console.log("Ahí me quedé")
			return true 
			}
			
			if (value < current.value){
				current = current.left 
				console.log("Me fui izquierda")
			} else {
				current = current.right
				console.log ("Me fui Derecha")
			}
		}
		return false 
		}
		
		isEmpty(){
			return this.root === null
		}
}

const bst = new BinarySearchTree()
bst.insert(12)
bst.insert(13)
bst.insert(3)
bst.insert(2)
bst.insert(4)
bst.insert(11)
bst.insert(13)
bst.insert(16)
bst.insert(18)
bst.insert(15)
bst.insert(17)
bst.insert(19)

console.log(bst.find(12))
console.log(bst.find(19))
console.log(bst.find(7))
console.log(bst.isEmpty())
