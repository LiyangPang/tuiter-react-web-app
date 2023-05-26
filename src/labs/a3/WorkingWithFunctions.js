import Es6 from "./arrow-functions";
import Es5 from "./es5-functions";
import ImpliedReturn from "./implied-return";
import FunctionParenthesisAndParameters from "./function-parenthesis-and-parameters";

function WorkingWithFuction(){
    return(
        <div>
            <Es5/>
            <Es6/>
            <ImpliedReturn/>
            <FunctionParenthesisAndParameters/>
        </div>
    );
}

export default WorkingWithFuction