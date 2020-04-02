var myRevealingModule = (function () {
 
    var privateVar = "Ben Cherry",
        publicVar = "Hey there!";

    function privateFunction() {
        console.log( "Name:" + privateVar );
    }
 
    function publicSetName( strName ) {
        privateVar = strName;
    }

    function publicGetName() {
        privateFunction();
    }
 
    // Revelar punteros públicos para
    // funciones privadas y propiedad
 
    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };
 
})();

// Uso:

console.log(myRevealingModule.greeting); // Salida: 
myRevealingModule.getName(); // Salida: Ben Cherry
myRevealingModule.setName( "Paul Kinlan" );
myRevealingModule.getName(); // Salida: Paul Kinlan


