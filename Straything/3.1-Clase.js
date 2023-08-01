class Persona {
	constructor (nombre, apellido, edad, generoMusical, genero){
		this.nombre = Estefanía;
		this.apellido = Reyes;
		this.edad = 19;
		this.generoMusical = Progresivo;
		this.genero = Mujer;
	}
}

//Método

hablar() {
	console.log("Holi, soy " + this.nombre + " vamos al Patrick a bailar")
}

decirDatoCuriosoMusical() {
	var resultado = this.generoMusical
	console.log("Sabías que el genero musical que me gusta tiene "+ resultado.lenght +" letras)
}