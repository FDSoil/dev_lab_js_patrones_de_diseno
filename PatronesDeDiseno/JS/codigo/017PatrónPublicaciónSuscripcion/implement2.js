// Devuelve la hora local actual para usar en nuestra UI más tarde
getCurrentTime = function (){
 
   var date = new Date(),
         m = date.getMonth() + 1,
         d = date.getDate(),
         y = date.getFullYear(),
         t = date.toLocaleTimeString().toLowerCase();
 
        return (m + "/" + d + "/" + y + " " + t);
};
 
// Agrega una nueva fila de datos a nuestro componente de cuadrícula ficticia
function addGridRow( data ) {
 
   // ui.grid.addRow( data );
   console.log( "updated grid component with:" + data );
 
}
 
// Actualiza nuestra grilla ficticia para mostrar la hora en que se actualizó 
// por última vez
function updateCounter( data ) {
 
   // ui.grid.updateLastChanged( getCurrentTime() );
   console.log( "data last updated at: " + getCurrentTime() + " with " + data);
 
}
 
// Actualiza la cuadrícula utilizando los datos pasados a nuestros suscriptores
gridUpdate = function( topic, data ){
 
  if ( data !== undefined ) {
     addGridRow( data );
     updateCounter( data );
   }
 
};
 
// Creea una suscripción al tópico newDataAvailable
var subscriber = pubsub.subscribe( "newDataAvailable", gridUpdate );
 
// Lo siguiente representa actualizaciones de nuestra capa de datos. Esto podría ser 
// impulsado por solicitudes ajax que transmiten que los nuevos datos están disponibles 
// para el resto de la aplicación.
 
// Publicar cambios al tópico "gridUpdated" representando nuevas entradas

pubsub.publish( "newDataAvailable", {
  summary: "Apple made $5 billion",
  identifier: "APPL",
  stockPrice: 570.91
});
 
pubsub.publish( "newDataAvailable", {
  summary: "Microsoft made $20 million",
  identifier: "MSFT",
  stockPrice: 30.85
});

