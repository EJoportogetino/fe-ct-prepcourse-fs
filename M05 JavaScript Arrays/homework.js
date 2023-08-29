/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return (array[0]); 
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return (array[array.length-1]);
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return(array.length); 
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   //var masuno=array.map(num =>{return num+1});
   //return(masuno);                                                                    //probar hacer por interación
   for (i=0;i<array.length;i++)
     {array[i]=array[i] +1}
    return(array)
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return(array);
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return(array);
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var frase= palabras.join(' ');
   return(frase);
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var esta= array.includes(elemento);
   return(esta);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma= 0;
   for (var i=0;i<arrayOfNums.length;i++) 
       {
         suma = suma + arrayOfNums[i];
       }
   return(suma);
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma=0;
   for (var i=0; i< resultadosTest.length; i++)
     {
      suma = suma + resultadosTest[i];
     }
     var promedio= suma / resultadosTest.length;
     return(promedio);
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   mayor =0;
   for (var i=0;i<arrayOfNums.length;i++)
     {
       if (arrayOfNums[i]>mayor)
          {
            mayor=arrayOfNums[i];
          }
     }
   return(mayor);
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length ===0)
     {
      return(0);
     } 
   var resultado = 1;
   for (var i =0; i< arguments.length; i++)
    {
      resultado = arguments[i] * resultado;
    }
    return (resultado); //no recuerdo en la teoria haber visto lo de arguments, al menos en el video
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var mayores_18 =0;
   for (var i=0;i<array.length;i++)
    {
      if (array[i]>18)
         {
            mayores_18 = mayores_18 + 1;
         }
    }
    return (mayores_18);
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7)
     {return("Es fin de semana")}
   else
     {return("Es dia laboral")}
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var cadena_num = num.toString();
   var arreglo_numero = cadena_num.split('');  //no recuerdo que dijera en el video teoria que solo funcionaba con strings, lo vi en una resolucion de slack

   if (arreglo_numero[0]==="9")
     {
      return(true);
     }
   else 
    {
      return(false);
    };
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var i = 0;
   if (array[i]===array[1])
    {
     return (true);
    }
  else 
    {
      return(false);
    }
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var i= 0;var iguale_e=false;var iguale_m=false;var iguale_n=false;var a=0; var arreglo=[];
   while (i < array.length )
     {
      if (array[i]=== "Enero" || array[i]=== "Marzo" || array[i]=== "Noviembre")
       {
         if (array[i]=== "Enero")
          {
            arreglo[a] = array[i];
            a ++;
            iguale_e=true;  
          } 
          else if (array[i]=== "Marzo")
          {
            arreglo[a] = array[i];
            a ++;
            iguale_m=true;  
          }
          else if (array[i]=== "Noviembre")
          {
            arreglo[a] = array[i];
            a ++;
            iguale_n=true;  
          }
       }
      i++;
     }
   if (iguale_e===true && iguale_m===true && iguale_n===true )
    {
     return(arreglo);
    }
   else
   {
      return ("No se encontraron los meses pedidos");  // se que debe haber modos mas practicos de hacer esto, teoricamente para resumir codigo lo primero es q la sentencia de if sea otro procedimiento
   }                                                   // pero realmente no se me ocurre otra manera, personalmente me resulta mas "practico" pensarlo asi aunque se q no es lo mas optimo
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tabla=[];
   for (i=0; i<11; i++)  
     { 
      tabla.push(i*6);
     }
 return (tabla);
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var i=0; var array_2=[];
   while (i<array.length)
     {
        if (array[i]>100)
          {
            var a=array[i];
            array_2.push(a);
          }
          i++;
     }
     return (array_2);
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var control=0;var cont=0; var romper= false; var arr=[];
   while (control<10)
    {  
      num= num+2;
      arr.push(num);
      cont= cont +1;
      if (num===cont)
        {
         romper = true;
         break;                                                        
        }                                                               
      control ++;
    }                                          
   if (romper ===true)
     {return ("Se interrumpió la ejecución");}
   else if(romper===false)                                              
     {                                                            
        return(arr);                                                              
     }
     
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var cont=0;
   var arr=[];
   while (cont<10)
    {  
      if (cont === 5) {cont ++; continue; };        //nota personal: si tengo un if dentro de un while... en todas las condiciones sumarle al contador que tengo para cortar 
      num= num+2;                                   // porque si entra a una condicion que no suma el contador "de corte" tenes el problema de entrar en un loop infinito 
      arr.push(num);                                //y pasas 3 horas pensando por que 
      cont++;                                                     
    }                                                                                                        
   return(arr);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
