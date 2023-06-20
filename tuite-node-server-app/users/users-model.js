import mongoose from "mongoose";
import usersSchema from "./users-schema.js";

const UsersModel = mongoose.model('users', usersSchema);

export default UsersModel;