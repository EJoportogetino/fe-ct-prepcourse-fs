/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   //function meow()
   //{return ('Meow!')}                                                                  
   //var gato = {nombre: nombre ,edad: edad, funcion (meow)};
   //return (gato);                                                                   no entiendo el error // el error era no entender que una propiedad puede ser una funcion
   var gato = {nombre: nombre , edad:edad, meow: function() {return ("Meow!")}};
   return (gato);                                                                      

}

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   Usuario={nombre: nombre,email: email,password: password};
   return(Usuario);
}

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
  objeto[propiedad] =null;
  return(objeto);
}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   //objeto[metodo()];                                                          dot notation tampoco funciona
   objeto[metodo]();                                                          //tan cerca y tan lejos
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   var a= objetoMisterioso.numeroMisterioso;
   a = a *5;
   objetoMisterioso.numeroMisterioso = a;                                     
   return(a);                                                                   //antes no andaba porque habia puesto que retornara objeto misterioso cuando tenia q retornar el resu
   //return (objetoMisterioso.numeroMisterioso*5);                              //no entiendo como fue q funciono, pero lo hizo 
}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   delete(objeto[propiedad]);
   return (objeto);                                                   //no funciona con dot notation
}

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   var tienepropiedad= objetoUsuario.hasOwnProperty('email');
   if ( tienepropiedad === true && objetoUsuario.email != null)
    {
      return(true);
    }
   else
    {
     return(false);
    };
}

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   var tienepropiedad= objeto.hasOwnProperty(propiedad); // por que en la teoria esta funcion llama a la propiedad con ('') y aca no funciona? si ambas son nombres de propiedades
   if (tienepropiedad === true)
    {
      return(true);
    }
   else
    {
     return(false);
    };
}

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   var contraseña = objetoUsuario.password;                     // ahora lo q no anduvo fue bracket notation .... ¯\_(ツ)_/¯ 
   if (contraseña === password)                                 // explicacion : dot notetion funciona cuando lo que estoy 
     {return(true)}                                            //usando es el nombre literal, cuando hacemos referencia a 
   else {return(false)}                                        //un nombre (el valor de la variable que esta de referecia en la funcion), se usa []
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.password = nuevaPassword;
   return (objetoUsuario)
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   //objetoUsuario[amigos].push(nuevoAmigo);.... para q funcione "" en los cochetes
   //return(objetoUsuario);                                                       primera prueba, creo q voy a probar con for in
  objetoUsuario.amigos.push(nuevoAmigo);                                         //... cada ves mas confundido de porque a veces funciona bracket y a veces dot
  return(objetoUsuario);

}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   //for (var user in objetoMuchosUsuarios)
   // {
   //   user[esPremium]=true;
   // }
   // return (objetoMuchosUsuarios);                                       creo q este error es por tomar a "objetomuchosusuarios" como objeto cuando es un arreglo... 
   //for (var i=0; i<objetoMuchosUsuarios.length; i++)
   //  {
   //   i[esPremium] = true;                                                ojo aca!
   //  }
  //return(objetoMuchosUsuarios); 
  for (var i=0; i<objetoMuchosUsuarios.length; i++)
  {
   objetoMuchosUsuarios[i].esPremium = true;
  }
return(objetoMuchosUsuarios);                
}

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   //var suma= 0;var posteos = objetoUsuario.posts;
   //for (i=0; i<posteos.length; i++)
   // {
   //   a= posteos.likes;
   //   suma= suma+a;
   // } 
   //return (suma);                                                                        //al reves del anterior? tratando un objeto como arreglo?
  // var publi=objetoUsuario.posts; suma = 0;
  // for (var i= 0; i<publi.length; i++)
  //   {
  //    suma=i.likes + suma;
  //   }
  // return(suma);                                                                         // luego de consultar en slack me aconsejaron usar for..of
  var suma =0;
  for (var i of objetoUsuario.posts) 
    {
       suma= i.likes + suma;
    }
   return (suma);
}

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   
   //  objetoProducto.calcularPrecioDescuento = function() 
   //  {
   //    var precio= objetoProducto.precio * objetoProducto.porcentajeDeDescuento;
   //    return(precio); 
   //  }                                                                           // forma uno
   //  objetoProducto= { calcularPrecioDescuento: () => 
   //     {
   //       var precio= objetoProducto.precio * objetoProducto.porcentajeDeDescuento;
   //       return(precio); 
   //     }                                                                        // forma dos

   //  objetoProducto= { calcularPrecioDescuento: (objetoProducto[precio], objetoProducto[porcentajeDeDescuento]) => 
   //      {
   //         var costo= objetoProducto[precio] * objetoProducto[porcentajeDeDescuento];
   //         return(costo); 
   //      }                                                                        //forma tres

   //     var costo= objetoProducto.precio;
   //     var descuento= objetoProducto.porcentajeDeDescuento;
   //     objetoProducto.calcularPrecioDescuento = function(costo, descuento)
   //       {
   //         var pre=costo*descuento;
   //         return(pre);
   //       }                                                                       // forma cuatro, definiendo la funcion por separado?
   //       function calcularPrecioDescuento(objetoProducto) 
   //        {
   //           return (objetoProducto[porcentajeDeDescuento]*objetoProducto[precio]);
   //        }
   //        return objetoProducto.calcularPrecioDescuento()                        //forma cinco
   // objetoProducto.calcularPrecioDescuento = function() {
   //    var descuento = objetoProducto.precio * objetoProducto.porcentajeDeDescuento;
   //    var precioFinal = objetoProducto.precio - descuento;
   //    return precioFinal;                                                         
   //}                                       
   //return objetoProducto.calcularPrecioDescuento();                                      no pude resolverlo
   objetoProducto.calcularPrecioDescuento = function()
      {
         var descuento=objetoProducto.precio * objetoProducto.porcentajeDeDescuento;
         var preciofinal= objetoProducto.precio - descuento;
         return preciofinal;
      }
      return objetoProducto;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
