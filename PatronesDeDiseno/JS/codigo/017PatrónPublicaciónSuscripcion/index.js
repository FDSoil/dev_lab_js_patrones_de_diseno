var pubsub = {};
 
(function(myObject) {
 
    // Almacenamiento de temas que pueden 
    //transmitirse o escucharse
    var topics = {};
 
    // Un identificador de tópico
    var subUid = -1;
 
    // Publique o transmita eventos de interés 
    // con un nombre de tópico específico y argumentos
    // tales como los datos a pasar a lo largo

    myObject.publish = function( topic, args ) {
 
        if ( !topics[topic] ) {
            return false;
        }
 
        var subscribers = topics[topic],
            len = subscribers ? subscribers.length : 0;
 
        while (len--) {
            subscribers[len].func( topic, args );
        }
 
        return this;
    };
 
    // Suscríbase a eventos de interés
    // con un nombre de tópico específico y una 
    // función de devolución de llamada, que se ejecutará 
    // cuando se observe el tópico/evento
    myObject.subscribe = function( topic, func ) {
 
        if (!topics[topic]) {
            topics[topic] = [];
        }
 
        var token = ( ++subUid ).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    };
 
    // Des-subscribe de un tema 
    // específico, basado en una referencia
    // simbólica a la suscripción 
    myObject.unsubscribe = function( token ) {
        for ( var m in topics ) {

            if ( topics[m] ) {
                for ( var i = 0, j = topics[m].length; i < j; i++ ) {
                    if ( topics[m][i].token === token ) {
                        topics[m].splice( i, 1 );
                        return token;
                    }
                }
            }
        }
        return this;
    };
}( pubsub ));








































