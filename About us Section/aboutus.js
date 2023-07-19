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