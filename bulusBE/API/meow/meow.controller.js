const { meowDatabyId } = require("./meow.service");
const { allMeowAssemble } = require("./meow.service");
const { createMeow } = require("./meow.service");
const { deleteMeow } = require("./meow.service");
const { updateMeow } = require("./meow.service");
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
    }
}