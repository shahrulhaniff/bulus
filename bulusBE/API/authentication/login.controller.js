const { getUserLogin } = require("./login.service");
const { verify, sign } = require("jsonwebtoken");
require("dotenv").config();

//const encryptor = require("../../utils/encryptor");
//const { compareSync } = require("bcrypt");

module.exports = {
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
    },
}