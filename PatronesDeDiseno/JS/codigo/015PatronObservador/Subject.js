function Subject() {
    this.observers = new ObserverList();
}
 
Subject.prototype.addObserver = function( observer ) {
    this.observers.add( observer );
}; 

Subject.prototype.notify = function( context ) {
    var observerCount = this.observers.count();
    for(var i=0; i < observerCount; i++){
        this.observers.get(i).update( context );
    }
};

Subject.prototype.removeObserver = function( observer ) {
    this.observers.remove( this.observers.indexOf( observer, 0 ) );
};


