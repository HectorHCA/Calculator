
function añadirNumero(numero) {
	document.getElementById('display').value += numero;
  }

function borrar(){

	document.getElementById('display').value = null;


}

function appendOperator(operator) {
	document.getElementById('display').value += operator;
  }


function calculate() {
	let display = document.getElementById('display');
	let result = eval(display.value);
	display.value = result;

	/*
	if(display.value == 69){

		display.value = "CACHOPO";

	}
	*/



  }



  function quitarAnterior() {
	let display = document.getElementById('display');
	let currentValue = display.value;
	let newValue = currentValue.slice(0, -1); // Elimina el último carácter
	display.value = newValue;
  }

  


