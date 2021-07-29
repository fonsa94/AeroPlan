



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


// jquery en el boton de agregar carrito 
$('body').prepend('<button  id="btnRegistrar" class="btn btn-danger"');


$('#btnRegistrar').on('click', () => {
  console.log("Respuesta a un click");
});

$('#btnRegistrar').on('dblclick', () => {
  console.log("Respuesta al doble click");
});

