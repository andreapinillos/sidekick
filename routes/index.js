const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const db = require("../models");

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

var mailOptions = {
	to: "",
	from: "",
	subject : "You have a connection on Sidekick!",
	html : ""			
}

function sendSMTP(){
	console.log(mailOptions);
	smtpTransport.sendMail(mailOptions, function(error, response){
		if(error){
			console.log(error);
			res.end("error");
		}
		else{
			console.log("Message sent: " + JSON.stringify(response));
			response.end("sent");
		}
	});
}

// API Routes
router.use("/api", apiRoutes);


//send email route
router.route("/send")
	.post(function(req, res) {
		console.log("req.body.id is " + req.body.idrecip + " sender email " + req.body.senderemail);		
		mailOptions.from = req.body.senderemail;
		var emailrecip = ""
		
		db.Sidekick_model.findById(req.body.idrecip, function(err, user){
			mailOptions.to = user.email
			mailOptions.html = ("Hello " + user.name + ". someone is trying to reach you about " + user.activity + " in " + user.zipcode + "! You can reach them at " + user.email + ".")
		})
		.then(sendSMTP);

	});


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
