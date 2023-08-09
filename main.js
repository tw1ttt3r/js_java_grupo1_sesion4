promedio();
// Estructuras de datos

// Arreglos
// Son estructuras que almacenan valores ordenadamente y el 
// acceso a cada valor es atraves de un indice númerico
// Los arreglos comienzan el orden de los valores en la posición 0
// y el último valor almacenado siempre será n-1 donde n es el total
// de valores almacenados

// sintaxis: const nombres = [];
// sintaxis: const nombres = ["Pedro"];

// Operaciones
// Obtener valores
// sintaxis: nombredelarreglo[indicequesedeseaobtener]

// Ejemplo
const ciudades = ["Pachuca", "Toluca", "Reynosa", "Guadalajara"];
ciudades[2] // "Reynosa"

// guardar valores
ciudades[4] = "Puebla";

// No hay restricción en los tipos de datos almacenados

// push
// me permite almacenar nuevos valores en el arreglo
// n-1

// pop
// obtener el ultimo del arreglo, sacarlo del arreglo y devolverlo
// como resultado de la invocacion

// ejemplo
console.log(ciudades.pop()) // "Puebla"
// ["Pachuca", "Toluca", "Reynosa", "Guadalajara"]
console.log(ciudades.pop()) // "Guadalajara"
// ["Pachuca", "Toluca", "Reynosa"]

// shift
// obtener el primer del arreglo, sacarlo del arreglo y devolverlo
// como resultado de la invocacion
console.log(ciudades.shift()) // "Pachuca"
// ["Toluca", "Reynosa"]

// unshift
// agregar el valor en la  primera posicion del arreglo
ciudades.unshift("Matamoros")
// ["Matamoros", "Toluca", "Reynosa"]

// concat
// es un metodo que permite concatenar o unir dos arreglos
// regresando un nuevo arreglo
// sintaxis: arreglo.concat(arreglo a fusionar)
const paises = ["Mexico", "USA", "Canada"]

console.log(ciudades.concat(paises))


// Objetos
// Son estructura de datos que almacenan valores no ordenados
// los valores son guardados en propiedades (key)
// van a mantener un orden de acuerdo a como se han registrado 
// cada una de las propiedades

// sintaxis: const objetonuevo = {}
// sintaxis: const objetonuevo = new Object()

// ejemplo
const persona = {
  nombre: "Pedro",
  edad: 31,
  profesion: "Programador",
  hobbies: ["baloncesto", "música", "dormir"],
  estarVacaciones: () => alert("estoy de vacaciones")
}

// cuando una propiedad almacena una función, se convierte
// en un método

function promedio(calificaciones = []) {
  let promedio = 0;
  for(let i = 0; i < calificaciones.length; i++) {
    promedio += calificaciones[i]
  }
  return promedio / calificaciones.length
}

const persona2 = {
  nombre: "Pedro",
  edad: 31,
  profesion: "Programador",
  hobbies: ["baloncesto", "música", "dormir"],
  trabajar: function() {
    alert("Estoy trabajando")
  },
  calculoPromedio: promedio
}

// operaciones
// obtener valores
// operador .

console.log(persona2.nombre) //"Pedro"
console.log(persona2["nombre"]) //"Pedro"

// con el nombre de la propiedad
console.log(persona2["hobbies"])

// propiedad dinámicas
// variables
const busqueda = "salario"
console.log(persona2[busqueda]) //persona2.profesion   persona2["profesion"]


const alumnos = [
  {
    nombre: "Maria",
    edad: 12,
    grado: "6",
    grupo: "A",
    materias: ["Matematicas", "Español", "Ciencias"],
    extracurricular: ["futbol"]
  },
  {
    nombre: "Celeste",
    edad: 10,
    grado: "4",
    grupo: "C",
    materias: ["Matematicas", "Español"],
    extracurricular: ["baloncesto"]
  },
  {
    nombre: "Javier",
    edad: 11,
    grado: "5",
    grupo: "A",
    materias: ["Matematicas", "Ciencias"],
    extracurricular: ["futbol", "remo"]
  },
  {
    nombre: "Mario",
    edad: 7,
    grado: "3",
    grupo: "A",
    materias: ["Matematicas", "Español", "Ciencias", "Caligrafia"],
    extracurricular: ["Besibol"]
  },
  {
    nombre: "Irene",
    edad: 10,
    grado: "4",
    grupo: "A",
    materias: ["Español", "Ciencias"],
    extracurricular: ["gimnasia"]
  },
]

const rubro = "materias";
const valor = "Matematicas";
const resultados = []

for(let i = 0; i < alumnos.length; i++) {
  if (rubro === "materias" || rubro === "extracurricular") {
    if (alumnos[i][rubro].includes(valor)) {
      resultados.push(alumnos[i])
    }
  } else {
    if (alumnos[i][rubro] === valor) {
      resultados.push(alumnos[i])
    }
  }
}

console.log("resultados", resultados)



