const { verify } = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("authorization");
        if (token) {
            token = token.slice(7);
            verify(token, process.env.SK, (err, decoded) => {
                if (err) {
                    res.status(401).json({
                        success: 0,
                        message: err.name
                    });
                } else {
                    if (decoded.result.role === "admin") {
                        next();
                    } else {
                        res.status(401).json({
                            success: 0,
                            message: "Access denied: Unauthorized user"
                        });
                    }
                }
            });
        } else {
            res.status(401).json({
                success: 0,
                message: "Access denied: Unauthorized user"
            });
        }
    }
}