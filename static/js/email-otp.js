function sendOTP() {
  const email = document.getElementById('email');
  const otpverify = document.getElementsByClassName('otpverify')[0];

  let otp_val = Math.floor(Math.random() * 10000);

  let emailbody = `<h2>Your OTP is: ${otp_val}</h2>`;
  Email.send({
  SecureToken: "0eaee684-1cd9-4384-9472-ed8184dfa3de", 
  To: email.value, 
  From: "r48830968@gmail.com", 
  Subject: "Email OTP using JavaScript", 
  Body: `<h2>Your OTP is: ${otp_val}</h2>`, 
}).then(
  (message) => {
    if (message === "OK") {
      alert("OTP sent to your email: " + email.value);
    } else {
      alert("Failed to send OTP. Error: " + message);
    }
  }
);
}
