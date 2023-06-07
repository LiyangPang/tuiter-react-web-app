import React from "react";
import {useSelector} from "react-redux";



const TuitStats = (tuit) => {
    const { tuits } = useSelector(state => state.tuits)
    return(<h3>{tuits.replies}</h3>);
    
   };
   export default TuitStats;
   