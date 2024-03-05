import { useEffect, useRef } from "react";

const ReactHooks = () => {
    const quote = useRef();
    
    quote.current = "Welcome";

    useEffect(()=>{
        quote.current.focus();
    },[])

    const submitHandler = (e) => {
        e.preventDefault();
        const details = {
            quote: quote.current.value
        }
        console.log(details);

    }

    return (
        <div style={{ border: "1px solid black", height: "200px", width: "240px", margin: "10px", padding: "10px" }}>
            <input type="text" id="val" ref={quote} ></input>
           
            <button onClick={submitHandler}>Post</button>
        </div>
    )
}
export default ReactHooks;