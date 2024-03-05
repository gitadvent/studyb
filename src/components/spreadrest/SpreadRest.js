const SpreadRest = () => {

    //Spread operator
    const arr1 = ["Orange", "Red", "Blue", "Violet"]
    const arr2 = [4, 5, 6, 7, 2, 10];
    const arr3 = [...arr1, ...arr2];
    console.log(arr3)

    //Rest operator
    function add(...args) {

        let s= args.reduce((x, y) => {
            return x + y;
        })

        return s;
    }

    let res = add(6, 3, 8, 9, 2, 3);

    function display(...args){
        args.forEach((item,i)=>{
            args[i]=item;
        })
        console.log(args)
    }

    let fruits=display("strawberry","orange","apple","blueberry")

    return (
        <div style={{ border: "1px solid black", width: "230px", height: "200px", margin: "10px", padding: "10px" }}>
            <h4>Rest Operator</h4>
            <p>{res}</p>
        </div>
    )
}

export default SpreadRest;