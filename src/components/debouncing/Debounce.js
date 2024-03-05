import axios from "axios";
import { useEffect, useState } from "react";

const Debounce = () => {

    const [pin,setPin]=useState("")

    // Debouncing
    const onSearchHandler = (event) => {
        event.preventDefault();
        setPin(event.target.value); 
       // console.log(pin)
        
    }

    useEffect(()=>{
        const debouncing= setTimeout(()=>{
            axios.get("https://api.postalpincode.in/pincode/"+pin)
                .then((res) => {
                    //console.log("https://api.postalpincode.in/pincode/"+event.target.value)
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        },2000);
console.log(debouncing)
    return()=>{
        clearTimeout(debouncing);
    }

    },[pin])
    

    return (
        <div style={{ border: "1px solid black", height: "200px", width: "240px", margin: "10px", padding: "10px" }}>
            <h3>Debouncing</h3>
            <input id="pincode" type="text" style={{ border: "1px solid black", marginBottom: "2px" }} onChange={onSearchHandler}></input>
        </div>
    )
}

export default Debounce;