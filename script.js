<script src="https://smtpjs.com/v3/smtp.js"></script>
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let subject = document.getElementById('subject').value;
        let message = document.getElementById('message').value;

        // Sending email using SMTP.js
        Email.send({
            SecureToken: "704D0CB51F8964506A3AA1E3251F5D63C029E5C9EE94E27F235F564D58B8B413396BFCAD74406A48CCA6AD8012026E88",
            To: 'jcgelectricservices@gmail.com',
            From: email,
            Subject: subject,
            Body: `Name: ${name} <br/> Email: ${email} <br/> Phone: ${phone} <br/> Subject: ${subject} <br/> Message: ${message}`
        }).then(
            response => alert("Mail sent successfully")
        ).catch(
            error => alert("Failed to send email: " + error)
        );
    });
