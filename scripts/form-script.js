function sendEmail() {
  let parms = {
    fullname : document.getElementById("fullname").value,
    brandname : document.getElementById("brandname").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value,

    emailjs.send("service_cmyw7dk","template_q1s95zk",parms).then(alert("Email sent!"))
  }
}
