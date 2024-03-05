import React from 'react'

function PureComponent({name}) {
    console.log("Inside PureComponent")
    return (
        <div >
           Inside PureComponent
           <p>{name}</p>
        </div>
    )
}

export default PureComponent
//export default React.memo(PureComponent)