require('dotenv').config();
const express = require('express'),
    app = express();
      
const jwt = require('jsonwebtoken'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

const port = process.env.PORT || 5000;
const authRoutes = require('./routes/auth');

const uri = `mongodb+srv://${process.env.USERDB}:${process.env.PASSWORD}@cluster0.iwfvn.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
const option = { useNewUrlParser: true, useUnifiedTopology: true };

console.log(process.env.USERDB);
console.log(process.env.PASSWORD);
console.log(process.env.DBNAME);

mongoose.connect(uri, option)
.then(() => console.log('Database conected'))
.catch(e => console.log('db error:', e));

app.listen(port, () => console.log(`Listening on port ${port}'`));

app.get('/', (req, res) => {
    res.send('Welcome!');
});


// Middlewares
app.use('/api/user', authRoutes);



// app.get('/auth', (req, res) => {
//     res.sendFile('auth.html', {root: `${__dirname}/views/`});
// })

// app.post('/login', (req, res) => {
//     if(req.body.user === "default" && req.body.pass === "defaultpass") {
//         const payload = {
//             check: true
//         }

//         const token = jwt.sign(payload, app.get('pass'), {
//             expiresIn: 1440
//         });

//         res.json({
//             message: 'Authentication completed',
//             token: token
//         });

//     } else {
//         res.json({ message: "You have the password or user not correct" })
//     }
// });

// const protectedRoutes = express.Router();

// protectedRoutes.use((req, res, next) => {
//     const token = req.headers['access-token'];

//     if(token) {
//         jwt.verify(token, app.get('pass'), (err, decoded) => {
//             if(err) {
//                 return res.json({ message: 'Token not valid' });
//             } else {
//                 req.decoded = decoded;
//                 next();
//             }
//         });
//     } else {
//         res.send({
//             message: 'Token not provided'
//         });
//     }
// });


// app.get('/data', protectedRoutes, (req, res) => {
//     const data = [
//         {id: 1, name: "default"},
//         {id: 2, name: "admin"},
//         {id: 3, name: "Javier"}
//     ];

//     res.json(data);
// });