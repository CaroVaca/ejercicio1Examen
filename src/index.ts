// Ejercicio 1 del examen

let camila: number[] = [
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
];
let franco: number[] = [
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
];
let sofia: number[] = [
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
];
let matias: number[] = [
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
];
let agustina: number[] = [
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
];
let semanas: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let meses: string[] = [
  "Enero",
  "Enero",
  "Enero",
  "Enero",
  "Febrero",
  "Febrero",
  "Febrero",
  "Febrero",
  "Marzo",
  "Marzo",
  "Marzo",
  "Marzo"
];
let indice: number;
let maxVenta: number = -1;
let minVenta: number = 200000;
let semana: number;
let mes: string;
let promedio: number;

// esta funcion obtiene la maxima venta hecha del vendedor, indicando su semana y mes

function obtenerMaximasVentas(
  ventas: number[],
  semanas: number[],
  meses: string[]
): Number {
  for (indice = 0; indice < ventas.length; indice++) {
    if (ventas[indice] > maxVenta) {
      maxVenta = ventas[indice];
    }
    semana = semanas[indice];
    mes = meses[indice];
  }
  console.log(
    "La maxima venta es : " +
      maxVenta +
      "en la semana " +
      semana +
      "del mes de : " +
      mes
  );
}

// esta funcion obtiene las minimas ventas indicando semana y mes de la misma
function obtenerMinimasVentas(
  ventas: number[],
  semanas: number[],
  meses: string[]
): number {
  for (indice = 0; indice < ventas.length; indice++) {
    if (ventas[indice] < minVenta) {
      minVenta = ventas[indice];
    }
    semana = semanas[indice];
    mes = meses[indice];
  }
  console.log(
    "La minima venta es : " +
      maxVenta +
      "en la semana " +
      semana +
      "del mes de : " +
      mes
  );
}
// esta funcion obtiene el promedio trimestral de cada vendedor
function obtenerPromedioTrimestral(ventas: number[]): number {
  let sumaTotal: number = 0;
  for (indice = 0; indice < ventas.length; indice++) {
    sumaTotal += ventas[indice];
  }
  promedio = sumaTotal / 12;
  return promedio;
}

console.log("Ventas Maximas");
obtenerMaximasVentas(camila, semanas, meses);
obtenerMaximasVentas(franco, semanas, meses);
obtenerMaximasVentas(sofia, semanas, meses);
obtenerMaximasVentas(matias, semanas, meses);
obtenerMaximasVentas(agustina, semanas, meses);
console.log("Ventas Minimas");
obtenerMinimasVentas(camila, semanas, meses);
obtenerMinimasVentas(franco, semanas, meses);
obtenerMinimasVentas(sofia, semanas, meses);
obtenerMinimasVentas(matias, semanas, meses);
obtenerMinimasVentas(agustina, semanas, meses);
console.log("Promedio Trimestral");
console.log(obtenerPromedioTrimestral(camila));
console.log(obtenerPromedioTrimestral(franco));
console.log(obtenerPromedioTrimestral(sofia));
console.log(obtenerPromedioTrimestral(matias));
console.log(obtenerPromedioTrimestral(agustina));
