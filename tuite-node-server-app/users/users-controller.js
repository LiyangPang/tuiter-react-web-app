import people from './users.js';
let users = people;

function UserController(app){

    const findUsers = (req, res) => {
        const type = req.query.type
        if(type) {
          const usersOfType = users
            .filter(u => u.type === type)
          res.json(usersOfType)
          return
        }
        res.json(users)
      }
      


        
    

    

const findUserById = (req, res) => {
  const userId = req.params.uid;
  const user = users
    .find(u => u._id === userId);
  res.json(user);
}

    

    const createUser = (req, res) => {
        const newUser = {...req.body, _id: new Date().getTime().toString()};
        users.push(newUser);
        res.json(users);
    }

    const deleteUser = (req, res) => {
        const id = req.params.id;
        users = users.filter((user) => user._id !== id);
        res.sendStatus(200);
    }

    const updateUser = (req, res) => {
        const id = req.params.id;
        const newUser = req.body;
        users = users.map((user) => user._id === id ? {...user,...newUser} : user);
        res.sendStatus(200);
    }


    app.get('/api/users', findUsers);
app.get('/api/users/:uid', findUserById);
app.post(   '/api/users/register', createUser);
app.delete( '/api/users/:id', deleteUser);
app.put(    '/api/users/:id', updateUser);
}

export default UserController;