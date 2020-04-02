// ECMAScript 3 enfoques compatibles
 
// 1. Sintaxis de punto

var newObject1 = {};
 
// Establecer propiedades
newObject1.someKey = "Hello World1";
 
// Obtener propiedades
var value1 = newObject1.someKey;

console.log('value1: ', value1);

// 2. Sintaxis de corchetes
 
var newObject2 = {};
// Establecer propiedades
newObject2["someKey"] = "Hello World2";

// Obtener propiedades
value2 = newObject2["someKey"];

console.log('value2: ', value2);

// ECMAScript 5 solo enfoques compatibles
// Para más información, ver: http://kangax.github.com/es5-compat-table/
 
// 3. Object.defineProperty
 
// Establecer properties
var newObject3 = {};

Object.defineProperty( newObject3, "someKey", {
    value: "para un mayor control del comportamiento de la propiedad",
    writable: true,
    enumerable: true,
    configurable: true
});

var value3 = newObject3["someKey"];

console.log('value3: ', value3);
 
// Si lo anterior se siente un poco difícil de leer, se puede abreviar de la
// siguiente manera:

var defineProp = function ( obj, key, value ){
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty( obj, key, config );
};

 
// Para usar, entonces creamos un nuevo objeto "person" vacío
var person = Object.create( Object.prototype );
 
// Rellenar el objeto con propiedades
defineProp( person, "car", "Delorean" );
defineProp( person, "dateOfBirth", "1981" );
defineProp( person, "hasBeard", false );

console.log('person: ', person);


// Outputs: Object {car: "Delorean", dateOfBirth: "1981", hasBeard: false}
 
 
// 4. Object.defineProperties

var newObject4 = {};
 
// Set properties
Object.defineProperties( newObject4, {
 
  "someKey": {
    value: "Hello World",
    writable: true
  },


  "anotherKey": {
    value: "Foo bar",
    writable: false
  }
 
});

var value4 = [];
value4[0] = newObject4["someKey"];
value4[1] = newObject4["anotherKey"];

console.log('value4[0]: ', value4[0]);
console.log('value4[1]: ', value4[1]);
 
// Obtener propiedades para 3. y 4. se puede hacer usando cualquiera de los
// opciones en 1. y 2.

// Uso:
 
// Crea un piloto de carreras que herede del objeto person
var driver = Object.create( person );
 
// Establecer algunas propiedades para el conductor (driver)
defineProp(driver, "topSpeed", "100mph");
 
// Obtener una propiedad heredada (1981)
console.log( 'driver.dateOfBirth: ', driver.dateOfBirth );
 
// Obtener la propiedad que establecimos (100mph)
console.log( 'driver.topSpeed: ', driver.topSpeed );



