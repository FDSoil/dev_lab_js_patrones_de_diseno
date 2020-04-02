var MySingleton = (function () {

    this._instance;
    let _isFoo = false;

    let basicSingleton = function ( model, year, miles ) {

        this.model = model;
        this.year = year;
        this.miles = miles;

    }

    let fooSingleton = function ( model, year, miles ) {

        basicSingleton.prototype.toString = function () {
            return this.model + " has done " + this.miles + " miles";
        };

        basicSingleton.prototype.setNew = function (model, year, miles) {

            this.model = model;
            this.year = year;
            this.miles = miles;

        };

        _isFoo = true;

        return new basicSingleton( model, year, miles );

    }

    return {
     
        getInstance: function(model, year, miles) {
            if ( this._instance == undefined )
                this._instance = new basicSingleton( model, year, miles );
            else if ( !_isFoo )
                this._instance = fooSingleton( model, year, miles );       
            return this._instance;
        },       

    };

})();

// Uso y salida:

var obj1 = MySingleton.getInstance("Honda Civic", 2009, 20000);
console.log(obj1);            // Object { model: "Honda Civic", year: 2009, miles: 20000 }
console.log(obj1.toString()); // [object Object]  index.js:48:1

var obj2 = MySingleton.getInstance("Ford Mondeo", 2010, 5000);
console.log(obj2);            // Object { model: "Ford Mondeo", year: 2010, miles: 5000 }
console.log(obj2.toString()); // Ford Mondeo has done 5000 miles  index.js:52:1

var obj3 = MySingleton.getInstance("Jeep CJ5", 1975, 15000);
console.log(obj3);            // Object { model: "Ford Mondeo", year: 2010, miles: 5000 }
console.log(obj3.toString()); // Ford Mondeo has done 5000 miles  index.js:56:1

obj3.setNew("Jeep CJ5", 1975, 15000);
console.log(obj3);            // Object { model: "Jeep CJ5", year: 1975, miles: 15000 }
console.log(obj3.toString()); // Jeep CJ5 has done 15000 miles  index.js:60:1

var obj4 = MySingleton.getInstance("Toyota Celica", 2019, 19000);
console.log(obj4);            // Object { model: "Jeep CJ5", year: 1975, miles: 15000 }
console.log(obj4.toString()); // Jeep CJ5 has done 15000 miles





















