    // Brewer Script //

$(document).ready(function() {
  // Ad it
  $("#gogogo").click(function() {
    var newName = $("#new-name").val();
  $('#name-list').append("<li class='name'><p class='names'>" + newName + "</p><input type='button' class='destroy' value='X' /></li>");
  $("#new-name").val('');
  $('.raffleButton').slideDown('100');
  $('#new-name').focus();
  return false;
  // $('.name').hide().fadeIn(1000);
  });
  // Remove it
  $('.destroy').live('click', function() {
  $(this).parents("li.name").remove();
  });
})

function chooseBrewer(){

var brewList = $('#name-list');
var brewers = $('li');

var brewer = brewers[Math.floor(Math.random()*brewers.length)];

$("#the_brewer").html($(brewer).text() + ".").hide().fadeIn(800);

$('#brewerIs').hide().fadeIn(100);
$('#feedback').delay(500).fadeIn(400);
// document.getElementById("brewerIs").style.display = 'block';
// document.getElementById("reset").style.display = 'block';

$('html, body').animate({ 
   scrollTop: $(document).height()-$(window).height()}, 
   1400, 
   "easeOutQuint"
);

}

$('new-candidate-name').click(function() {
    chooseBrewer()}
);

// //previousBrewers = JSON.parse(localStorage['previousBrewers'] || "[]")

// //previousBrewers.push(brewer)

// //localStorage["previousBrewers"] = JSON.stringify(previousBrewers)

// document.getElementById("the_brewer").innerHTML = brewer + "."

// //document.getElementById('previous_brewers').innerHTML = 'Previous brewers were: ' + JSON.parse(localStorage["previousBrewers"])

// //return false;
// }