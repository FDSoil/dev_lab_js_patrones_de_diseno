var testModule = (function () {
 
  var counter = 0;
 
  return {
 
    incrementCounter: function () {
      console.log( "counter value in this moment: " + counter );
      return counter++;
    },
 
    resetCounter: function () {
      console.log( "counter value prior to reset: " + counter );
      counter = 0;
    }
  };
 
})();
 
// Uso:
 
// Incrementa nuestro contardor
testModule.incrementCounter(); //counter value in this moment: 0
testModule.incrementCounter(); //counter value in this moment: 1
testModule.incrementCounter(); //counter value in this moment: 2
 
// Verifique el valor del contador y reinicie
// Salidas: valor del contador antes de reiniciar: 1
testModule.resetCounter(); //counter value in this moment: 3
