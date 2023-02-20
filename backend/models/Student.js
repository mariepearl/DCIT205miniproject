import mongoose from "mongoose";



const StudentSchema = new mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    },
    stId:{
        type:Number,
    },
    programme:{
        type:String,
    }
}, {timestamps:true});

const Students = mongoose.model('Student', StudentSchema);


export default Students;