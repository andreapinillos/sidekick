const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
var nodemailer = require("nodemailer")

var smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'sidekick.noreply@gmail.com',
        pass: 'sidekick123'
    },
    tls: {rejectUnauthorized: false},
    debug:true
});

// API Routes
router.use("/api", apiRoutes);


//send email route
router.route("/send")
	.get(function(req, res) {
		console.log("you are in get on the server email is " + req)
		var mailOptions={
			to : "almira1612@gmail.com",
			from : "receiver@sender.com",
			subject : "You have a connection on Sidekick!",
			html : "<h3>Message: </h3>" + req.query.text + "<h2>User profile</h2><br><h2>user email:</h2><p>receiver@test.com</p>"
		}
		console.log(mailOptions);
		smtpTransport.sendMail(mailOptions, function(error, response){
			if(error){
				console.log(error);
				res.end("error");
			}
			else{
				console.log("Message sent: " + response.message);
				res.end("sent");
			}
		});
	});


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
