require("dotenv").config();
//const app = require('express')();
const express = require('express');
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const rateLimit = require("express-rate-limit");
const meowRouter = require("./api/meow/meow.router");
const authRouter = require("./api/authentication/login.router");
app.use(express.json());


const whitelist = ['http://localhost:4200', 'https://bulus.com', 'http://bulus.com'];
const corsOptions = {
  credentials: true, // This is important.
  origin: (origin, callback) => {
    //console.log(callback);
    if(whitelist.includes(origin))
      return callback(null, true)
      callback(new Error('Not allowed by CORS'));
  }
}

app.use(cors()); 
// ***********************************************
// Express Rate Limit to prevent Brute Force Attack & DDoS
const limiter = rateLimit({
    windowMs: 7 * 60 * 700, // 7 minutes
    max: 300, // Limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP. Please try again"
});
const loginApiLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 2
});
// ***********************************************

// Apply to all API
app.use(limiter);
app.use(helmet()); 
// APIs
app.use("/api/auth", authRouter);
app.use("/api/bulus", meowRouter);
app.use('/api', meowRouter); //to use the routes
// APIs with specific limiter
app.use("/api/auth/login", loginApiLimiter);

const server = app.listen(process.env.APP_PORT, ()=> {
    console.log("Server bulus is up and running.");
});

const options = {
    cors:true,
    origin:['http://localhost:4200'],
}


let socket = require('socket.io')(server);
// On every Client Connection
socket.on('connection', socket => {
    console.log( socket.client.conn.server.clientsCount + " users connected" );
});

function getSocketIo(){
    return socket;
}
module.exports.getSocketIo = getSocketIo; 

app.get('/tshirt', (req, res)=> {
    res.status(200).send({
        tshirt: '👕',
        size: 'large'
    })
} ); 