const express = require ('express');
const bodyParser = require ('body-parser');
// const exphbs = require ('express-handlebars');
const nodemailer = require ('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

// app.engine ('handlebars', exphbs);
// app.set ('view engine', 'handlebars');

app.use (bodyParser.urlencoded({extended:true}));
app.use (bodyParser.json());

app.get ('/home', (req, res) => {
    res.sendFile (__dirname + '/index.html');
})

app.post ('/emailsent', async (req, res) => {
    try {
        const data = req.body.email;
        console.log(data);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'norkafsdb2@gmail.com',
                pass: 'Norka@123'
            }
            
        });
        
        const mailOption = {
            from: 'norkafsdb2@gmail.com',
            to: data,
            subject: 'Wlecome Message',
            text: 'You are successfully logged in as-part of coding challenge...'
        };
        transporter.sendMail (mailOption, (error, data) => {
            if (error) {
                console.log (error);
                res.send ('Something went wrong...');
            } else {
                console.log ('Mail sent successfully...');
                res.send ('Mail sent successfully...');
            }
        });

    }
    catch (error) {
        console.log ('Something went wrong...', (error));
    }
});

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'norkafsdb2@gmail.com',
//         pass: 'Norka@123'
//     }
// });

// const mailOption = {
//     from: 'norkafsdb2@gmail.com',
//     to: req.body.email,
//     subject: 'Wlecome Message',
//     text: 'You are successfully logged in.'
// };



app.listen(port, () => console.log ('Server started...'));