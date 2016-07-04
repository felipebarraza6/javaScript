//Crear un script que defina la clase llamada Producto(codigo, nombre,cantidad)
//Definir dentro de una clase un metodo que se llame mostrar, que 
//muestra las propiedades del objeto luego crear un objeto de la clase
//Producto por ultimo, invocar el metodo mostrar del objeto creado
//en una funcion que se llame miFuncion la cual se invocara
//con el boton "Mostrar Propiedades"
function Producto(codigo, nombre, cantidad, precio){
	 	    this.codigo = codigo;
		    this.nombre = nombre;
		    this.cantidad = cantidad;
		    this.precio = precio;

	this.mostrar = function(){
		var propiedades="";
		propiedades+="Codigo: "+this.codigo+"<br>";
		propiedades+="Nombre: "+this.nombre+"<br>";
		propiedades+="Cantidad: "+this.cantidad+"<br>";
		propiedades+="Precio: "+this.precio+"<br>";

		document.getElementById("mensaje").innerHTML = propiedades;
	};
}
//
var producto = new Producto("001", "Memoria RAM", 50, 14990);

function miFuncion(){
	producto.mostrar();
}
