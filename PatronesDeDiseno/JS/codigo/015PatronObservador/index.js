// Referencias a nuestros elementos DOM 
var controlCheckbox = document.getElementById( "mainCheckbox" ),
    container = document.getElementById( "observersContainer" ),
    addBtn = document.getElementById( "addNewObserver" );

// Extiende un objeto con una extensión
var extend = function ( obj, extension ){
    for ( let key in extension ){
        obj[key] = extension[key];
        console.log(obj, obj[key]);
    }
}

// El Observador
var Observer = function (){
    this.update = function(){
        // ...
    };
}

// Observador Concreto
var addNewObserver = function (){
 
    // Crea un nuevo checkbox para ser agregado
    let check = document.createElement( "input" );
    check.type = "checkbox";
 
    // Extiende el checkbox con la clase Observador
    extend( check, new Observer() ); 

    // Anular con comportamiento de actualización personalizado
    check.update = function( value ){
        this.checked = value;
    };
 
    // Agrega el nuevo observador a nuestra lista de observadores
    // para nuestro sujeto principal
    controlCheckbox.addObserver( check );
 
    // Append the item to the container
    container.appendChild( check );
}

addBtn.onclick = addNewObserver;

// Sujeto Concreto 
// Extienda el checkbox de control con la clase Subject
extend( controlCheckbox, new Subject() );

// Al hacer clic en la casilla de verificación, se activarán notificaciones para sus observadores
controlCheckbox.onclick = function(){
    controlCheckbox.notify( controlCheckbox.checked );
};


