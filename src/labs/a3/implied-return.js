function ImpliedReturn(){
    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);

    return(
        <div>
            <h2>
                ImpliedReturn
            </h2>
            fourTimesFive = {multiply(4,5)}<br/>
            multiply(4,5) = {fourTimesFive}
        </div>
    );
}

export default ImpliedReturn