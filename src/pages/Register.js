import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeUserAge, changeUserName } from '../components/redux/action/ChangeUser';

function Register() {
    const user = useSelector(state => state.userState)
    const dispatch = useDispatch();

    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);

    return (
        <div>
            <div style={{border:"1px solid black",height:"200px",width:"240px",margin:"10px",padding:"10px"}}>
            <h3>Redux</h3>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <hr></hr>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        dispatch(changeUserName(name));
                        dispatch(changeUserAge(age));
                    }}>

                    <input
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Change name">
                    </input>
                    <input
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Change age" >
                    </input>
                    <input type="submit" value="Change user details" />

                </form>
            </div>
        </div>
    )
}

export default Register