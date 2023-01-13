const nodemailer = require('nodemailer');


function sendMail(mailto, mailsubject, mailhtml, text, attachments) {
    try {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "hello@royalsmartlimousine.com",
                pass: "dmglvsaneoszpfeb",
            }
        });
        var mailOptions = {
            from: "RSL",
            to: mailto,
            subject: mailsubject,
            html: mailhtml,
            text: text,
            replyTo: "hello@royalsmartlimousine.com",
            attachments: attachments,
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    sendMail
};