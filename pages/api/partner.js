const commonFunction = require("./commonFunction");

export default async (req, res) => {
    try {
        const reqBody = req.body;
        var mailsubject = "Become an Investor";
        var attachments = null;
        var text = null;
        var toEmail = "investor@royalsmartlimo.com";
        var mailhtml = '<table><tr><th style="text-align:left">First Name</th><th>:</th><td>' + reqBody.firstname + '</td></tr><tr><th style="text-align:left">Last Name</th><th>:</th><td>' + reqBody.lastname + '</td></tr><tr><th style="text-align:left">Mobile Number</th><th>:</th><td>' + reqBody.number + '</td></tr><tr><th style="text-align:left">Email</th><th>:</th><td>' + reqBody.email + '</td></tr><tr><th style="text-align:left">Selected Car</th><th>:</th><td>' + reqBody.selectedCar + '</td></tr><tr><th style="text-align:left">Message</th><th>:</th><td>' + reqBody.text + '</td></tr></table>'
        commonFunction.sendMail(toEmail, mailsubject, mailhtml, text, attachments);
        res.status(200).send("Email send successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error proccessing charge");
    }
};
