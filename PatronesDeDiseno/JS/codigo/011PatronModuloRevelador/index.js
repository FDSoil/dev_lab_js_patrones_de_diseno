var myRevealingModule = (function () {
 
    var privateCounter = 0;
 
    function privateFunction() {
        privateCounter++;
    }
 
    function publicFunction() {
        publicIncrement();
    }
 
    function publicIncrement() {
        privateFunction();
    }
 
    function publicGetCount(){
        return privateCounter;
    }
 
    // Revelar punteros públicos para
    // funciones y propiedades privadas
 
    return {
        start: publicFunction,
        increment: publicIncrement,
        count: publicGetCount
    };
 
})();

// Uso:

console.log(myRevealingModule.count()); // 0
myRevealingModule.start();
console.log(myRevealingModule.count()); // 1
myRevealingModule.increment();
console.log(myRevealingModule.count()); // 2
