
$(document).ready(() => {

});

/**
* Este console log sirve para mostrar en la consola del navegador
* todos los objetos con sus respectivas key y value que se encuentra
* en el arreglo de objetos del archivo data.js
*/
console.log(data);

/**
* Creo todas las variables que voy a utilizar
* y guardo en cada una de ellas los div vacíos del html donde irá
* toda la información sacada de la data
*/
var mexico = $('.mexico');
var peru = $('.peru');
var chile = $('.chile');
var everyone = $('.everyone');

/**
* Utilizamos el evento on change para detectar cualquier cambio
* de valor en nuestras opciones de select
* El value lo encontramos designado para cada opción en nuestro html
*/
$('#categorias').on('change', function(){

/**
* En la variable selection guardo el value de la opción
* escodiga en el select
*/
  var selection = $('#categorias').val();

/**
* Declaro la primera condición: Si el value seleccionado es igual al string
* mexico, es decir, me aseguro que seleccionó la opción de México,
* entonces itero sobre la longitud de la data y vuelvo a realizar
* una condición donde verifico que en cada iteración sobre cada uno de
* los objetos, verifique si la key sede tiene el valor de 'México'
* (entonces es una chica de México), si eso se cumple, creo el contenido
* dinámico al div de México con la información que necesito
*/
  if (selection === 'mexico') {
    for (var i = 0; i < data.length; i++) {
      if (data[i].sede === 'México') {

/**
* Para que se llenen los div específicados y el contenido puesto
* anteriormente se elimine, aplico el método children al div padre el cual
* tomará a sus hijos (todo el contenido que le pasamos de las chicas)
* para aplicarle el método remove() que los eliminará finalmente
*/
        peru.children().remove();
        chile.children().remove();
        everyone.children().remove();
        mexico.append('<div class="row">' +
                        '<div class= "col-md-12 text-center">'+
                        /**
                        * a la foto le concateno el string de la data para crear
                        * la ruta completa del src
                        */
                          '<img src="assets/' + data[i].foto + '">' +
                          '<h3>' + data[i].nombre + '</h3>' +
                          '<p>Edad: ' + data[i].edad + '</p>' +
                          '<p>Nacionalidad: ' + data[i].nacionalidad + '</p>' +
                          '<p>Sede: ' + data[i].sede + '</p>' +
                        '</div>' +
                      '</div>')
      }
    }
  }

/**
* Declaro la segunda condición: Si el value seleccionado es igual al string
* peru, es decir, me aseguro que seleccionó la opción de Perú,
* entonces itero sobre la longitud de la data y vuelvo a realizar
* una condición donde verifico que en cada iteración sobre cada uno de
* los objetos, verifique si la key sede tiene el valor de 'Perú'
* (entonces es una chica de Perú), si eso se cumple, creo el contenido
* dinámico al div de Perú con la información que necesito
*/
  if (selection === 'peru') {
    for (var i = 0; i < data.length; i++) {
      if (data[i].sede === 'Perú') {
        mexico.children().remove();
        chile.children().remove();
        everyone.children().remove();
        peru.append('<div class="row">' +
                        '<div class= "col-md-12 text-center">'+
                          '<img src="assets/' + data[i].foto + '">' +
                          '<h3>' + data[i].nombre + '</h3>' +
                          '<p>Edad: ' + data[i].edad + '</p>' +
                          '<p>Nacionalidad: ' + data[i].nacionalidad + '</p>' +
                          '<p>Sede: ' + data[i].sede + '</p>' +
                        '</div>' +
                      '</div>')
      }
    }
  }

/**
* Declaro la tercera condición: Si el value seleccionado es igual al string
* chile, es decir, me aseguro que seleccionó la opción de Chile,
* entonces itero sobre la longitud de la data y vuelvo a realizar
* una condición donde verifico que en cada iteración sobre cada uno de
* los objetos, verifique si la key sede tiene el valor de 'Chile'
* (entonces es una chica de Chile), si eso se cumple, creo el contenido
* dinámico al div de Chile con la información que necesito
*/
  if (selection === 'chile') {
    for (var i = 0; i < data.length; i++) {
      if (data[i].sede === 'Chile') {
        peru.children().remove();
        mexico.children().remove();
        everyone.children().remove();
        chile.append('<div class="row">' +
                        '<div class= "col-md-12 text-center">'+
                          '<img src="assets/' + data[i].foto + '">' +
                          '<h3>' + data[i].nombre + '</h3>' +
                          '<p>Edad: ' + data[i].edad + '</p>' +
                          '<p>Nacionalidad: ' + data[i].nacionalidad + '</p>' +
                          '<p>Sede: ' + data[i].sede + '</p>' +
                        '</div>' +
                      '</div>')
      }
    }
  }

/**
* Declaro la cuarta y última condición: Si el value seleccionado es igual al string
* everyone, es decir, me aseguro que seleccionó la opción de Todas,
* entonces itero sobre la longitud de la data pero esta vez para sacar la
* información solicitada a todos los objetos del arreglo
*/
  if (selection === 'everyone') {
    peru.children().remove();
    mexico.children().remove();
    chile.children().remove();
    for (var i = 0; i < data.length; i++) {
        everyone.append('<div class="row">' +
                          '<div class= "col-md-12 text-center">'+
                            '<img src="assets/' + data[i].foto + '">' +
                            '<h3>' + data[i].nombre + '</h3>' +
                            '<p>Edad: ' + data[i].edad + '</p>' +
                            '<p>Nacionalidad: ' + data[i].nacionalidad + '</p>' +
                            '<p>Sede: ' + data[i].sede + '</p>' +
                          '</div>' +
                        '</div>')
    }
  }

})


/*})
*/
