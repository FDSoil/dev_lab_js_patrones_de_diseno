// Módulo global
var myModule = (function () {
 
    var privateVariable = "Hello World",
    module = {
        publicProperty : "Foobar",
        publicMethod : function () {
            privateMethod();        
        }
    };
 
    function privateMethod() {
        console.log( privateVariable );
    }
 
    return module;
 
})();

// Uso:

console.log(myModule.publicProperty);
myModule.publicMethod();

// Salidas:

// Foobar
// Hello World

