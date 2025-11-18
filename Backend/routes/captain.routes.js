const express = require('express');
const router = express.Router();
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middlewares');
const {body} = require('express-validator');
const { authCaptain } = require('../middlewares/auth.middlewares');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid email address'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').isLength({min: 3}).withMessage('Last name must be at least 3 characters long'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('Vehicle color must be at least 3 characters long'),
    body('vehicle.plate').isLength({min: 3}).withMessage('Vehicle plate number must be at least 3 characters long'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('Vehicle capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['motorcycle', 'car', 'auto']).withMessage('Vehicle type must be one of motorcycle, car, or auto'),
], captainController.registerCaptain);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
], captainController.loginCaptain);

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;