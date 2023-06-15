import people from './users.js';
let users = people;
import * as usersDao from "./users-dao.js";


const AuthController = (app) => {

    const register = (req, res) => {
        const username = req.body.username;
        const user = usersDao.findUserByUsername(username);
        if (user) {
          res.sendStatus(409);
          return;
        }
        const newUser = {...req.body, _id: new Date().getTime().toString()};
        users.push(newUser);
        req.session["currentUser"] = newUser;
        res.json(newUser);
      };
     
const login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username && password) {
      const user = users.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        req.session["currentUser"] = user;
        res.json(user);
      } else {
        res.sendStatus(403);
      }
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
     
      const logout = async (req, res) => {
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