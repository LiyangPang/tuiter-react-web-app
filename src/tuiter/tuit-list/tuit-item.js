import React from "react";
import {useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons' ;
import { faCheckSquare, faComment,faHeart,faRetweet,faUpload } from '@fortawesome/fontawesome-free-solid'
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../services/tuits-thunks";

const TuitItem = (
 {tuit}
) => {
  const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
  dispatch(deleteTuitThunk(id));
}

 return(
  <li className="list-group-item">
   <div className="row">
   <div className="col-2">
       <img width={70} className="float-start rounded-3" src={`/images/${tuit.image}`}/>
     </div>
     <div className="col-10">
       <div>
       <button className=" btn btn-danger float-end mt-1 ps-1 pe-1 fw-bold"
                 onClick={() => deleteTuitHandler(tuit._id)}>
           delete
         </button>
         <span className="fw-bolder">{tuit.userName}</span> <span style={{color: 'blue'}}><FontAwesomeIcon icon={faCheckSquare} /></span> <span style={{color : "grey"}}>{tuit.handle} - {tuit.time}</span></div>
       
       <div>{tuit.tuit}</div>
       
       <div>
       <TuitStats
           tuit = {tuit} />

    
    <div className="row">
   <div className="col-3">
   <FontAwesomeIcon icon={faComment} />{tuit.replies}
   </div>
   <div className="col-3">
   <FontAwesomeIcon icon={faRetweet} />{tuit.retuits}
   </div>
   <div className="col-3">
   <FontAwesomeIcon style={{color: 'red'}} icon={faHeart} />{tuit.likes}
   </div>
   <div className="col-3">
   <FontAwesomeIcon icon={faUpload} />
   </div>
   </div>
</div>
     </div>

   </div>
  </li>
 );
};
export default TuitItem;