import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";

const Header=()=>{
    // const [darkMode,setDarkMode]=useState(JSON.parse(localStorage.getItem("darkMode"))||false);

    // useEffect=()=>{
    //     localStorage.setItem("darkMode",JSON.stringify(darkMode))
    //     if(darkMode){
    //         document.documentElement.classList.add("dark")
    //     }
    //     else{
    //         document.documentElement.classList.remove("dark")
    //     }
    // }
    
   
    return(
        <div>
            <Link to="/rwd">RWD</Link>
        </div>
    )
}

export default Header;