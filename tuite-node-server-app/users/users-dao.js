import UsersModel from "./users-model.js";

let users = [];


export const findAllUsers = () => {
    return UsersModel.find();
};


export const findUserById = (_id) => {
    return UsersModel.findById(_id);
};


export const findUserByUsername = (username) => {
 return UsersModel.findOne({username: username});
 
};


export const findUserByCredentials = (username, password) => {
return UsersModel.findOne({username: username, password: password});
};


export const createUser = (user) => UsersModel.create(user);


export const updateUser = (id, user) =>
  UsersModel.updateOne({ _id: id }, { $set: user });



export const deleteUser = (uid) => {
    return UsersModel.deleteOne({_id: uid});
}

