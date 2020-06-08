
function validate() {

  var form = document.signup;
  var isValid = true;

  if(form.email.value == "") {
    document.getElementById("emailErrorMsg").textContent = "Email Address cannot be empty";
  }
  else if(!isValidEmail(form.email.value)) {
    document.getElementById("emailErrorMsg").textContent = "Looks like this is not an email";
    form.email.classList.add("error");
    isValid = false;

    form.email.addEventListener("focus", removeError, false);
  }


  var els = form.getElementsByTagName("input");

  for(var i = 0; i < 4; i++) {

    if(els[i].value == "") {
      els[i].classList.add("error");
      els[i].placeholder = "";
      isValid = false;

      els[i].addEventListener("focus", removeError, false);
    }
  }

  return isValid;
}


function isValidEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");

  if(atPos >= 1 && ( (atPos + 1) < dotPos && (dotPos + 2) < email.length ) ) {
    return true;
  }
  else {
    return false;
  }
}


function removeError(event) {
  var el = event.target;
  el.placeholder = el.getAttribute("title");
  el.classList.remove("error");
  el.removeEventListener("focus", removeError);
}
