const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: {type:String, required:true,default:true },
    description:{type: String, required: true,default:true },
    duration:{type: Number, required: true,default:true },
    date:{type: Date, required: true,default:true },
},{
    timestamp:true,
})

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;