import { google } from "googleapis"
import nodemailer from "nodemailer"

 async function sendEmail(req, res){
    try {
    console.log(req.body.subject);

    const OAuth2 = google.auth.OAuth2;
    const OAuth2Client = new OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        'https://developers.google.com/oauthplayground',
    );

    OAuth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN
    });;

    const tokens = await OAuth2Client.refreshAccessToken();
    const accessToken = tokens.credentials.access_token;

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.EMAIL,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken,
        }
    });

    const mailRes = await transport.sendMail({
        from: req.body.email,
        to: 'whiptixtechnologies@gmail.com',
        subject: req.body.subject,
        text: 'name: '+ req.body.message+'Message: '+ req.body.message,
    });

    console.log(mailRes);
}catch(error){
    console.log(error);
    return res.status(error.statusCode || 500).json({error: error.message});
}
return res.status(200).json({error: ""});
}


export default sendEmail;