const pool = require("../../config/database");
const { encrypt } = require("../../utils/encryptor");

module.exports = {

    getUserLogin: (userid,passwrd, callBack) => {
        pool.query(
            "SELECT * FROM users WHERE userid = '" + userid + "' AND passwrd ='" + passwrd + "' ",
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                //console.log(results[0]);
                return callBack(null, results[0]); //will send null if data no exist
            }
        );
    },
    getUserLogin2: (userid,passwrd,callBack) => {
        pool.query(
         "SELECT * FROM users where userid = ? AND passwrd = ? ",
         [userid,passwrd],
        (error, results, fields) => {
        if (error) {
            return callBack(error);
          }
        else {
            //if(results[0] == undefined){ results[0]='NO'; }
            return callBack( null,results); }
        } 
        );
    }
};