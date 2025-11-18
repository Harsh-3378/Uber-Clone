const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.services');
const {validationResult} = require('express-validator');

module.exports.registerCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {fullname, email, password, vehicle} = req.body;

    const isCaptainAlreadyExists = await captainModel.findOne({email});
    if (isCaptainAlreadyExists) {
        return res.status(400).json({error: 'Captain with this email already exists'});
    }

    const hashPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword,
        vehicleType: vehicle.vehicleType,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
    });

    const token = captain.generateAuthToken();

    res.Cookie('token', token)
    res.status(201).json({token, captain});
}

