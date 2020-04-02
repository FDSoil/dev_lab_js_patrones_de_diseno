var Formulas = (function(){
    var iva = 0.18;

    return {
        venta: {
            calcularIva: function(monto) {
                return monto * iva;
            },
            calcularMontoSinIva: function(monto){
                return monto / (1 + iva);
            },
            calcularUtilidad: function(costo, ingreso) {
                return ingreso - costo;
            }
        },
        financiera: {
            calcularTasaEfectivaAnual: function(capital, interes, periodos) {
                return capital * Math.pow(1 + interes, periodos);
            }
        }
    };
})();

console.log('Formulas.venta.calcularMontoSinIva:', Formulas.venta.calcularMontoSinIva(400)); // 338.98305084745766
console.log('Formulas.venta.calcularIva:', Formulas.venta.calcularIva(400)); // 78
console.log('Formulas.financiera.calcularTasaEfectivaAnual:', Formulas.financiera.calcularTasaEfectivaAnual(10000, 0.05, 2)); // 11025

