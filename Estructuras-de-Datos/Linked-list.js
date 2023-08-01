//Una lista enlazada es una estrucutra lineal similar a un arreglo, pero los elementos no se almacenan de manera contigua, cada elemento es un objeto independiente que contiene un puntero o enlace al siguiente objeto de la lista

//contienen 2 elementos, los datos almacenados y un enlace al siguiente nodo. El punto de entrada a una lista enlazada se llama cabeza, es una referencia al primer nodo de la lista, el último nodo apunta a null, si una lista está vacía, la cabeza es una referencia nula

// Las listas enlazadas nos permiten alamacenar información en posiciones de memoria que no sean contiguas; para almacenar informacion que contienen elementos llamandos nodos

//cont list = {
//	head: {
//		value: 6
//		next: {
//			value: 10
//			next: {
//				value: 12
//				next: null
//
//				}
//			}
//		}
//	};

//Podemos hacer un nodo en JavaScript

//definición del nodo
class Node {
	constructor(vale){
		this.value = value;
		this.next = null;
	}
}

//definición de lista enlazada
class LinkedList{
	constructor() {
		this.head = null
		this.tail = null
	}
}

//agregar un elemento al final de la lista
append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
}

//método para eliminar un elmento de la lista
delete(value){
	
	if(!this.head) return null

	if(this.head.value === value){
		this.head = this.head.next
		return
	}
	let current = this.head
	let previous = null 
	
	while(current.value !== value){
		previous = current
		current = current.next 
	}

	if(current){
		previous.next = current.next
	}
}

//método para imprimir los elementos de la lista
print() {
	let current = this.head;
	const elements = []

	while (current){
		elements.push(current.value)
		current = current.next;
	}
	console.log(elements.join(' -> '))
}


//ejemplo de usp
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(34);
list.append(38)
list.print(); 
