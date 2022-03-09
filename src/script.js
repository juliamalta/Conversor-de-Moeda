function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmReal = valorEmDolarNumerico * 5;

  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");

  var valorConvertido = " o resultado em real " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterReal() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmDolar = valorEmDolarNumerico / 5;

  console.log(valorEmDolar);

  var elementoValorConvertido = document.getElementById("valorConvertido");

  var valorConvertido = " o resultado em real " + valorEmDolar;
  elementoValorConvertido.innerHTML = valorConvertido;
}


