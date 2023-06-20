import people from './users.js';
import * as usersDao from "./users-dao.js";
let users = people;

function UserController(app){

    const findUsers = async (req, res) => {
        const username = req.query.username;
        const password = req.query.password;

        if(username && password) {
          const user = await usersDao.findUserByCredentials(username, password);
          if(user) { 
            res.json(user);
          } else {
            res.sendStatus(403);
          }
        

        }else if(username) {
          const user = await usersDao.findUserByUsername(username);
          if(user) {
            res.json(user);
          } else {
            res.sendStatus(404);
          }
        }
        else{
          const users =  await usersDao.findAllUsers();
          res.json(users)
        }
          

      }
      


        
    

    

const findUserById = async (req, res) => {
        const id = req.params.uid;
        const user = await usersDao.findUserById(id);
        res.json(user);
}

    

    const createUser = (req, res) => {
        const newUser = {...req.body, _id: new Date().getTime().toString()};
        users.push(newUser);
        res.json(users);
    }

    const deleteUser = async(req, res) => {
        const id = req.params.id;
        await usersDao.deleteUser(req.params.id);
        res.sendStatus(200);
    }

    const updateUser = async(req, res) => {
      const id = req.params.id;
      const status = await usersDao.updateUser(id, req.body);
      const user = await usersDao.findUserById(id);
      req.session["currentUser"] = user;
      res.json(status);
    
    }







    app.get('/api/users', findUsers);
app.get('/api/users/:uid', findUserById);
app.post(   '/api/users/create', createUser);
app.delete( '/api/users/:id', deleteUser);
app.put(    '/api/users/:id', updateUser);

}

export default UserController;