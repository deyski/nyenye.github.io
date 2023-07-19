document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = parseInt(localStorage.getItem('slideIndex')) || 1; // Get the stored slide index or default to 1
  showSlides(slideIndex);

  // Next/previous controls
  document.querySelector('.prev').addEventListener('click', function() {
    plusSlides(-1);
  });

  document.querySelector('.next').addEventListener('click', function() {
    plusSlides(1);
  });

  // Thumbnail image controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides fade");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    localStorage.setItem('slideIndex', slideIndex); // Store the current slide index
  }

  // Automatic slideshow
  setInterval(function() {
    plusSlides(1);
  }, 3000); // Change slide every 3 seconds (adjust the duration as desired)

  // Call currentSlide with initial slideIndex to display the images
  currentSlide(slideIndex);
});









  //*send email footer 
  function sendMail() {
    var params = {
     
      email: document.getElementById("email").value,
    
    };
  
    const serviceID = "service_apysif4";
    const templateID = "template_j0bp1u9";
  
    emailjs.send(serviceID, templateID, params)
      .then(res => {
      
        document.getElementById("email").value = "";
        
     
        console.log(res);
        alert("Your message sent successfully!!");
      })
      .catch(err => {
        console.error("Error sending email:", err);
        alert("An error occurred while sending the email. Please try again later.");
      });
  }
 