function toggle1() {
  const pageContent = document.querySelector('.premiumsweetenedwine');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle2() {
  const pageContent = document.querySelector('.Martini');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle3() {
  const pageContent = document.querySelector('.Chardonnay');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle4() {
  const pageContent = document.querySelector('.Chardolin');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}
/*Redwines togle*/
function toggle5() {
  const pageContent = document.querySelector('.Renebarbier');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle6() {
  const pageContent = document.querySelector('.Fortunella');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle7() {
  const pageContent = document.querySelector('.Echofalls');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle8() {
  const pageContent = document.querySelector('.Barefoot');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}
/*White wines*/
function toggle9() {
  const pageContent = document.querySelector('.Yellowtall');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle10() {
  const pageContent = document.querySelector('.Jacobs');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle11() {
  const pageContent = document.querySelector('.Char');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle12() {
  const pageContent = document.querySelector('.Hardy');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}
/*Champagne*/
function toggle13() {
  const pageContent = document.querySelector('.Eagle');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle14() {
  const pageContent = document.querySelector('.Sparkle');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle15() {
  const pageContent = document.querySelector('.Blue');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}
/*Roswe Wine*/
function toggle16() {
  const pageContent = document.querySelector('.Witbiere');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle17() {
  const pageContent = document.querySelector('.Santa');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle18() {
  const pageContent = document.querySelector('.Condotee');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle19() {
  const pageContent = document.querySelector('.Gossips');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}








function remove(id) {
  const pageContent = document.querySelector('#' + id);
  pageContent.style.display = "none";
}





/*footer*/
function sendMail() {
  var params = {
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    websitename: document.getElementById("websitename").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_apysif4";
  const templateID = "template_j0bp1u9";  

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("firstname").value = "";
      document.getElementById("lastname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("websitename").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your email was sent successfully!!");
    })
    .catch(err => {
      console.error("Error sending email:", err);
      alert("An error occurred while sending the email. Please try again later.");
    });
}


/*order*/
function sendOrder() {
  var params = {
    name: document.getElementById("firstname").value,
    address: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    number: document.getElementById("websitename").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_apysif4";
  const templateID = "template_8piqffb";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("firstname").value = "";
      document.getElementById("lastname").value = "";
      document.getElementById("email").value = "";
      document.getElementById("websitename").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your order was sent successfully!!");
    })
    .catch(err => {
      console.error("Error sending email:", err);
      alert("An error occurred while sending the email. Please try again later.");
    });
}
