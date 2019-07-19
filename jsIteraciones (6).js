function mostrar()
{

  var cont=0;
  var num=0;
  var acumulador=0;

  while(cont<5)
  {
    num=prompt("Ingrese un numero");
    num=parseInt(num);
    if(isNaN(num))
    {
      continue;
    }
    acumulador=acumulador+num;
    cont=cont+1;
  }

  document.getElementById('suma').value=acumulador;
  document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
