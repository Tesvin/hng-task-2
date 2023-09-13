const express = require('express');
const cors = require('cors');
require('dotenv').config();
const morgan = require('morgan');
const personDb = require('./db/personDb.js');
const router = require('./routes/personRoutes.js');


const app = express()

const port = process.env.PORT 

/** middlewares */
app.use(cors());
app.use(morgan('dev'));

// In-built middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** api routes */
app.use('/api', router)

app.get('/home', (req, res) => {
    res.send('welcome home')
})

/** start server only when we have a valid connection*/
personDb().then(() => {
    try {
        app.listen(port, () => {
            console.log(`server connected to https://localhost:${port}`)
        }) 
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log('Invalid database connection...!')
})

