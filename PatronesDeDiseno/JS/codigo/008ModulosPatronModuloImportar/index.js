var myObjA = { id:'id_a' },
    myObjB = { 
        id : 'id_b',
        func: function () { 
            console.log( 'Id de B:', this.id ) 
        } 
    };

// Módulo global
var myModule = (function ( obj1, obj2 ) {
 
    function privateMethod1(){
      console.log( 'Id de A:', obj1.id );
    }
 
    function privateMethod2(){
      obj2.func();
    }
 
    return{
        publicMethod1: function(){
            privateMethod1();
        },
        publicMethod2: function(){
            privateMethod2();
        }
    }; 

})( myObjA, myObjB ); // Importar myObjA y myObjB

// Uso:

myModule.publicMethod1(); // Salida: Id de A: id_a
myModule.publicMethod2(); // Salida: Id de B: id_b

