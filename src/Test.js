// import {useMemo, useState} from 'react';

// const Test=()=>{


// const [res,setRes]=useState(0)

//  function calc(){

//       const s= 5+4;
//       setRes(s)
//  }
//  const val=useMemo(()=>{
//  return res;
//  },[res])

//   return(
//     <div>
//     <div>{res}</div>
//     <button onClick={calc}>Click</button>
//     </div>
//   )
// }

// export default Test;



// import { useEffect, useState } from 'react'

// const Test = () => {
// 	const [users, setUsers] = useState([])
// 	useEffect(() => {
// 		async function fetchData() {
// 			const response = await fetch(
// 				'https://62de906f976ae7460bdd024e.mockapi.io/users'
// 			)
// 			const data = await response.json()
// 			setUsers(data)
// 			console.log(users)
// 		}
// 		fetchData()
// 	}, [])
// 	return (
// 		<div>
// 			{users.map((user) => {
// 				return <div>{user.name}</div>
// 			})}
// 		</div>
// 	)
// }
// export default Test;

import { useEffect, useState } from 'react'

const Test = () => {
  const [users, setUsers] = useState([])
  // useEffect(() => {
  // 	async function fetchData() {
  // 		const response = await fetch(
  // 			'https://62de906f976ae7460bdd024e.mockapi.io/users'
  // 		)
  //console.log(response)
  // 		const data = await response.json()
  // 		setUsers(data)
  // 		console.log(users)
  // 	}
  // 	fetchData()
  // }, [])

  useEffect(() => {
// Promise in fetch
    function fetchDetails() {
      fetch("https://62de906f976ae7460bdd024e.mockapi.io/users")
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setUsers(data);
        })
        .catch(error => { console.log(error) })
    }
    // function fetchDetails(){
    //   fetch("https://62de906f976ae7460bdd024e.mockapi.io/users")
    //     .then(response => {
    //          const data=response.json();
    //   setUsers(data)
    //   console.log(users)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     });

    // }

    fetchDetails()

  }, [])

  return (
    <div>
      {users ? users.map((user) => {
        return <div key={user.id}>{user.name}</div>
      }) :
        <div> no users</div>
      }
    </div>
  )
}
export default Test;