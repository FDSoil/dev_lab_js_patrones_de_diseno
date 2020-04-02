var Module = (function(){
    var modules = {};
    return {
        create: function(name, credit) {
            if(modules[name] === undefined) {
                modules[name] = {};
            }

            modules[name].credit = function(){
                return credit;
            }
        },
        append: function(name, module) {
            if(modules[name] === undefined) {
                throw 'Module not exists';
            }

            for(var k in module) {
                modules[name][k] = module[k];
            }
        },
        get: function(name) {
            if(modules[name] === undefined) {
                throw 'Module not exists';
            }

            return modules[name];
        }
    }
})();

Module.create('venta', {
    name: 'Venta',
    description: 'Módulo que contiene formulas para trabajar con los montos de la venta',
    version: '1.0'
});

Module.create('financiera', {
    name: 'Financiera',
    description: 'Módulo que contiene formulas para trabajar con las tasas de interés',
    version: '1.0'
});

Module.append('venta', {
    iva: 0.18,
    calcularIva: function(monto) {
        return monto * this.iva;
    },
    calcularMontoSinIva: function(monto){
        return monto / (1 + this.iva);
    }
});

Module.append('financiera', {
    calcularTasaEfectivaAnual: function(capital, interes, periodos) {
        return capital * Math.pow(1 + interes, 2);
    }
});

Module.append('venta', {
    calcularUtilidad: function(costo, ingreso) {
        return ingreso - costo;
    }
});

/* Obteniendo el módulo venta */
var venta = Module.get('venta');
console.log(venta.calcularMontoSinIva(1000)); // 847.4576271186442

/* Obtener crédito */
console.log(venta.credit());
console.log(Object.getOwnPropertyNames(venta));

/* Obteniendo el módulo financiera */
var financiera = Module.get('financiera');
console.log(financiera.calcularTasaEfectivaAnual(10000, 0.05, 2)); // 11025




