import React, { useState } from 'react'
import PureComponent from './PureComponent'

function Parent() {
   
    const [name,setName]=useState("Ryan")
    const [age,setAge]=useState(10)

  return (
    <>
    <div style={{ border: "1px solid black", height: "200px", width: "240px", margin: "10px", padding: "10px" }}>
        <h3>PureComponent</h3>
        <div>Inside parent</div>
        <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name}></input>
        <input type="text" onChange={(e)=>{setAge(e.target.value)}} value={age}></input>
        
    </div>
    <div><PureComponent name={name}></PureComponent></div>
    </>
  )
}

export default Parent