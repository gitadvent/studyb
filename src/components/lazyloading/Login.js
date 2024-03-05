// import { React, Suspense, useState } from 'react';
// const LazyComp1 = React.lazy(() => import('./LazyComp1'))
// const LazyComp2 = React.lazy(() => import('./LazyComp2'))

import axios from "axios";
import { useEffect, useState } from "react";

const Login = () => {

    //  const obj = { name: "", age: 0, address: "" }
    // const [obj,setObj]=useState({})
    const [name, setName] = useState("")

    const [objList, setObjList] = useState([])

    useEffect(() => {

        getData();
       
    }, [])

    const getData = () => {
        axios.get("https://62de906f976ae7460bdd024e.mockapi.io/users")
            .then((resp) => {
                const data = resp.data;
                setObjList(data);
            })
            .catch((err) => {
                console.log(err)
            })
        console.log(objList)
    }
   // getData();

    const onChangeHandler = (event) => {
        event.preventDefault();
       // setName(event.target.value)
        // obj.name = name;
      //  console.log(name);
    }
    const onSubmitHandler = (event) => {

        event.preventDefault();
        var nameRegex = new RegExp('[a-zA-Z]');
        // var lowercase=new RegExp('[a-z]');
        var ageRegex = new RegExp('[0-9]')

        if (!nameRegex.test(event.target.name.value)) {
            console.log("Please enter proper name")
        }
        else if (!ageRegex.test(event.target.age.value)) {
            console.log("please enter age in numbers")
        }
        else {
            const obj = {
                name: event.target.name.value,
                age: event.target.age.value,
                address: event.target.address.value
            }
            setObjList([...objList, obj])
            console.log(objList)
        }

        // console.log(obj);
        // setObj(user)

        // Axios CREATE example
        axios.post("https://62de906f976ae7460bdd024e.mockapi.io/users", {
            name: event.target.name.value,
            age: event.target.age.value,
            hobbies:
                ["Skating", "Travelling", "Coding", "Piano"],
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.err(err)
            })


        event.target.name.value = "";
        event.target.age.value = "";
        event.target.address.value = "";

    }

    // Axios UPDATE
    const onUpdateHandler = (id) => {

        axios.put("https://62de906f976ae7460bdd024e.mockapi.io/users/" + id, {
            name: "Neet",
            age: 40,
            hobbies:
                ["Surfing", "Travelling", "Coding", "TV"],
        }, id)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })

    }
    //Axios DELETE
    const onDeleteHandler = (id) => {
        console.log(id)
        axios.delete("https://62de906f976ae7460bdd024e.mockapi.io/users/" + id)
            .then((res) => {
                console.log(res.data)
                getData();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div style={{ border: "1px solid black", height: "200px", width: "300px", margin: "10px", padding: "10px" }}>
            <h3>Axios</h3>
            <div>
                <input type="text" style={{ border: "1px solid black", marginBottom: "2px" }} id="name" onChange={onChangeHandler}></input>
            </div>
            <div>
                <input type="text" style={{ border: "1px solid black", marginBottom: "2px" }} id="age" onChange={onChangeHandler}></input>
            </div>
            <input type="text" style={{ border: "1px solid black" }} id="address" onChange={onChangeHandler}></input>
            <button onClick={onSubmitHandler}>Register</button>


            {objList.map((item) => {
                return (
                    <>
                        <div key={item.id}>{item.name}

                            <button onClick={() => onUpdateHandler(item.id)}>Update</button>
                            <button onClick={() => onDeleteHandler(item.id)}>Delete</button>
                        </div>
                    </>
                )
            })}


        </div>
    )
    //     const [user,setUser]=useState("admin")


    //     if (user === "admin") {
    // 		return (
    // 			// fallback component is rendered until our main component is loaded
    // 			<Suspense fallback={<div>Loading..</div>}>
    // 				{/* <Admin /> */}
    //             <LazyComp1></LazyComp1>
    // 			</Suspense>
    // 		);
    // 	} else if (user === "customer") {
    // 		return (
    // 			<Suspense fallback={<div>Loading..</div>}>
    // 				{/* <Customer /> */}
    //                 <LazyComp2></LazyComp2>
    // 			</Suspense>
    // 		);
    // 	} else {
    // 		return <div> Invalid User </div>;
    // 	}
}




export default Login;

