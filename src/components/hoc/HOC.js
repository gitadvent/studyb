import React from 'react'

function HOC(ArgComponent) {
  return (
    <div style={{border:"1px solid black",height:"200px",width:"230px",margin:"10px",padding:"10px"}}>
    <h3>HOC</h3>
     <p>this is HOC component</p> 
     <ArgComponent></ArgComponent>
    </div>
  )
}

export default HOC;
