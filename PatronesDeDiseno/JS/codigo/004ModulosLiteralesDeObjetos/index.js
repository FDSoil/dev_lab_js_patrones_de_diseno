var myModule = {
 
  myProperty: "someValue",
 
 // Los literales de objeto pueden contener propiedades y métodos.
 // ej. podemos definir otro objeto para la configuración del módulo:
  myConfig: {
    useCaching: true,
    language: "en"
  },
 
  // un método muy básico
  saySomething: function () {
    console.log( "Where in the world is Paul Irish today?" );
  },
 
  // generar un valor basado en la configuración actual
  reportMyConfig: function () {
    console.log( "Caching is: " + ( this.myConfig.useCaching ? "enabled" : "disabled") );
  },
 
  // anular la configuración actual
  updateMyConfig: function( newConfig ) {
 
    if ( typeof newConfig === "object" ) {
      this.myConfig = newConfig;
      console.log( this.myConfig.language );
    }
  }
};

// Salidas: someValue
console.log(myModule.myProperty);
 
// Salidas: Where in the world is Paul Irish today?
myModule.saySomething();
 
// Salidas: Caching is: enabled
myModule.reportMyConfig();
 
// Salidas: fr
myModule.updateMyConfig({
  language: "fr",
  useCaching: false
});
 
// Salidas: Caching is: disabled
myModule.reportMyConfig();

