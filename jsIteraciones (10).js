function mostrar()
{

  var cont=0;
  var sumaneg=0;
  var sumapos=0;
  var contpos=0;
  var contneg=0;
  var contpar=0;
  var cantceros=0;
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

    if(num<0)
    {
      sumaneg=sumaneg+num;
      contneg=contneg+1;
    }
    else
    {
      if(num>0)
      {
        sumapos=sumapos+num;
        contpos=contpos+1;
      }
      else
      {
        cantceros=cantceros+1
      }
    }

    if(num%2==0 && num!=0 )
    {
      contpar=contpar+1;
    }

    cont++;

	} while (cont>=0);

alert("La suma de los negativos es "+sumaneg);
alert("La suma de los positivos es "+sumapos);
alert("La cantidad de negativos es "+contneg);
alert("La cantidad de positivos es "+contpos);
alert("La cantidad de pares es "+contpar);
alert("La cantidad de ceros es "+cantceros);
alert("El promedio de los positivos es "+sumapos/contpos);
alert("El promedio de los negativos es "+sumaneg/contneg);
alert("La diferencia entre positivos y negativos es "+contpos-contneg);




}//FIN DE LA FUNCIÓN
