const { meowDatabyId } = require("./meow.service");
const { allMeowAssemble } = require("./meow.service");
const { createMeow } = require("./meow.service");
const { deleteMeow } = require("./meow.service");
const { updateMeow } = require("./meow.service");
const { getUserLogin } = require("./meow.service");
const { verify, sign } = require("jsonwebtoken");
require("dotenv").config();

//const encryptor = require("../../utils/encryptor");
//const { compareSync } = require("bcrypt");

module.exports = {
    meowDatabyIdx: (req, res) => {
        console.log("bulus masuk");
        //const decryptedIdx = encryptor.decrypt(req.body.meowid); //sangkut kat sini, mungkin ada guna kat FE
        //meowDatabyId(decryptedIdx, (err, results) => { 
        meowDatabyId(req.body.meowid, (err, results) => { 
            if(results) { 
                console.log('bulat berjaya jadi pakar ekonomi'); 
                return res.status(200).json({
                    success: 1,
                    data: results
                }); 
            }
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: err
                });
            }
        }) 
    },
    //get-all-meow
    allMeowAssemblex: (req, res) => {
        console.log("bulus masuk");
        allMeowAssemble((err, results) => { 
            
            if(results) { 
                console.log('bulat berjaya jadi pakar ekonomi mentankap balalam'); 
                return res.status(200).json({
                    success: 1,
                    data: results
                }); 
            }

            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: err
                });
            }
        }) 
    }, 
    //simple way get-all-book retrieve-book
    semuainfobuku3: (req, res) => {
        getAllBooks3((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        })
    },
    //create-meow
    createMeowx: (req, res) => {
        createMeow(req.body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: err
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },
    //update-book
    updateMeowx: (req, res) => {
        updateMeow(req.body.meowid2u, req.body.meowname2u,req.body.hobi2u,  (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: err
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },
    //delete-book
    deleteMeowx: (req, res) => {
        deleteMeow(req.body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: err
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },

    /* ************** USERS SECTION ***************** * /
    userLogin: (req, res) => {
        //const decryptedIdx = encryptor.decrypt(req.body.meowid); //sangkut kat sini, mungkin ada guna kat FE
        //meowDatabyId(decryptedIdx, (err, results) => { 
            getUserLogin(req.body.userid,req.body.passwrd, (err, results) => { 
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: err
                });
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Invalid username or password"
                })
            }
            if(results) { 
                const jsonToken = sign({ result: results }, process.env.SK, {
                    expiresIn: "1h"
                });

                // return res.status(200).json({
                //     success: 1,
                //     data: results
                // }); 

                return res.status(200).json({
                    success: 1,
                    message: "Login of Boo Loose success!",
                    token: jsonToken,
                    userid: results.userid,
                    firstname: results.firstname,
                    role: "user"
                });


            }
        }) 
    }, // */ //dah pindah ke authentication folder
}