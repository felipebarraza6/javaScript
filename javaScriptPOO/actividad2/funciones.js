function Estudiante(codigo, nombre, nota1, nota2){
	this.codigo = codigo;
	this.nombre = nombre;
	this.nota1 = nota1;
	this.nota2 = nota2;

	this.promedio = function(){
		var promedio = (nota1+nota2)/2;
		
		document.getElementById("mensaje").innerHTML = "El promedio del estudiante "+this.nombre+" es: "+promedio;
	};
}

var alumno = new Estudiante("0001", "Felipe", 50, 45);

function miFuncion(){
	alumno.promedio();
}