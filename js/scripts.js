$(document).ready(function() {
  $("form#celeb").submit(function(event) {
    event.preventDefault();
    var gender = $("#gender").val();
    var fruit = $("#fruit").val();

    if (gender === "nogen") {
      alert("Select your gender!")
      }
      else if (fruit === "nofruit") {
        alert("Select your fruit!")
      }
        else if (gender === "male" && fruit === "banana") {
          $("#result").text("Rihanna");
          $("#resultform").show();
        } else if (gender === "male" && fruit === "apple") {
          $("#result").text("Ariana Grande");
          $("#resultform").show();
        } else if (gender === "male" && fruit === "orange") {
          $("#result").text("Constance Wu");
          $("#resultform").show();
        } else if (gender === "female" && fruit === "banana") {
          $("#result").text("Drake");
          $("#resultform").show();
        } else if (gender === "female" && fruit === "apple") {
          $("#result").text("BTS");
          $("#resultform").show();
        } else if (gender === "female" && fruit === "orange") {
          $("#result").text("Daddy Yanky");
          $("#resultform").show();
        }  else if (gender === "female" && fruit === "mango") {
          $("#result").text("Justin Timberlake");
          $("#resultform").show();
        }
  });
});
