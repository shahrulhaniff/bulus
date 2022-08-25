require("dotenv").config();
const encryptor = require("simple-encryptor")(process.env.ENC_SK);

module.exports = {
    encrypt: (data) => {
        const encrypted = encryptor.encrypt(data);
        return encrypted;
    },
    decrypt: (data) => {
        const decrypted = encryptor.decrypt(data);
        return decrypted;
    }
};