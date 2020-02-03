function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["numberFun"].elements.length;
        loopCounter++) {
        if (document.forms["numberFun"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["numberFun"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}

function resetForm() {
    clearErrors();
    document.forms["numberFun"]["start"].value = "";
    document.forms["numberFun"]["end"].value = "";
    document.forms["numberFun"]["step"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById('submitButton').innerText = "Submit";
    document.forms["numberFun"]["start"].focus();
}

function validateItems() {
    clearErrors();
    var start = document.forms["numberFun"]["start"].value;
    var end = document.forms["numberFun"]["end"].value;
    var step = document.forms["numberFun"]["step"].value;
    if (start == "" || isNaN(start)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["numberFun"]["start"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["start"].focus();
        return false;
    }
   if (end == "" || isNaN(end)) {
       alert("Ending Number must be filled in with a number.");
       document.forms["numberFun"]["end"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["end"].focus();
       return false;
   }
   if (step == "" || isNaN(step)) {
       alert("Step Number must be filled in with a number.");
       document.forms["numberFun"]["step"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["step"].focus();
       return false;
   }
   if (step < 0) {
       alert("Step Number must be positive");
       document.forms["numberFun"]["step"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["step"].focus();
       return false;
   }
   if (end <= start) {
       alert("The Ending Number must be greater than the Starting Number");
       document.forms["numberFun"]["end"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["end"].focus();
       return false;
   }
   document.getElementById("paragraph").style.display = "block";
   document.getElementById("paragraph").innerText = displayEvens();
   //document.getElementById("results").style.display = "block";
   //document.getElementById("submitButton").innerText = "Recalculate";
   //document.getElementById("addResult").innerText = Number(start) +
    //                                                 Number(end);
   //document.getElementById("subtractResult").innerText = start - end;
   //document.getElementById("multiplyResult").innerText = start * end;
   //document.getElementById("divideResult").innerText = start / end;
   // We are returning false so that the form doesn't submit
   // and so that we can see the results
   return false;
}

function displayEvens(){
  var start = parseInt(document.forms["numberFun"]["start"].value);
  var end = parseInt(document.forms["numberFun"]["end"].value);
  var step = parseInt(document.forms["numberFun"]["step"].value);
  var message = "Here are the even numbers from " + start + " to " + end +" by "
   + step + "'s: \n";
   for (var i = start; i < end; i=i+step) {
      if (i%2===0){
        message = message + i + "\n";
      }
  }
  return message;
}
