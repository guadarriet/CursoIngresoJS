function mostrar()
{

	var contador=0;
  var acumulador=0;
  var num=0;

  do
  {
    num=prompt("Ingrese un numero");
    if(num==null)
    {
      break;
    }
    num=parseInt(num);
    if(isNaN(num))
    {
      continue;
    }
    acumulador=acumulador+num;
    contador++;

  } while(contador>=0);

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
