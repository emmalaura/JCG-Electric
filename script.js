document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Capture form data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Send the form data to the API Gateway endpoint
  fetch('https://your-api-id.execute-api.your-region.amazonaws.com/prod/contact', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          subject: subject,
          message: message
      })
  })
  .then(response => response.json())
  .then(data => alert("Message sent successfully"))
  .catch(error => alert("Error sending message: " + error));
});
