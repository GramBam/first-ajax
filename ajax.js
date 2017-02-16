$(document).ready(function () {

  $("#ajax-request").on('click', function() {

  $.ajax({
  url: 'http://first-ajax-api.herokuapp.com/',
  method: 'GET',
  });
 });

 $("#ajax-request-pp").on('click', function() {

   $.ajax({
     url: 'http://first-ajax-api.herokuapp.com/ping',
     method: 'GET',
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

 $("#ajax-request-count").on('click', function() {

   $.ajax({
     url: 'http://first-ajax-api.herokuapp.com/count',
     method: 'GET',
   }).done(function (responseData) {
     console.log(responseData);
     $('#step7').append(responseData, ' requests!');
   });
 });

 $("#ajax-request-time").on('click', function() {

   $.ajax({
     url: 'http://first-ajax-api.herokuapp.com/time',
     method: 'GET',
     data: {timezone: "Europe/Sofia"}
   }).done(function (responseData) {
     console.log(responseData);
     $('#step8').append(responseData);
   });
 });

 $("#ajax-request-car").on('click', function() {

   $.ajax({
     url: 'http://first-ajax-api.herokuapp.com/a_car',
     method: 'GET',
     dataType: 'HTML'
   }).done(function (responseData) {
     console.log(responseData);
     $('#list').append(responseData);
   });
 });







});
