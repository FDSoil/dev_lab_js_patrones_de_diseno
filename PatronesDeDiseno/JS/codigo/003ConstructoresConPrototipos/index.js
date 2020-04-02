function Car( model, year, miles ) {
 
  this.model = model;
  this.year = year;
  this.miles = miles;
 
}

// Tenga en cuenta que aquí estamos usando Object.prototype.newMethod en        
// lugar de Object.prototype para evitar redefinir el objeto prototipo          

Car.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
};

Car.prototype.otherFunction = function () {
  return this.model + ' Year ' + this.year;
};
 
// Usage:
 
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
 
console.log( civic.toString() );
console.log( civic.otherFunction() );
console.log( mondeo.toString() );
console.log( mondeo.otherFunction() );

