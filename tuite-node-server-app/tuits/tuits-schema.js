import mongoose from "mongoose";

const tuitsSchema = new mongoose.Schema({
    topic : String,
    userName : String,
    title : String,
    time : String,
    image : String,
    liked : Boolean,
    replies : Number,
    retuits : Number,
    likes : Number,
    handle : String,
    tuit : String,
    author : {type: mongoose.Schema.Types.ObjectId, ref: 'users'}
},
{collection: 'tuits'}
);

export default tuitsSchema;
