var SingletonTester = (function () {
 
    // options: un objeto que contiene opciones de configuración para el singleton
    // ej. var options = { name: "test", pointX: 5};
    function Singleton( options ) {
 
        // establecer opciones a las opciones suministradas
        // o un objeto vacío si no se proporciona ninguno
        options = options || {};
 
        // establecer algunas propiedades para nuestro singleton
        this.name = "SingletonTester";
 
        this.pointX = options.pointX || 6;
 
        this.pointY = options.pointY || 10;
 
    }

    // nuestro asimiento de instancia
    let instance;
 
    // una emulación de variables estáticas y métodos
    let _static = {
 
        name: "SingletonTester",
 
        // Método para obtener una instancia. Devuelve
        // una instancia singleton de un objeto singleton
        getInstance: function( options ) {

            if( instance === undefined ) {
                instance = new Singleton( options );
            }
 
            return instance;
 
        }
    };
 
    return _static;
 
})();
 
var singletonTest = SingletonTester.getInstance({ pointX: 5, pointY: 9 });
 
// Registre la salida de pointX y pointY solo para verificar que sea correcta

console.log( singletonTest.pointX, ',', singletonTest.pointY);

// Salidas: 5 , 9

