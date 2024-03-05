const Card=({user,onDeleteHandler})=>{
  
    return(
        <>
        <li style={{border:"solid 1px black"}} >
            <span style={{marginRight:"20px"}}>{user.firstname}</span>
            <button onClick={() => onDeleteHandler(user.id)}>Delete</button>
        </li>
    </>
    )
}

export default Card;