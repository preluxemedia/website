function sendEmail() {
  let parms = {
    fullname : document.querySelector("#fullname").value,
    brandname : document.querySelector("#brandname").value,
    email : document.querySelector("#email").value,
    message : document.querySelector("#message").value,

    emailjs.send("service_cmyw7dk","template_q1s95zk",parms).then(alert("Email sent!"))
  }
}
