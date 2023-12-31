const UserService = require('../services/user_service')

exports.register = async (req, res, next) => {
    try {

        const { email, password } = req.body
        const duplicate = await UserService.getUserByEmail(email)
        if (duplicate) {
            throw new Error(`UserName ${email}, Already Registered`)
        }
        const result = await UserService.register(email, password)
        res.json({ status: true, message: 'User registered successfully', data: result })
    } catch (e) {
        console.log("---> err -->", e);
        throw e
    }
}

exports.login = async (req, res, next) => {
    try {

        const { email, password } = req.body
        if (!email || !password) {
            throw new Error('Parameter are not correct')
        }
        let user = await UserService.checkUser(email)
        if (!user) {
            throw new Error('User does not exist');
        }

        const isPasswordCorrect = await user.comparePassword(password);
        if (isPasswordCorrect === false) {
            throw new Error(`Username or Password does not match`);
        }
        // Creating Token
        let tokenData;
        tokenData = { _id: user._id, email: user.email };

        const token = await UserService.generateAccessToken(tokenData, "secret", "1h")
        res.status(200).json({ status: true, message: "User login successfull", token: token });
    } catch (e) {
        console.log("---> err -->", e);
        throw e
    }
}