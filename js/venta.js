
const misProductos = [
  {
       id: "1",
      titulo: "Venecia",
      precio: 84000,
      img : "https://www.iagua.es/sites/default/files/styles/thumbnail-700x525/public/venecia-coronavirus-medioambiente.jpg?itok=TiZwOSeh"
  },
  {
    id: "2",
    titulo: "Bruselas",
    precio: 96000,
    img :"https://www.iagua.es/sites/default/files/styles/thumbnail-700x525/public/brujas_agua.jpg?itok=SVySGrLX"
},
{
  id: "3",
  titulo: "Nueva Zelanda",
  precio: 74000,
  img :"https://www.iagua.es/sites/default/files/styles/thumbnail-700x525/public/nueva-zelanda-pixabay.jpg?itok=5z8mftdO"
},
{
  id: "4",
  titulo: "Colmar",
  precio: 106000,
  img :"https://javitour.com/wp-content/uploads/2015/12/5391197371_873db8b221_b-700x525.jpg"
},
{
  id: "5",
  titulo: "Amsterdam",
  precio: 123000,
  img : "https://www.peacefuldumpling.com/wp-content/uploads/2017/05/amsterdam5-700x525.jpg"
},
{
  id: "6",
  titulo: "Islandia",
  precio: 173000,
  img : "https://www.iagua.es/sites/default/files/images/Blue_Lagoon%2C_Iceland_(22360145156).jpg"
},
{
  id: "7",
  titulo: "Filandia",
  precio: 140000,
  img : "https://finland.fi/wp-content/uploads/2017/01/loyly-700x525.jpg"
},
{
  id: "8",
  titulo: "Roma",
  precio: 103000,
  img : "http://www.lachicadelbanquillo.com/wp-content/uploads/2019/04/CERRO-PALATINO-700x525.jpg"
}
];
  
// creacion de card html con interaccion de DOM/ 
const section = document.querySelector(`.contenedor`);

console.log(section);

for(let producto of misProductos){
  
let div = document.createElement("div");
  
div.className = "card-container card-img card "

div.innerHTML = `

<img class=".card .card-img" src=${producto.img}>
<h1 class="fluid-container"> ${producto.titulo} </h1>
<p>>${producto.precio} </p>
<button  id="btnRegistrar" class="btn btn-danger"> agregar al carrito </button>`

console.log(div);

section.appendChild(div);

//guardado en localstorage y uso del JSON.stringify

const buttons = document.getElementsByClassName('btnRegistrar');

for (const button of buttons) {
  
//al hacer click en el evento agregar al carrito envia la informacion de los productos al localstorage
  button.addEventListener('click', (event) => {
    const buttonClickeado = event.target;
    console.log(buttonClickeado.id);
    const productoAlcarrito = misProductos.find((productoItem) => productoItem.id === parseInt(buttonClickeado.id));

    productoAlcarrito.comprado = true;

    console.log(misProductos);
  });
}

const btnRegistrar = document.getElementById('btnRegistrar');

btnRegistrar.addEventListener('click', () => {
  
  const productoAlcarrito = misProductos.filter((productoItem) => productoItem.comprado);

  console.log(misProductos);
  
  localStorage.setItem('misproductos', JSON.stringify(misProductos));

  const containercomprado = document.getElementById('containerComprado');

  for (const producto of productoAlcarrito) {
    const producto = document.createElement('div');
    element.innerHTML = `
    <img class=".card .card-img" src=${producto.img}>
    <h1 class="fluid-container"> ${producto.titulo} </h1>
    <p>>${producto.precio} </p>
    <button class="btn btn-danger" id="btnRegistrar"> agregar al carrito </button>`;
    containerPresentes.appendChild(producto);
  }
});

}



// interaccion de Dom con el formulario de consultas 



let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");   
    

    alert("GRACIAS! \b tu formulario fue enviado")

 
}
const input1  = document.getElementById("nombre");
const input2  = document.getElementById("email");


input1.onkeyup = () => {
  console.log("keyUp", input1.value);
};
input2.onkeydown = () => {
  console.log("keyDown", input2.value);
};
function myFunction(form) {
  alert(form.fname.value);
  return false;
  }

//obtener datos del formulario

var getData = function (){
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var texto = document.getElementById("texto").value;
console.log(nombre+ ""+email+""+texto)

}
// // interacion del formulario con jquery
// $(document).ready(function() {
//   $("#eventoUno").on("click", function(){
//     $("#miModal").modal({backdrop:"static", keyboard: false});

// });
// $("btnGuardar").on("click",function(){

// alert ("muchas gracias");

// setTimeout(function(){
  
// },);

// });
// });


// jquery en el boton de agregar carrito 
$('body').prepend('<button  id="btnRegistrar" class="btn btn-danger"');


$('#btnRegistrar').on('click', () => {
  console.log("Respuesta a un click");
});

$('#btnRegistrar').on('dblclick', () => {
  console.log("Respuesta al doble click");
});

