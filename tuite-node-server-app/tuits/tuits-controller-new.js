
import * as tuisDao from "./tuits-dao.js";

function TuisController(app){
  const findAllTuits = async (req, res) => {
    const tuits = await tuisDao.findAllTuits();
    res.json(tuits);
  }

  const findTuitsByAuthorId = async (req, res) => {
    const author = req.params.author;
    const tuits = await tuisDao.findTuitsByAuthorId(author);
    res.json(tuits);
  }
  const createTuit = async (req, res) => {
    const currentUser = req.session["currentUser"];
    const newTuit = {...req.body, author: currentUser._id};
    const actualTuit = await tuisDao.createTuit(newTuit);
    res.json(actualTuit);
  }
  

  app.get('/api/tuits', findAllTuits);
  app.get('/api/tuits/:author', findTuitsByAuthorId);
  app.post('/api/tuits', createTuit);

}

export default TuisController;