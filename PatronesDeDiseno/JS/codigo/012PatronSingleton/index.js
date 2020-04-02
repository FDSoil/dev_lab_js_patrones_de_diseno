var MySingleton = (function () {
 
    // La instancia almacena una referencia al Singleton
    var instance;
 
    function init() {
 
        // Singleton
 
        // Métodos y variables privad@s  
        function privateMethod(){
            console.log( "I am private" );
        }
 
        var privateVariable = "Im also private";
 
        var privateRandomNumber = Math.random();
 
        return {
 
            // Métodos y variables públic@s
            publicMethod: function () {
                console.log( "The public can see me!" );
            },
 
            publicProperty: "I am also public",
 
            getRandomNumber: function() {
                return privateRandomNumber;
            }
 
        };
 
    };
 
    return {
 
        // Obtener la instancia única (Singleton) si existe
        // o crea una si no es así
        getInstance: function () {
 
            if ( !instance ) {
                instance = init(); 
                console.log(instance); // Comprobar que se crea la instancia sólo una vez
            }
 
            return instance;
        }
 
    };
 
})();

// Uso:

var obj1 = MySingleton.getInstance();
var obj2 = MySingleton.getInstance();
obj1.publicMethod();
console.log(obj2.publicProperty);
console.log(obj1.getRandomNumber());
console.log(obj2.privateVariable);
console.log(obj1.privateRandomNumber());

// Salidas:

// Object { publicMethod: init/<.publicMethod(), publicProperty: "I am also public", getRandomNumber: init/<.getRandomNumber() }
// The public can see me!
// I am also public  
// 0.729069521305126 (ej: de valor aliatorio)
// undefined
// TypeError: obj1.privateRandomNumber is not a function[Conocer más]


