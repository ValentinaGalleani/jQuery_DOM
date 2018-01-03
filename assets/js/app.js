
$(document).ready(() => {

});

console.log(data);

var cont = $('.container');
var mexico = $('.mexico');
var peru = $('.peru');
var chile = $('.chile');
var everyone = $('.everyone');

//evento para que funcione el select
$('#categorias').on('change', function(){

  //guardo el valor del select en la variable selection
  var selection = $('#categorias').val();

  if (selection === 'mexico') {
    for (var i = 0; i < data.length; i++){
      if (data[i].sede === 'México') {
        peru.children().remove();
        chile.children().remove();
        everyone.children().remove();
        mexico.append('<div class="row">' +
                        '<div class= "col-md-12 text-center">'+
                        '<img src="assets/' + data[i].foto + '">' +
                        '<h3>' + data[i].nombre + '</h3>' +
                        '<p>Edad: ' + data[i].edad + '</p>' +
                        '<p>Nacionalidad: ' + data[i].nacionalidad + '</p>' + '<p>Sede: ' + data[i].sede + '</p>' +
                          '</div>' +
                        '</div>')
      }
    }
  }

  if (selection === 'peru') {
    for (var i = 0; i < data.length; i++){
      if (data[i].sede === 'Perú') {
        mexico.children().remove();
        chile.children().remove();
        everyone.children().remove();
        peru.append('<div class="row">' +
                        '<div class= "col-md-12 text-center">'+
                        '<img src="assets/' + data[i].foto + '">' +
                        '<h3>' + data[i].nombre + '</h3>' +
                        '<p>Edad: ' + data[i].edad + '</p>' +
                        '<p>Nacionalidad: ' + data[i].nacionalidad + '</p>' + '<p>Sede: ' + data[i].sede + '</p>' +
                          '</div>' +
                        '</div>')
      }
    }
  }

  if (selection === 'chile') {
    for (var i = 0; i < data.length; i++){
      if (data[i].sede === 'Chile') {
        peru.children().remove();
        mexico.children().remove();
        everyone.children().remove();
        chile.append('<div class="row">' +
                        '<div class= "col-md-12 text-center">'+
                        '<img src="assets/' + data[i].foto + '">' +
                        '<h3>' + data[i].nombre + '</h3>' +
                        '<p>Edad: ' + data[i].edad + '</p>' +
                        '<p>Nacionalidad: ' + data[i].nacionalidad + '</p>' + '<p>Sede: ' + data[i].sede + '</p>' +
                          '</div>' +
                        '</div>')
      }
    }
  }

  if (selection === 'everyone') {
    peru.children().remove();
    mexico.children().remove();
    chile.children().remove();
    for (var i = 0; i < data.length; i++){
        everyone.append('<div class="row">' +
                        '<div class= "col-md-12 text-center">'+
                        '<img src="assets/' + data[i].foto + '">' +
                        '<h3>' + data[i].nombre + '</h3>' +
                        '<p>Edad: ' + data[i].edad + '</p>' +
                        '<p>Nacionalidad: ' + data[i].nacionalidad + '</p>' + '<p>Sede: ' + data[i].sede + '</p>' +
                          '</div>' +
                        '</div>')
    }
  }
})
