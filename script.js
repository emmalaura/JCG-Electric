<script src="https://smtpjs.com/v3/smtp.js"></script>

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value}<br> Phone Number: ${phone.value} <br> Message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jcgelectricservices@gmail.com",
        Password : "CCB5B17ECEB68F097832CE8C599C91ED2BE5",
        To : 'jcgelectricservices@gmail.com',
        From : "you@isp.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});


// Add this JavaScript code to toggle the menu
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
