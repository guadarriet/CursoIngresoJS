function mostrar()
{

  var cont=0;
  var num;
  var max;
  var min;
  var primeravez = true;

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
    if(primeravez)
    {
      max=num;
      min=num;
      primeravez = false;
    }
    if(num<min)
    {
      min=num;
    }
    else
    {
      if(num>max)
      {
        max=num;
      }
      else
      {
        continue;
      }
    }


  } while(cont>=0);

document.getElementById("maximo").value = max;
document.getElementById("minimo").value = min;



}//FIN DE LA FUNCIÓN
