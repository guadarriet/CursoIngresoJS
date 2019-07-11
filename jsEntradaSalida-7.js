/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar()
{
  var num1;
  var num2;
  num1=document.getElementById("numeroUno").value;
  num2=document.getElementById("numeroDos").value;
  num1=parseInt(num1);
  num2=parseInt(num2);
  alert("El resultado de la suma es "+(num1+num2));

}

function restar()
{
  var num1;
  var num2;
  num1=document.getElementById("numeroUno").value;
  num2=document.getElementById("numeroDos").value;
  num1=parseInt(num1);
  num2=parseInt(num2);
  alert("El resultado de la resta es "+(num1-num2));

}

function multiplicar()
{
  var num1;
  var num2;
  num1=document.getElementById("numeroUno").value;
  num2=document.getElementById("numeroDos").value;
  num1=parseInt(num1);
  num2=parseInt(num2);
  alert("El resultado de la multiplicación es "+(num1*num2));
}

function dividir()
{
  var num1;
  var num2;
  num1=document.getElementById("numeroUno").value;
  num2=document.getElementById("numeroDos").value;
  num1=parseInt(num1);
  num2=parseInt(num2);
  alert("El resultado de la división es "+(num1/num2));
}

