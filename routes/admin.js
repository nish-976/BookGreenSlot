const router = require('express').Router();
const Task = require('../models/Task');

const Clinic = require('../models/Clinic');
const User = require('../models/User');
const Booking = require('../models/Booking');
const Admin = require('../models/Admin');

const jwt = require('jsonwebtoken');
// const verify = require('./verifyToken');

router.get('/initialise', async (req,res) => {

    const data = new Admin({
        doctorCount : 'AA',
        userCount : 0,
        paymentCount : 0,
        totalBookingCount : 0,
        auth : "admin"
    })

    console.log(data);

    try{
        const savedAdmin = await data.save();
        res.send({ data : data });
    }catch(err){
        res.status(400).send(err);
    }
})

module.exports = router;
