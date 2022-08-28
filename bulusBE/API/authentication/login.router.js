const {
    userLogin
} = require("./login.controller");


const express = require('express'); //import express
const router  = express.Router(); //const router = require("express").Router(); //(sama je)


//userlogin
router.post("/buluslogin",  userLogin);


module.exports = router; // export to use in app.js