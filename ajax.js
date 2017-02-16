$(document).ready(function () {

  $("#ajax-request").on('click', function() {

  $.ajax({
  url: 'http://first-ajax-api.herokuapp.com/',
  method: 'GET',
  data: 'text'
  });
 });

 $("#ajax-request-pp").on('click', function() {

   $.ajax({
     url: 'http://first-ajax-api.herokuapp.com/pong',
     method: 'GET',
     data: 'text'
   }).done(function (responseData) {
     console.log(responseData);
     $('#step3456').append(responseData);

   }).fail(function (jqXHR, textStatus, errorThrown) {
     console.log(jqXHR, textStatus, errorThrown);
     $('#step3456').append('Could not process request: Your computer sucks, you should probably invest in a new one.');

   }).always(function() {
     console.log('Hey the request finished!');


   })

 });





});
