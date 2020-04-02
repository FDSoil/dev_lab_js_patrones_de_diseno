var basketModule = (function () {
 
    // privadas
 
    var basket = [];
 
    function doSomethingPrivate(obj) {
        return ( typeof obj == 'object'
            && obj.hasOwnProperty('article')
            && obj.hasOwnProperty('price') )
                ? true : false;
    }
 
    function doSomethingElsePrivate() {
        return 'It is not a valid article';
    }

    function getPreItemCountPrivate() {
        return basket.length + 1;
    }
 
    // Devolver un objeto expuesto al público.
    return {
 
        // Agregar artículos a nuestra cesta
        addItem: function( obj ) { 
            if (doSomethingPrivate(obj)) {
                basket.push(obj);
                return obj.article + ', price: ' + obj.price;
            } else
                return doSomethingElsePrivate();      
        },
 
        // Obtener el contador de artículos en la cesta
        getItemCount: function () {
            return basket.length;
        },
 
        // Alias público para una función privada
        getPreItemCount: getPreItemCountPrivate,
 
        // Obtener el valor total de los artículos en la cesta
        getTotal: function () {
 
            var q = this.getItemCount(),
            p = 0;
 
            while (q--) {
                p += basket[q].price;
            }
 
            return p;
        }
    };
})();

// basketModule devuelve un objeto con una API pública que podemos usar

console.log(basketModule.getPreItemCount(), basketModule.addItem(''));
console.log(basketModule.getPreItemCount(), basketModule.addItem({}));
console.log(basketModule.getPreItemCount(), basketModule.addItem({article:'article1'}));
console.log(basketModule.getPreItemCount(), basketModule.addItem({price:100}));
console.log(basketModule.getPreItemCount(), basketModule.addItem({article:'article1', price:100}));
console.log(basketModule.getPreItemCount(), basketModule.addItem({article:'article2', price:200}));
console.log(basketModule.getPreItemCount(), basketModule.addItem({article:'article3', price:300}));
console.log('Total article:',basketModule.getItemCount(), 'Total amount:', basketModule.getTotal());

// Salidas:

// 1 It is not a valid article
// 1 It is not a valid article
// 1 It is not a valid article
// 1 It is not a valid article
// 1 article1, price: 100
// 2 article2, price: 200
// 3 article3, price: 300
// Total article: 3 Total amount: 600 
 
// Sin embargo, lo siguiente no funcionará:
 
// Salidas: undefined
// Esto se debe a que basket en sí no está expuesta como parte de nuestro
// API pública
console.log( basketModule.basket );
 
// Esto tampoco funcionará, ya que solo existe dentro del alcance de nuestro 
// cierre basketModule, pero no en el objeto público devuelto
console.log( basket );


