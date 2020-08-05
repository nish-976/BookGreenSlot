const mongoose = require('mongoose');

 const clinicSchema = new mongoose.Schema({
    address : {
        type : String,
        required: true,
    },
    days : {
        type : String,
        required : true,
    },
    timeSlot : {
        type : String,
        required : true,
    },
    cash : {
        type : String,
        required : true,
    },
    openTime : {
        type : String,
        required : true,
    },
    closeTime : {
        type : String,
        required : true,
    },
    category : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
 });

 module.exports = mongoose.model('Clinic' , clinicSchema);