const EsFeatures = () => {
    //template literals
    let person = "sonia";
    console.log(`my name is ${person}`)

    //multiline strings
    let quote = `hi,
    this is ,
    a greetings to all`;
    let greeting = `Hello World,     
    Greetings to all,
    Keep Learning!`

    console.log(quote, greeting)

    //default parameters

    function cube(x = 5) {
        return x * x * x;
    }

    let res = cube();

    //Destructuring -Array

    let deArr = ["orange", "strawberry", "apple", "guava"];
    let [a, b] = deArr;
    console.log(a, b)

    //Destructuring -Object
    const obj = { name: "rion", age: 8, address: "shjgsdf" }
    console.log(a, "-", b)
    let { name, address } = obj;
    console.log(name, "-", address)


    return (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", border: "1px solid black", height: "200px", width: "520px", margin: "10px", padding: "10px" }}>
            <div style={{ width: "150px" }}>
                <h4>Template literals</h4>
                <p>{name}</p>
                <h4>Multiline strings</h4>
                <p>{greeting}</p>
            </div>
            <div style={{ width: "150px" }}>
                <h4>Default parameters</h4>
                <p>Cube:{res}</p>
                <h4>Destructuring</h4>
                <p>{a}-{b}</p>
            </div>
        </div>)
}

export default EsFeatures;