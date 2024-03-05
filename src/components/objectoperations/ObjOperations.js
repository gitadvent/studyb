

const ObjOperartions = () => {

    const obj = {
        name: "sonia", age: 39,
        address:{
            city:"kottayam"
        }
    }


    const shallowCopy = obj;
    shallowCopy.name = "Ryan";
    shallowCopy.address.city="trivandrum"
    console.log(obj);

    const deepCopy=JSON.parse(JSON.stringify(obj));
    deepCopy.name="Rion";
    console.log(obj)


    return (
        <div style={{ border: "1px solid black", width: "230px", height: "200px", margin: "10px", padding: "10px" }}>
           <h4>ShallowCopy</h4>
            <p>{obj.name}</p>
            <p>{obj.address.city}</p>

            <h3>Deep Copy</h3>
            <p>{deepCopy.name}</p>
            <p>{obj.name}</p>
        </div>
    )

}
export default ObjOperartions;