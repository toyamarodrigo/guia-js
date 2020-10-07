// 1- Imprimir por consola un mensaje guardado en una variable usando la función console.log()
console.log('1-');
let a = 'mensaje';
console.log(a);

/***************************/

// 2- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función console.log()
console.log('2-');
meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

meses.forEach((e) => {
  console.log(e);
});

/***************************/

// 3- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
console.log('3-');
function isEven(num) {
  return num % 2 === 0 ? 'par' : 'impar';
}

console.log(isEven(2), 'par');
console.log(isEven(3), 'impar');

/***************************/

// 4- Define una función que dado un array de números nos dice si alguno es par.
console.log('4-');

function algunoEsPar(arr) {
  const even = (e) => e % 2 === 0;
  return arr.some(even);
}

console.log(algunoEsPar([1, 2, 3]), true);

/***************************/

// 5- Define la función aprobó, que dada la lista de las notas de un alumno devuelve si el alumno aprobó. Un alumno aprobó si todas sus notas son mayores o iguales a 4
console.log('5-');
const greaterFour = (e) => e >= 4;

function aprobo(arr) {
  return arr.every(greaterFour);
}

console.log(aprobo([8, 6, 2, 4]), false);

/***************************/

// 6- Define la función quienesAprobaron, que dada la información de un curso devuelve la información de los alumnos que aprobaron. Podés usar la función que hiciste en el ejercicio anterior.
console.log('6-');

function quienesAprobaron(arr) {
  return arr.filter((e) => e.every(greaterFour));
}

console.log(
  quienesAprobaron([
    [8, 6, 2, 4],
    [7, 9, 4, 5],
    [6, 2, 4, 2],
    [9, 6, 7, 10],
  ]),
  [7, 9, 4, 5],
  [9, 6, 7, 10]
);

/***************************/

// 7- Define la función hayAlgunNegativo, que dada una lista de números nos dice si hay algún negativo
console.log('7-');
function hayAlgunNegativo(arr) {
  return arr.some((e) => e < 0);
}

console.log(hayAlgunNegativo([2, -3, 9], true));

/***************************/

// 8- Escribi una función cuantosCumplen que dada una condición y una lista, diga cuantos elementos la cumplen
console.log('8-');
even = (e) => e % 2 === 0;

function cuantosCumplen(cond, arr) {
  return arr.filter(cond).length;
}
console.log(cuantosCumplen(even, [7, 9, 25, 42]), 1);

/***************************/

// 9- Escribí una función rechazar, que dada una condición y un array, devuelva un array con los elementos que no la cumplen
console.log('9-');

function rechazar(cond, arr) {
  const notEven = arr.length - arr.filter(cond).length;
  return notEven;
}

console.log(rechazar(even, [7, 9, 87, 42]), 3);

/***************************/

// 10- Define la función contiene que dado un elemento y una lista, nos diga si la lista contiene al elemento
console.log('10-');
function contiene(el, arr) {
  return arr.some((e) => e === el);
}

console.log(contiene(8, [7, 8, 9]), true);

/***************************/

// 11- Crea una clase Persona que tenga los atributos nombre y edad. Además agregale un método presentarse() que como resultado imprima un mensaje diciendo su nombre y edad.
console.log('11-');
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse() {
    return 'Mi nombre es: ' + this.nombre + '\nTengo ' + this.edad + ' años';
  }
}

/***************************/

// 12- Crea una clase Estudiante (que herede de Persona) que tenga un atributo profesor y tenga dos métodos.
// El método estudiando() que imprime el mensaje “Estudiando con ” y el nombre del profesor con el que se encuentra estudiando.
// El método setProfesor(profesor) que setea con qué profesor se encuentra estudiando.
console.log('12-');
class Estudiante extends Persona {
  constructor(nombre, edad, profesor) {
    super(nombre, edad);
    this.profesor = profesor;
  }

  estudiando() {
    return 'Estudiando con ' + this.profesor;
  }

  setProfesor(profesor) {
    this.profesor = profesor;
  }
}

/***************************/

// 13- Crea una clase Profesor (que herede de Persona) que tenga un atributo estudiantes con un array de Estudiante. Además debe tener dos métodos enseñando() que imprima por consola todos sus estudiantes a los cuales les está enseñando y el método addEstudiante(unEstudiante) que agregue a ese estudiante a la lista. Además este método es responsable de manejar de agregar al objeto profesor como profesor del estudiante (manejo de doble referencia)
console.log('13-');

class Profesor extends Persona {
  constructor(nombre, edad, ...estudiantes) {
    super(nombre, edad);
    this.estudiantes = estudiantes;
  }

  ensenando() {
    return (
      'Profesor ' + this.nombre + ' Todos los estudiantes ' + this.estudiantes
    );
  }

  addEstudiante(unEstudiante) {
    this.estudiantes.push(unEstudiante);
  }
}

const p1 = new Persona('Jose', '25');
console.log(p1.presentarse());

const prof1 = new Profesor('PROFESOR1', '50');
const prof2 = new Profesor('PROFESOR2', '62');

const e1 = new Estudiante('Rodri', '20');
e1.setProfesor(prof1);
const e2 = new Estudiante('Bruno', '23');
e2.setProfesor(prof1);
const e3 = new Estudiante('Nicolas', '29');
e3.setProfesor(prof1);

const e4 = new Estudiante('Julian', '24');
e4.setProfesor(prof2);
const e5 = new Estudiante('Ramiro', '22');
e5.setProfesor(prof2);

prof1.addEstudiante(e1);
prof1.addEstudiante(e2);
prof1.addEstudiante(e3);

prof2.addEstudiante(e4);
prof2.addEstudiante(e5);

console.log(e1);
console.log(prof1);

console.log(e1.estudiando());
console.log(e2.estudiando());
console.log(e3.estudiando());

console.log(prof1.ensenando());
console.log(prof2.ensenando());
