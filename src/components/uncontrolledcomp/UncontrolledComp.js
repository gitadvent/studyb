const UnControlledComp=()=>{
    function onSubmit(e) {
        e.preventDefault();
        console.log("Email value: " + window.email.value);
        console.log("Password value: " + window.password.value);
    }
    
    return (
        <div style={{ border: "1px solid black", width: "230px", height: "200px", margin: "10px", padding: "10px" }}>
        <form onSubmit={onSubmit}> 
            <input style={{border: "1px solid black", marginBottom:"5px"}} type="email" name="email" id="email" required />
            <br></br>
            <input style={{border: "1px solid black", marginBottom:"5px"}} type="password" name="password" id="password" required />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default UnControlledComp;