var myNamespace = (function () {
 
  var myPrivateVar, myPrivateMethod;
 
  // Una variable de contador privado
  myPrivateVar = 0;
 
  // Una función privada que registra cualquier argumento
  myPrivateMethod = function( foo ) {
      console.log( foo, myPrivateVar );
  };
 
  return {
 
    // Una variable pública
    myPublicVar: "foo",
 
    // Una función pública que utiliza privados
    myPublicFunction: function( bar ) {
 
      // Incrementar nuestro contador privado
      myPrivateVar++;
 
      // Llama a nuestro método privado usando bar
      myPrivateMethod( bar );
 
    }
  };
 
})();

// Uso
myNamespace.myPublicFunction('myCount goes by:'); //myCount goes by: 1
myNamespace.myPublicFunction('myCount goes by:'); //myCount goes by: 2
myNamespace.myPublicFunction('myCount goes by:'); //myCount goes by: 3

 


