const {
    meowDatabyIdx,
    allMeowAssemblex,
    createMeowx,
    deleteMeowx,
    updateMeowx
} = require("./meow.controller");


const express = require('express'); //import express
const router  = express.Router(); //const router = require("express").Router(); //(sama je)
//const { checkToken } = require("../../utils/admin_token_validation");
router.post("/gab", allMeowAssemblex);
router.post("/gbid",  meowDatabyIdx);
router.post("/cb",  createMeowx);
router.post("/ub",  updateMeowx);
router.post("/db",  deleteMeowx);


const teaController = require('./meow.controller'); 
//router.post('/tea/:id', teaController.bookInfobyId); 

module.exports = router; // export to use in app.js