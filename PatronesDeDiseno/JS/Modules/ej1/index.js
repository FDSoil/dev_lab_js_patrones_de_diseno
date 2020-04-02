var iva = 0.18;

function calcularIva(monto) {
    return monto * iva;
}

function calcularMontoSinIva(monto){
    return monto / (1 + iva);
}

function calcularUtilidad(costo, ingreso){
    return ingreso - costo;
}

function calcularTasaEfectivaAnual(capital, interes, periodos) {
    return capital * Math.pow(1 + interes, periodos);
}

console.log('calcularMontoSinIva:', calcularMontoSinIva(400)); // 338.98305084745766
console.log('calcularIva:', calcularIva(400)); // 78
console.log('calcularTasaEfectivaAnual:', calcularTasaEfectivaAnual(10000, 0.05, 2)); // 11025
