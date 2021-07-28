var emails_fmt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var el = document.getElementById("email");

const clr = () => {
  el.value = "";
};

const validate = () => {
  event.preventDefault();
  if (el.value === "" || !el.value.match(emails_fmt)) {
    el.parentElement.classList.add("error");
    document.getElementById("error-icon").style.display = "inline";
    document.getElementById("errLabel").style.display = "inline";
  } else {
    if (el.parentElement.classList.contains("error")) {
      el.parentElement.classList.remove("error");
      document.getElementById("error-icon").style.display = "none";
      document.getElementById("errLabel").style.display = "none";
    }
    el.value = "";
    alert("Form Submitted successfully!!!");
  }
};
