//Crear una lista (Array) y pedir los datos del usuario x maximo 10
//datos, usando el metodo unshift, eliminar los datos que deseas con
//el metodo shift  mostrar el resultado en consola o en alert

// const array1 = ['a', 'b', 'c'];
// const iterator = array1.keys();

// for (const key of iterator) {
//   console.log(key,array1);
// }

const datos = [];
const name = ["Nombre","apellido", "edad", "fecha de nacimiento","direccion","telefono","celular","ciudad de residencia","profesion","experiencia laboral"];
const iterator = name.keys();
let i;
window.alert('Por favor ingrese los siguientes datos personales: ');
for(const key of iterator){
    let listaPersonal = prompt(`Ingrese su ${name[key]}`);
    console.log(datos.unshift(`${name[key]} `+listaPersonal));

}
console.log(datos);
const datoseliminar = datos.shift();
console.log(datoseliminar);


//Ejemplo
// const lista = [];
//  let i = 1;
//  while(i <= 4){
//     lista.push(prompt(`Ingrese el dato - ${i}`));
//     i++
//  }
//  console.log(lista);
//  console.log(lista.pop());

//Metodo pop el elimina el ultimo dato de la lista y devuel el valor del dato eliminado
// const plantas = ["Brocoli", "Coliflor", "Tomate"];
// const datoeliminado = plantas.pop();
// console.log(plantas);
// console.log(datoeliminado);



//Metodo push ingrese un dato al final del array y devuelve el total de datos que hay en el array
// const animal = ["Cerdo", "Cabra", "Oveja"];
// const animalesDomesticos = ["Haster","Gato","Perro", "Iguana"];
// let total = '';
// for (let i = 0; i < animalesDomesticos.length; i++) {
//     total = animal.push(animalesDomesticos[i]);
// }
// // for(i of animalesDomesticos){
// //     total = animal.push(i);
// // }
// console.log(animal);
// console.log(total);






// // Declaramos un variable de tipo array y almacemanos los datos del usuario 
// function verificar(){
//     let opc = null;
//     do{
//         opc = prompt(`¿Que tipo de usuario eres?\n \n1. Profesor\n2. Estudiante`);
//         switch (opc) {
//             case '1':
//                 opc = true;
//                 break;
//             case '2':
//                 opc = false;
//                 break;
//             default:
//                 opc = null;
//                 alert("La opcion seleciona no existe porfavor ver nuevamente las opciones");
//                 break;
//         }
//     }while(opc==null);
//     return opc;
// }

// let listaPersonal = [];
// listaPersonal[0] = prompt("Ingrese su nombre");
// listaPersonal[1] = parseInt(prompt("Ingrese su edad"));
// listaPersonal[2] = parseFloat(prompt("Ingrese su altura"));
// listaPersonal[3] = verificar();
// listaPersonal[4] = ["Programar","Cocinar"];
// listaPersonal[5] = function (){
//         return `Hola soy la funcion del array`;
//     };
// console.log(listaPersonal);


//Declaracion de una variable tipo array, por medio de los indices llenamos la lista o array que almacena los datos en secuencia
// let array = [];
// array [0]= "Marly Yurley Torres";
// array[1] = 33;
// array[2] = 1.61;
// array[3] = false;
// array[4] = ["programar", "Dibujar", "Jugar baloncesto"];
// array[5] = function (){
//     return `Hola soy la funcion del array`;
// };
// console.log(array);




// Declaracion de una variable tipo array y inicializada con los datos
// let array = ["Marly Yurley Torres", 
// 33,
// 1.61,
// false,
// ["programar", "Dibujar", "Jugar baloncesto"],
// function(){
//     return 'Soy la funcion del array';
// }

// ];
// console.log( array)