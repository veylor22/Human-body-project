function formValidation() {
  var isValid = true;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var checkbox = document.getElementById("checkbox");

  if (name === "") {
    document.getElementById("name-error").style.display = "inline";
    document.getElementById("name").style.backgroundColor =
      "rgba(255, 0, 0, 0.3)";
    isValid = false;
  } else {
    document.getElementById("name-error").style.display = "none";
    document.getElementById("name").style.backgroundColor =
      "rgba(0, 255, 0, 0.3)";
  }

  if (email === "") {
    document.getElementById("email-error").style.display = "inline";
    document.getElementById("email").style.backgroundColor =
      "rgba(255, 0, 0, 0.3)";
    isValid = false;
  } else {
    document.getElementById("email-error").style.display = "none";
    document.getElementById("email").style.backgroundColor =
      "rgba(0, 255, 0, 0.3)";
  }

  if (message === "") {
    document.getElementById("message-error").style.display = "inline";
    document.getElementById("message").style.backgroundColor =
      "rgba(255, 0, 0, 0.3)";
    isValid = false;
  } else {
    document.getElementById("message-error").style.display = "none";
    document.getElementById("message").style.backgroundColor =
      "rgba(0, 255, 0, 0.3)";
  }

  if (!checkbox.checked) {
    document.getElementById("checkbox-error").style.display = "inline";
    document.getElementById("checkbox").style.backgroundColor =
      "rgba(255, 0, 0, 0.3)";
    isValid = false;
  } else {
    document.getElementById("checkbox-error").style.display = "none";
    document.getElementById("checkbox").style.backgroundColor =
      "rgba(0, 255, 0, 0.3)";
  }

  if (isValid) {
    localStorage.testimonialName = name;
    localStorage.testimonialEmail = email;
    localStorage.testimonialMessage = message;
    alert("Thank you, " + name + "! Your message has been saved successfully.");
    document.getElementById("greeting").style.display = "inline";
    document.getElementById("name").style.backgroundColor = "";
    document.getElementById("email").style.backgroundColor = "";
    document.getElementById("message").style.backgroundColor = "";
    document.getElementById("checkbox").style.backgroundColor = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("checkbox").checked = false;
  } else {
    document.getElementById("greeting").style.display = "none";
  }
  return isValid;
}
