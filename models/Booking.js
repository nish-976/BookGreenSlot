const mongoose = require('mongoose');

 const bookingSchema = new mongoose.Schema({
    token : {
        type : String,
        required: true,
    },
    name : {
        type : String,
        required: true,
    },
    age : {
        type : String,
        required: true,
    },
    doctorId : {
        type : String,
        required: true,
    },
    appointmentDate : {
        type : String,
        required: true,
    },
    timeSlot : {
        type : String,
        required: true,
    },
    email : {
        type : String,
        required: true,
    },
    visited: {
        type : String,
        required : true,
    },
    date : {
        type : Date,
        default : Date.now
    }
 });

 module.exports = mongoose.model('Booking' , bookingSchema);
