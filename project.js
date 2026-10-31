// Contact Form Functionality

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "") {
        alert("Please fill all required fields");
    } 
    else {
        document.getElementById("result").innerHTML =
        "Thank you " + name + "! Your message has been submitted.";

        alert("Form Submitted Successfully!");

        document.getElementById("contactForm").reset();
    }

});