// Otro manejador de mensajes simple
 
// Un simple loggeador de mensajes que logea cualquier tópico y datos recibidos a través de nuestro 
// suscriptor

var messageLogger = function ( topics, data ) {
    console.log( "Logging: " + topics + ": " + data );
};
 
// Los suscriptores escuchan los tópicos a los que se han suscrito e 
// invocan una función (callback) de devolución de llamada (ej., messageLogger) 
// una vez que se transmite una nueva notificación sobre ese tópico
var subscription = pubsub.subscribe( "inbox/newMessage", messageLogger );
 
// Publishers are in charge of publishing topics or notifications of
// interest to the application. e.g:

// Los Publicistas se encargan de publicar tópicos o notificaciones de
// interés para la aplicación. ej: 
pubsub.publish( "inbox/newMessage", "hello world!" );
 
// or
pubsub.publish( "inbox/newMessage", ["test", "a", "b", "c"] );
 
// or
pubsub.publish( "inbox/newMessage", {
  sender: "hello@google.com",
  body: "Hey again!"
});
 
// También podemos cancelar la suscripción si ya no deseamos que se notifique
// a nuestros suscriptores
pubsub.unsubscribe( subscription );
 
// Una vez que se haya dado de baja, esto, por ejemplo, no dará como resultado
// que se ejecute nuestro messageLogger ya que el suscriptor
// ya no escucha
pubsub.publish( "inbox/newMessage", "Hello! are you still there?" );

