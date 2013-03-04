    // Brewer Script //

$(document).ready(function() {
  $addButton = $('#addName');
  
  // Add it
  $("#addName").click(function() {
    if ($('#new-name').val().length == 0) {
      return false;
    }

    var newName = $("#new-name").val();
    $('#name-list').append("<li class='name'><p class='names'>" + newName + "</p><input type='button' class='destroy' value='X' /></li>");
    $("#new-name").val('');
    $('.raffleButton').delay(400).fadeIn('1000');
    $('#new-name').focus();
    $('.name').fadeIn(500);
    return false;
  });

  // Remove it
  // $('.destroy').live('click', function() {
  //   $(this).parents("li.name").remove();
  // });

$('.destroy').live('click', function() {
  $(this).parents("li.name").fadeOut(500,function() { 
    $(this).remove();
  });
});



})



function chooseBrewer(event){
  var brewList = $('#name-list');
  var brewers = $('li');

  var brewer = brewers[Math.floor(Math.random()*brewers.length)];

  $("#the_brewer").html($(brewer).text()).hide().fadeIn(1500);

  $('#brewerIs').hide().fadeIn(100);
  $('#feedback').fadeIn(400);
  $('.reset').fadeIn(400);
  // document.getElementById("brewerIs").style.display = 'block';
  // document.getElementById("reset").style.display = 'block';

  $('html, body').animate({ 
     scrollTop: $(document).height()-$(window).height()}, 
     1400, 
     "easeOutQuint"
  );
}

$('.reset').click(function() {
    location.reload();
});

// //previousBrewers = JSON.parse(localStorage['previousBrewers'] || "[]")

// //previousBrewers.push(brewer)

// //localStorage["previousBrewers"] = JSON.stringify(previousBrewers)

// document.getElementById("the_brewer").innerHTML = brewer + "."

// //document.getElementById('previous_brewers').innerHTML = 'Previous brewers were: ' + JSON.parse(localStorage["previousBrewers"])

// //return false;
// }