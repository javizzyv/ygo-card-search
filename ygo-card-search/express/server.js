// require('dotenv').config();
const express = require('express'),
  app = express();

const bodyParser = require('body-parser'),
  mongoose = require('mongoose');

const port = process.env.PORT || 5000;
const authRoutes = require('./routes/auth');
const validToken = require('./routes/validate-token');
const admin = require('./routes/admin');
const cors = require('cors');
let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const dbData = {
  USER: 'default',
  PASSWORD: 'default',
  DBNAME: 'apiYGO'
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const uri = `mongodb+srv://${dbData.USER}:${dbData.PASSWORD}@cluster0.iwfvn.mongodb.net/${dbData.DBNAME}?retryWrites=true&w=majority`;

const option = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(uri, option)
  .then(() => console.log('Database conected'))
  .catch((e) => console.log('db error:', e));

app.listen(port, () => console.log(`Listening on port ${port}`));

// Middlewares
app.use('/api/user', authRoutes);
app.use('/api/admin', validToken, admin);
app.use('/api/cards', require('./routes/cards'));
app.use('/api/users', require('./routes/users'));
app.use('/api/card', require('./routes/card'));
// app.use('/api/card/:id', require('./routes/card'));

// App

app.get('/', (req, res) => {
  res.send('Welcome!');
});
