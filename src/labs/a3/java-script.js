import IfElse from "./if-else";
import TernaryOperator from "./ternary-operator";
import esf from "./es5-functions";
import WorkingWithFuction from "./WorkingWithFunctions";
import MapFunctions from "./map-function";
import WorkingWithArrays from "./WorkingWithArrays";
import TemplateLiterals from "./TemplateLiterals";
import House from "./house";
import Spread from "./spread";
import Destructing from "./destructing";
import FunctionDestructing from "./function-destructing";
import VariablesAndConstants from "./variables-and-constants";
import VariableTypes from "./variable-types";


function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariableTypes/>
          <IfElse/>
          <TernaryOperator/>
          <WorkingWithFuction/>
          <WorkingWithArrays/>
          <MapFunctions/>
          <TemplateLiterals/>
          <House/>
          <Spread/>
          <Destructing/>
          <FunctionDestructing/>
          
       </div>
    );
 }
 export default JavaScript