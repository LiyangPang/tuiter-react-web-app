import Assignment3 from "./a3";
import Assignment4 from "./a4";
import {Link} from "react-router-dom";
import Nav from "../nav";

function Labs(){
    return(
        <div>
         <Nav/>
           
         <Assignment3 />
         <Assignment4 />
        </div>
     );
  
}

export default Labs;