const pool = require("../../config/database");
const { encrypt } = require("../../utils/encryptor");

module.exports = {

    allMeowAssemble: callBack => {
        pool.query(
            "SELECT * FROM meows",
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    meowDatabyId: (bulusid, callBack) => {
        pool.query(
         "SELECT * FROM meows where meowid = ? ",
        [bulusid],
        (error, results, fields) => {
        if (error) {
            console.log('bulus gomo molla', error); 
            return callBack(error);
          }
        else {
            if(results[0] == undefined){ results[0]='buku '+[bulusid]+' xde'; }
            console.log('bookid = ',  bulusid,'result = ',  results[0].title); 
            return callBack( null,results[0]); }
        } 
        );
    }, 
    getUsers: callBack => {
        pool.query(
            "SELECT * FROM meows",
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserByUserId: (accountid, callBack) => {
        pool.query(
            "SELECT * FROM users WHERE accountid = ?",
            [accountid],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    createMeow: (data, callBack) => {
        pool.query(
            "INSERT INTO meows(meowname, hobi) VALUES(?, ?)",
            [data.meowname, data.hobi],
            (error, res, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, "Succcessfully add a Meow.");
            }
        );
    },
    
    updateMeow: (meowid2u,meowname2u,hobi2u, callBack) => {
        pool.query(
            "UPDATE meows SET meowname ='" + meowname2u + "', hobi = '" + hobi2u + "' WHERE meowid = '" + meowid2u + "'",
            (error, res, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, "Succcessfully updated the data of geng bulus.");
            }
        );
    },
    deleteMeow: (data, callBack) => {
        pool.query(
            "DELETE FROM meows WHERE meowid = ?",
            [data.meowid],
            (error, res, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, "Succcessfully deleted meow "+ data.meowid);
            }
        );
    }
};