import people from './users.js';
let users = people;
import * as usersDao from "./users-dao.js";


const AuthController = (app) => {

    const register = async (req, res) => {
        const username = await usersDao.findUserByUsername(req.body.username);
        if(username) {
          res.sendStatus(403);
          return;
        }
        
        const newUser = await usersDao.createUser(req.body);
        req.session["currentUser"] = newUser;
        res.json(newUser);
      };
     
const login = async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await usersDao.findUserByCredentials(username, password);
    if(user) { 
      res.json(user);
    } else {
      res.sendStatus(403);
    }
    
  };
     
    const profile = (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
          res.sendStatus(404);
          return;
        }
        res.json(currentUser);
      };
     
      const logout = (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
      };
     
 const update   = (req, res) => { };


 app.post("/api/users/register", register);
 app.post("/api/users/login",    login);
 app.post("/api/users/profile",  profile);
 app.post("/api/users/logout",   logout);
 app.put ("/api/users",          update);
};
export default AuthController;