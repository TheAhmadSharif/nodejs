var nodemailer = require('nodemailer');



var transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 25,
  secure: false, // upgrade later with STARTTLS
  tls: {
          rejectUnauthorized: false
      },
  auth: {
    user: "theahmadsharif@gmail.com",
    pass: "onetwo34.;"
  }
});


var mailOptions = {
  from: 'theahmadsharif@gmail.com',
  to: 'theahmadsharif@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
