const commonFunction = require("./commonFunction");

export default async (req, res) => {
    try {
        const reqBody = req.body;
        var mailsubject = "Contact Us";
        var attachments = null;
        var text = null;
        var toEmail = "driverlead@royalsmartlimo.com";
        var mailhtml = '<table><tr><th style="text-align:left">Name</th><th>:</th><td>' + reqBody.name + '</td></tr><tr><th style="text-align:left">Mobile Number</th><th>:</th><td>' + reqBody.number + '</td></tr><tr><th style="text-align:left">Email</th><th>:</th><td>' + reqBody.email + '</td></tr><tr><th style="text-align:left">Subject</th><th>:</th><td>' + reqBody.subject + '</td></tr><tr><th style="text-align:left">Message</th><th>:</th><td>' + reqBody.text + '</td></tr></table>'
        commonFunction.sendMail(toEmail, mailsubject, mailhtml, text, attachments);
        res.status(200).send("Email send successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error proccessing charge");
    }
};
