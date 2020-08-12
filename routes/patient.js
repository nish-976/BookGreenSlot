const router = require('express').Router();
const Task = require('../models/Task');
const Clinic = require('../models/Clinic');
const User = require('../models/User');
const Booking = require('../models/Booking');
const jwt = require('jsonwebtoken');
// const verify = require('./verifyToken');

router.get('/getAllDoctors', async (req,res) => {

    const doctors = await Clinic.find({ category : 'Clinic' });
    res.send({ Doctors : doctors });
})

router.post('/book', async (req,res) => {

    const bookingOfDay = await Booking.find({ appointmentDate : req.body.date , doctorId : req.body.doctorId });

    let tokenExt, tokenCount = bookingOfDay.length + 1;
    if(tokenCount.toString().length == 1){
        tokenExt = '00' + tokenCount;
    }else if(tokenCount.toString().length == 2){
        tokenExt = '0' + tokenCount;
    }else if(tokenCount.toString().length == 3){
        tokenExt = '' + tokenCount;
    }
    const token = req.body.token + tokenExt;

    const receipt = new Booking({
        name : req.body.name,
        age : req.body.age,
        doctorId : req.body.doctorId,
        appointmentDate : req.body.date,
        timeSlot : req.body.timeSlot,
        token : token,
        email : req.body.email,
        visited : false
    });

    console.log(receipt);

    try{
        const saveReceipt = await receipt.save();
        res.send({ receipt : receipt });
    }catch(err){
        res.status(400).send(err);
    }
});



module.exports = router;
