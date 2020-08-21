const express = require('express'),
      cors = require('cors'),
      port = process.env.PORT || 4000,
      nodemailer = require('nodemailer'),
      path = require('path'),
      app = express();
      
;

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use('/portfolio-1', express.static(path.join(__dirname, 'portfolio-1')));

app.post('/send', (req, res) => {
  const message = `
    <h4>You have a new contact request</h4>
    <br/>
    <h3>Details: </h3>
    <h4>Name: ${req.body.name} </h4>
    <h4>Email: ${req.body.email} </h4>
    <h4>Company: ${req.body.company} </h4>
    <h5>Message: ${req.body.message} </h5>
   
  `;

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    },
    tls:{
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL2,
    subject: 'Contact request from Portfolio',
    text: 'New Message',
    html: message,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if(err){
      return console.log(err);
    }
    console.log('Message sent');
  });

});

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('portfolio-1/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'portfolio-1', 'build', 'index.html'))
  })
};

app.listen(port, () => {
  console.log(`Server running on ${port}`)
});