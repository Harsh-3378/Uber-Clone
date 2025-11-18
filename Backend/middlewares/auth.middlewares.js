const userModel = require('../models/user.model');
const blacklistTokenModel = require('../models/blacklistToken.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.authUser = async (req, res, next) => {

    const token = req.cookies.token || req.headers.authorization?.replace('Bearer ', '');
    if(!token){
        return res.status(401).json({message: 'Access denied. No token provided.'});
    }

    const isBlacklisted = await blacklistTokenModel.findOne({token: token});
    if(isBlacklisted){
        return res.status(401).json({message: 'Unauthorized. Token is blacklisted.'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        if(!user){
            return res.status(401).json({message: 'Invalid token. User not found.'});
        }
        req.user = user;
        return next();

    } catch (errors){
        return res.status(401).json({message: 'Unauthorized'});
    }
}