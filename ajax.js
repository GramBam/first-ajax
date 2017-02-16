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
     url: 'http://first-ajax-api.herokuapp.com/ping',
     method: 'GET',
     data: 'text'
   }).done(function (responseData) {
     console.log(responseData);
     $('section').append(responseData);

   });
 });





});
