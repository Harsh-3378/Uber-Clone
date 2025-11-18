const dontenv = require('dotenv')
dontenv.config()
const cors = require('cors');
const express = require('express')
const app = express()
const connectToDb = require('./db/db')
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes')

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/captains', captainRoutes);

app.get('/', (req, res)=> {
    res.send('hello word')
});


module.exports = app;