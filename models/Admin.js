const mongoose = require('mongoose');

 const adminSchema = new mongoose.Schema({
    doctorCount : {
        type : String,
        required: true,
    },
    userCount : {
        type : String,
        required: true,
    },
    paymentCount : {
        type : String,
        required: true,
    },
    totalBookingCount : {
        type : String,
        required: true,
    },
    fee: {
        type : String,
        required: true,
    },
    auth : {
        type : String,
        required: true,
    }
 });

 module.exports = mongoose.model('Admin' , adminSchema);
