const  Mongoose  = require("mongoose");
const Schema = Mongoose.Schema;

const userSchema = new Schema ({
   username:{
        type:String,
        default:true,
        unique:true,
        required:true
        
        
    },
},{
    timestamps:true,
});
const User = Mongoose.model('User', userSchema);

module.exports = User;