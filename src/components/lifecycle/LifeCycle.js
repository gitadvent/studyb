import { useEffect, useState } from "react";

const LifeCycle = () => {
    const [name, setName] = useState("");

    //Mounting
    // useEffect(() => {

    // });

    //updating
    useEffect(() => {
        console.log(`name is changed ${name}`);

    }, [name]);

    //unmounting
    // useEffect(() => {
    //     window.addEventListener("mousemove", () => { });
    //     return () => {
    //         window.removeEventListener("mousemove", () => { })
    //     }
    // }, []);

    return (
        <div style={{ border: "1px solid black", height: "200px", width: "240px", margin: "10px", padding: "10px" }}>
            <h4>LifeCycle</h4>
            <input style={{ width: "100px" }} placeholder="enter name" onChange={e => setName(e.target.value)} />
            <p>{name}</p>
        </div>
    )
}
export default LifeCycle;