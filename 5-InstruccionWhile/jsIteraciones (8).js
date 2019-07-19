function mostrar()
{

	var cont=0;
	var positivo=0;
  var negativo=1;
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
    if(num>0)
    {
      positivo=positivo+num;
    }
    else
    {
      if(num<0)
      {
        negativo=negativo*num;
      }
      else
      {
        continue;
      }
    }
    cont++;

  } while(cont>=0);

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
