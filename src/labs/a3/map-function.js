function MapFunctions(){
    let numberArray1 = [1, 2, 3, 4, 5];
    const square = a => a * a;

    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);

    return(
        <div>
            <h2>Maps</h2>
            squares = {JSON.stringify(squares)} <br/>
            cubes = {JSON.stringify(cubes)}
        </div>
    )
}

export default MapFunctions