import tuitsModel from "./tuits-model.js";


export const findAllTuits = () => {
    return tuitsModel.find();
};

export const findTuitByAuthorId = (author) => {
    return tuitsModel.findById(author);
}


