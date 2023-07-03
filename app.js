const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


const setReminder = require('./routes/set-reminder');
const newReminder = require('./routes/list');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', setReminder);
app.use(newReminder);

app.use(errorController.get404);

app.listen(5000);
