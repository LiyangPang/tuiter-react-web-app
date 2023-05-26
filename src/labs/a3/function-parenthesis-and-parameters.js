function FunctionParenthesisAndParameters(){
    const square = a => a * a;
    const plusOne = a => a + 1;

    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return(
        <div>
            <h2>
                Parenthesis And Parameters
            </h2>
            twoSquared = {square(2)}<br/>
            square(2) = {twoSquared}<br/>
            threePlusOne = {plusOne(3)}<br/>
            plusOne(3) = {threePlusOne}

        </div>
        
    );
}



export default FunctionParenthesisAndParameters