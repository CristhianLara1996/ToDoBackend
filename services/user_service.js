const UserModel = require('../models/user_model')
const jwt = require("jsonwebtoken");

class UserService {

    static async register(email, password) {
        try {
            const user = new UserModel({ email, password })
            return await user.save()
        } catch (e) {
            throw e
        }
    }


    static async getUserByEmail(email) {
        try {
            return await UserModel.findOne({ email })
        } catch (e) {
            console.log(e)
        }
    }

    static async checkUser(email) {
        try {
            return await UserModel.findOne({ email });
        } catch (e) {
            throw e;
        }
    }

    static async generateAccessToken(tokenData, JWTSecret_Key, JWT_EXPIRE) {
        return jwt.sign(tokenData, JWTSecret_Key, { expiresIn: JWT_EXPIRE });
    }
}

module.exports = UserService