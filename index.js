

// console.log(document)
// // seleccionar elemento por ID, el id es de css con #segundo-parrafo
// document.getElementById ("segundo-parrafo")
// // seleccionar elemento por css 
// const tercerParrafo=document.querySelector("tercer-parrafo")
// // este mismo querySelector solo selecciona un solo elemento, no varios
// //ejemplo
// const primerParrafo=document.querySelector(#tercer-parrafo)
// // ----------------------------------------------
// // Como seleccionar varios elementos a la vez?
// // por etiqueta
// const TodosLosParrafos(document.getElementsByTagName 'p')
// //por clase
// const todosLosCards = document.getElementsByClassName ("card")
// // o por cualquier selector de CSS
// const todasLasImagenes = document querySelectorAll (".card-img")
// ---------------------------------------
// 1. Hacer una lista de cinco parrafos <p> ok
// 2. Al primerParrafo, tercero y quinto darles la clase "verde" y que se pongan
// verdes desde CSS
// 3. Al primero y segundo darles el id "borde-rojo" y que tenga borde rojo en CSS
// 4. Seleccionar desde JS mostrar en consola todos los elementos con la etique
// ta p (usar getElementsByTagName)
// 5. Seleccionar desde JS y mostrar en consola todos elementos con la clase
// "verde"
// 6. Seleccionar y mostrar en consola el primer elemento con el ID "borde-rojo"
//  const TodosLosParrafos = document.getElementsByTagName ("p")
//  console.log(TodosLosParrafos)
// const TodosClaseverde = document.getElementsByClassName ("verde")
// console.log (TodosClaseverde)

// const todosBordeRojo = document.getElementById ("borde-rojo")
// console.log (todosBordeRojo)

// // ------- class list sirve pa ver las clases que tiene un elemento
// .classlist.remove sirve para borrar una lista
// .classlist.add. sirve para agregar una clase  a un elemento
// 1. Hacer 5 parrafos en HTML y agregarles a cada uno, una de estas clases:
// verde, color de texto verde --> el color de texto se agrega en CSS
// rojo, color de texto idem
// amarillo, idem
// azul, idem
// rosa, idem
// 2. Desde JS, 
// quitarle a verde la clase verde --> se va a ver negro
// agregarle a rojo la clase rosa --> se va a ver rosa
// dar toggle al elemento que tiene la clase rosa  --> deberia verse negro
// chequear si amarillo tiene la clase rojo ---> deberia dar false





// const primerElementoClaseVerde = document.querySelector (".verde")

// primerElementoClaseVerde.classList.remove("verde")

// const primerElementoClaseRojo = document.querySelector (".rojo")

// primerElementoClaseRojo.classList.add("rosa")

// const primerElementoClaseAmarillo = document.querySelector (".rosa")

// primerElementoClaseAmarillo.classList.toggle("rosa")

// const primerElementoClaseAmarillo = document.querySelector (".amarillo")

// primerElementoClaseAmarillo.classList.contains("rojo")

//           --------------------- repaso

const tarjetaDeSailorMoon = document.querySelector ("#sailor-moon")

const boton = document.querySelector ("#boton-sailor")

boton.onclick = () => {
    tarjetaDeSailorMoon.classList.add("borrar")
}

