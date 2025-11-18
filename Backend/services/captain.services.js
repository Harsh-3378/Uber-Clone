const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    firstname,
    lastname,
    email,
    password,
    vehicleType,
    color,
    plate,
    capacity
}) => {

    if(!firstname || !lastname || !email || !password || !vehicleType || !color || !plate || !capacity) {
        throw new Error('All fields are required to create a captain');
    }

    const captain = await captainModel.create({
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        color,
        plate,
        capacity,
        vehicleType,
      },
    });
    return captain;
}