//los árboles se caracterizan por almacenar sus nodos en forma jerárquica y no en forma lineal, los nodos pueden almacenar elementos html, números, palabras y todo tipo de dato que se puede almacenar

//El árbol binario, el nodo es la estructura básica que usamos para construir un arbol, todos los elementos son nodos, a su vez, cada nodo es un sub árbol. Los nodos se caracterizan por tener un valor, y referencias. Los árboles binarios, los nodos son potencia 2. 

//Nodo: Elemeto que contiene el árbol
//Nodo Raíz: primer nodo de un árbol 
//Nodo Padre: todo aquello que tiene al menos un hijo
//nodo hijo: los que tienen un padre 
//nodo hermano: comparten a un mismo padre en común en una estructura 
//nodo hoja: no tienen hijos y están en los extremos de la estructura
//nodo rama: no son raíz y tienen al menos 1 hijo 

//Altura: Niveles, Peso: Todos los nodos, orden: número de hijos que puede tener un nodo
//Arbol binario en código:

// Definición del nodo
class Node {
	constructor(value) {
	  this.value = value;
	  this.left = null;
	  this.right = null;
	}
  }
  
  // Definición del árbol binario
  class BinaryTree {
	constructor() {
	  this.root = null;
	}
  
	// Método para agregar un nodo al árbol
	insert(value) {
	  const newNode = new Node(value);
  
	  if (!this.root) {
		this.root = newNode;
	  } else {
		this.insertNode(this.root, newNode);
	  }
	}
  
	insertNode(node, newNode) {
	  if (newNode.value < node.value) {
		if (!node.left) {
		  node.left = newNode;
		} else {
		  this.insertNode(node.left, newNode);
		}
	  } else {
		if (!node.right) {
		  node.right = newNode;
		} else {
		  this.insertNode(node.right, newNode);
		}
	  }
	}
  
	// Método para imprimir los nodos en orden
	printInOrder() {
	  this.printInOrderNode(this.root);
	}
  
	printInOrderNode(node) {
	  if (node) {
		this.printInOrderNode(node.left);
		console.log(node.value);
		this.printInOrderNode(node.right);
	  }
	}
  }
  
  // Ejemplo de uso
  const tree = new BinaryTree();
  tree.insert(4);
  tree.insert(2);
  tree.insert(6);
  tree.insert(1);
  tree.insert(3);
  tree.insert(5);
  tree.insert(7);
  
  tree.printInOrder(); // Salida: 1 2 3 4 5 6 7

  console.log (tree.root.left);

