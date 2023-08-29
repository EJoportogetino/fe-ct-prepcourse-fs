/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   arr_1=[]; arr_2=[]
   for(var prop in objeto)  // por cada elemento del objeto, tengo 
   {
      arr_1.push(prop);
      arr_1.push(objeto[prop]);
      arr_2.push(arr_1);
      arr_1= [];
   }
   return(arr_2);
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   // var arreglo_string= string.split('');
   // var contaron=true;
   // var letras= {};
   // for(var i=0; i< arreglo_string.length; i++)
   //     {
   //       var primer =arreglo_string[i];
   //       if (contaron===false)
   //         {
   //          var cont=0;
   //          for (var a=i; a< arreglo_string.length; a++)
   //            {
   //              if (primer=== arreglo_string[a])
   //                {
   //                  cont = cont+1;
                   
   //                }
   //            }
   //          letras[primer]=cont;// contaron= false; sumarle al objeto el count y el elemento 
   //         } 
   //     }
   // return(letras);
      // var letras = {};
      // for (var i = 0; i < string.length; i++) 
      // {
      //    var letra = string[i].toLowerCase(); 
      //    if (letra.match(/[a-z]/)) 
      //    { 
      //       if (letras[letra]) 
      //       {
      //          letras[letra]++;
      //       } else 
      //       {
      //          letras[letra] = 1;
      //       }
      //    }
      // }
   
      // return letras;
      let letras= {};
      for (var i = 0; i < string.length; i++)
       {
         
       }


        
   }

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   // var pal= string.split(''); var pal_arreglada= [];var cont=0
   // for(var a=0; a<pal.length; a++)
   //   {
   //    if (pal[a]>='a' && pal[a]<='z')
   //      {
   //       pal_arreglada.push(pal[a]); cont=cont +1;
   //      }
   //    else
   //    if (pal[a]>='A' && pal[a]<='Z')
   //      {
   //       pal_arreglada[cont]=pal[a]; cont =cont+1;
   //      }
   //   }
   //   return(pal_arreglada.join(''));                           no lo pude desbugear, otro planteo, se arman dos arreglos y al final se unen
   var arr_min= [];var arr_may= []; pal= string.split('');
   for(var a=0; a<pal.length; a++)
     {
       if (pal[a]>='a' && pal[a]<='z')
         {
          arr_min.push(pal[a]);
         }
       else
       if (pal[a]>='A' && pal[a]<='Z')
         {
          arr_may.push(pal[a]);
         }
      }
      var palabra_arreglada= (arr_may.join('')+arr_min.join('')) ;
   return (palabra_arreglada)
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabra = frase.split(' ');
   for (var i=0; i<palabra.length; i++)
    {
      palabra[i]=palabra[i].split("").reverse().join("");
    }
    const resultado= palabra.join(" ");
    return resultado;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   // var ultimo= numero % 10;
   // while (numero >10)
   //  {
   //    numero= numero %10;
   //  }
   //  if (numero=ultimo)
   //    {return('Es capicua')}
   // else
   //    {return("No es capicua")}    aunque el primero y el ultimo sean iguales no significa q sea capicua, aparte mal hecho
   
   var numero_copia= numero;numero_dadovuelta=0;
   while(numero > 0)
     {
       var i = numero % 10;
       numero = Math.floor(numero /10);
       var numero_dadovuelta= (numero_dadovuelta*10) + i; 
     }
   if (numero_copia=== numero_dadovuelta) 
     {return("Es capicua")}
   else{return("No es capicua")}
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var arreglo_=string.split(''); var arreglado=[];
  for (var i=0; i< arreglo_.length; i++)
   {
   if (!(arreglo_[i]=== 'a' ||arreglo_[i]===  'b' ||arreglo_[i]===  'c'))
    {
      arreglado.push(arreglo_[i]);
    }
   }
 return(arreglado.join(''));
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a,b) => a.length-b.length)
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
//    var array_resultado =[]; var a=0;concidencia= false;
//    for (var i=0; i<array1.length; i++)
//      {
//       while ((a < array2.length) && (concidencia===false))
//         {
//          if(array2[a]=== array1[i])
//             {coincidencia= true;}
//          else {a=a+1};
//         }
//       if (coincidencia=== true)
//       array_resultado.push(array1[i]);
//      }
//    return(array_resultado);
// }                                                                 bucle infinito
var array_resultado =[]; 
    for (var i=0; i<array1.length; i++)
      {
       var concidencia= false;
       for(var a=0; a < array2.length ; a++)
         {
          if(array2[a]=== array1[i])
             {
               concidencia= true;
               break;
             }
         }
       if (concidencia=== true)
       array_resultado.push(array1[i]);
      }
    return(array_resultado);
}   

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
