function Car( model, year, miles ) {
 
  this.model = model;
  this.year = year;
  this.miles = miles;
 
  this.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
}
 
// Uso:
 
// Podemos crear nuevas instancias del auto (car)
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
 
// y luego abra nuestra consola del navegador para ver la
// salida del método toString() que se llama en
// estos objetos
console.log( civic.toString() );
console.log( mondeo.toString() );
