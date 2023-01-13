const commonFunction = require("./commonFunction");

export default async (req, res) => {
    try {
        const reqBody = req.body;
        var mailsubject = "Become a Driver";
        var attachments = null;
        var text = null;
        var toEmail = "driverlead@royalsmartlimo.com";
        var mailhtml = '<table><tr><th style="text-align:left">First Name</th><th>:</th><td>' + reqBody.firstname + '</td></tr><tr><th style="text-align:left">Last Name</th><th>:</th><td>' + reqBody.lastname + '</td></tr><tr><th style="text-align:left">Email</th><th>:</th><td>' + reqBody.email + '</td></tr><tr><th style="text-align:left">Mobile Number</th><th>:</th><td>' + reqBody.number + '</td></tr><tr><th style="text-align:left">Address</th><th>:</th><td>' + reqBody.address + '</td></tr><tr><th style="text-align:left">Driver License Issue Date</th><th>:</th><td>' + reqBody.driverLicenseIssueDate + '</td></tr><tr><th style="text-align:left">Rta Card Number</th><th>:</th><td>' + reqBody.rtaCardNumber + '</td></tr><tr><th style="text-align:left">Rta Card Expiry</th><th>:</th><td>' + reqBody.rtaCardExpiry + '</td></tr><tr><th style="text-align:left">Upload Resume</th><th>:</th><td>' + reqBody.uploadResume + '</td></tr></table>'
        commonFunction.sendMail(toEmail, mailsubject, mailhtml, text, attachments);
        res.status(200).send("Email send successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error proccessing charge");
    }
};
