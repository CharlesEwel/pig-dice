/*This file is for your custom js.  All yours*/

// Calls input from form-input.html

$(document).ready(function(){
  $("button#roll-the-dice").click(function(){
    $(".roll-result").text(Math.floor(6*Math.random())+1);
  });
});
