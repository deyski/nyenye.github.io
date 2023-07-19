
function toggle1() {
  const pageContent = document.querySelector('.Jameson');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle2() {
  const pageContent = document.querySelector('.Jamesbeam');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}
function toggle3() {
  const pageContent = document.querySelector('.Honey');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}
function toggle4() {
  const pageContent = document.querySelector('.Chivas');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle5() {
  const pageContent = document.querySelector('.Jack1');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle6() {
  const pageContent = document.querySelector('.Jack2');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle7() {
  const pageContent = document.querySelector('.Jack3');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle8() {
  const pageContent = document.querySelector('.Jack4');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle9() {
  const pageContent = document.querySelector('.Regal');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle10() {
  const pageContent = document.querySelector('.Ballantine');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle11() {
  const pageContent = document.querySelector('.JamesYap');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle12() {
  const pageContent = document.querySelector('.Ipa');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle13() {
  const pageContent = document.querySelector('.Stout');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle14() {
  const pageContent = document.querySelector('.Suntory');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle15() {
  const pageContent = document.querySelector('.Tanquery');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle16() {
  const pageContent = document.querySelector('.JimHoney');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle17() {
  const pageContent = document.querySelector('.Apple');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle18() {
  const pageContent = document.querySelector('.Bulbasor');
  const isExpanded = pageContent.classList.contains('expand-page');
  pageContent.classList.toggle('expand-page');
  if (isExpanded) {
    pageContent.style.display = "none";
  } else {
    pageContent.style.display = "block";
  }
}function toggle19() {
  const pageContent = document.querySelector('.Ayokona');
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
