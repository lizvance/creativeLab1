$(document).ready(function(){
  $("#submit_donation").on('click', function(event){
    event.preventDefault();
 
    var donateAmount = $("#donateInputAmount").val();

    if(donateAmount != ""){
      var message = "<div class='alert alert-success alert-dismissible' role='alert'>";
      message += "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>";
      message += "<span aria-hidden='true'>&times;</span></button>";
      message += "<strong>Thank you!</strong> Big Brother has sequestered " + donateAmount + " dollars from your account.";
      message += "</div>";
      $("#donate").append(message);
    } else {
      var message = "<div class='alert alert-danger alert-dismissible' role='alert'>";
      message += "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>";
      message += "<span aria-hidden='true'>&times;</span></button>";
      message += "<strong>Uh Oh!</strong> You didn't specify an amount to donate.";
      message += "</div>";
      $("#donate").append(message);
    }
    $("#donateInputAmount").val(""); 
  });
});
