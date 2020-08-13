const router = require('express').Router();
const Task = require('../models/Task');

const Clinic = require('../models/Clinic');
const User = require('../models/User');
const Booking = require('../models/Booking');
const Admin = require('../models/Admin');

const jwt = require('jsonwebtoken');
// const verify = require('./verifyToken');

router.post('/clinicDetails', async (req,res) => {

    let admin
    try{
        admin = await Admin.findOne({ auth : "admin" });
    }catch(error){
        res.status(400).send(err);
    }

    let currDoctorId = admin.doctorCount;

    let doctorId;
    if(admin.doctorCount[1] == 'Z'){
        doctorId = String.fromCharCode(admin.doctorCount.charCodeAt(0) + 1) + 'A';
    }else{
        doctorId = admin.doctorCount[0] + String.fromCharCode(admin.doctorCount.charCodeAt(1) + 1);
    }

    try{
        await admin.updateOne({ doctorCount : doctorId });
    }catch(err){
        res.status(400).send(err);
    }

    console.log(req.body.validity);

    const data = new Clinic({
        address : req.body.address,
        days : req.body.days,
        timeSlot : req.body.timeSlot,
        cash : req.body.cash,
        openTime : req.body.openTime,
        closeTime : req.body.closeTime,
        category : 'Clinic',
        name : req.body.name,
        doctorType : req.body.doctorType,
        doctorId : currDoctorId,
        validity : req.body.validity,
        email : req.body.email
    })

    console.log(data);

    try{
        const savedClinic = await data.save();
        res.send({ data : savedClinic });
    }catch(err){
        res.status(400).send(err);
    }
})

router.post('/myClinic', async (req,res) => {
    console.log(req.body.email);
    const clinic = await Clinic.findOne({ category : 'Clinic', email : req.body.email });
    res.send({ clinic : clinic });
})

router.post('/bookingByDate', async (req,res) => {
    console.log(req.body.date);
    const booking = await Booking.find({ doctorId : req.body.doctorId, appointmentDate : req.body.date });
    res.send({ booking : booking });
})

router.post('/bookingVisited', async (req,res) => {
    const booking = await Booking.findOne({ token : req.body.token });

    try{
        await booking.updateOne({ visited: true });
        res.send({ booking : booking });
    }catch(err){
        res.status(400).send(err);
    }
})

router.post('/update', async (req,res) => {

    console.log(req.body);

    // Derive _id of user from token
    let userId;
    try{
        userId = jwt.verify(req.body.userId , process.env.TOKEN_SECRET)._id;
    }catch(err){
        res.status(400).send("Invalid Token");
    }

    const { _id , status } = req.body;
    console.log( "id - " + _id );
    const task = await Task.findOne({ _id : _id });

    try{
        await task.updateOne({ status : status});
        res.send({ task : task });
    }catch(err){
        res.status(400).send(err);
    }
});

router.post('/delete', async (req,res) => {

    console.log(req.body);

    // Derive _id of user from token
    let userId;
    try{
        userId = jwt.verify(req.body.userId , process.env.TOKEN_SECRET)._id;
    }catch(err){
        res.status(400).send("Invalid Token");
    }

    const { _id } = req.body;
    console.log( "id - " + _id );

    try{
        await Task.findOneAndDelete({ _id : _id });
        res.send({ deleted : true });
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;
