import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    username: {type: String, required :true, unique :true},
    password: {type: String, required :true},
    firstName: String,
    lastName: String,
    email: String,
    role: {type:String, enum:['ADMIN', 'USER', 'FACULTY'], default:'USER'},
    dateOfBirth: Date,
    created: {type: Date, default: Date.now},
    married: Boolean,
},
{collection: 'users'}
);

export default usersSchema;