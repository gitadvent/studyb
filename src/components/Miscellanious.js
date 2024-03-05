import { useState } from "react"
import Card from "./Card";

const Miscellanious = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    //const [user, setUser] = useState({});

    const [users, setUsers] = useState([]);

    const onChangeFirstName = (e) => {
        e.preventDefault();
        setFirstName(e.target.value);
        console.log(firstName, lastName)
    }

    const onChangeLastName = (e) => {
        e.preventDefault();
        setLastName(e.target.value);
        console.log(firstName, lastName)
    }

    const onAddHandler = (e) => {
        e.preventDefault();
        const adduser = {
            id: Math.floor(Math.random() * 100),
            firstname: firstName,
            lastname: lastName,
            // console.log("Iam clicked")
        }
        console.log(adduser)
        // setUser(adduser)
        setUsers([...users, adduser])
        setFirstName("")
        setLastName("")
    }
    console.log(users)

    const onDeleteHandler = (id) => {
        // e.preventDefault();
        const res = users.filter((user) => user.id !== id)
        setUsers([...res])

        console.log(res);
    }

    let str = "hai welcome";
    str = "Hello Good morning";
    console.log(str);

    hoist = "testing hoisting";
    console.log(hoist);
    var hoist;

    //console.log(greeting); 

    let greeting;

    console.log(greeting);

    greeting = "hiii";

    //finding dups and prints non dups
    let arr = [4, 5, 6, 7, 4, 8, 9, 7]

    let result = arr.filter((item, i) => {

        if (arr.indexOf(item) !== i) {
            return item;
        }
        else {
            console.log("non dups", arr[i]);
        }
    })
    console.log(result)
    console.log( typeof(arr))

    let arr1 = [...new Set(arr)]
    console.log(arr1)
    let nonDupArr = []

    arr1.map((item) => {
        let dupArr = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                dupArr.push(arr[i]);
                // console.log("dups", dupArr);
            }
        }
        nonDupArr.push(dupArr)

    })
    console.log(nonDupArr)


    function sum(a, b) {
        var s = a + b
        console.log(s)
        return s
    }

    function calculation(x, callback) {
        let area = x * x;
        console.log(area)

        return setTimeout(() => {
            callback(20, 30)
        }, 1000);
    }

    var res = calculation(5, sum)
    console.log(res)

    //Finding out non repetitive characters

    function findRep() {
        let strRep = "abcabd";
        var s = "";

        for (let i = 0; i < strRep.length; i++) {
            if (strRep.indexOf(strRep.charAt(i)) === strRep.lastIndexOf(strRep.charAt(i))) {

                console.log(strRep.charAt(i))
                // console.log(strRep.charAt(i), "is Repetitive")

            }
        }
    }

    let str1="hi welcome to the soni's world";
 
    let revStr=str1.split(' ')
     console.log(revStr)
     
    let res1= revStr.map((item)=>{
     return (item.split('').reverse().join(""))
    
    })
  
    console.log(res1.join(' '))
    //spread op in object
    const myVehicle = {
        brand: 'Ford',
        model: 'Mustang',
        color: 'red'
    }

    const updateMyVehicle = {
        type: 'car',
        year: 2021,
        color: 'yellow'
    }

    const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle }

    console.log(myUpdatedVehicle);

    console.log(an);
    var an;

    //Masking a  number
    const accNo = "10209187126"
    var r = accNo.split('')
    let mask = r.map((item, i) => {
        if (i < 2) {
            return r[i]
        }
        if (i >= 2 && i <= 6) {
            r[i] = "*"
            return (r[i])
        }
        if (i > 6) {
            return r[i]
        }

    })
    let b = "56789"
    let s = mask.join("");
    let r1 = parseInt(b)
    console.log(r1)

    console.log(2 + '2');
    console.log(typeof (2 - '2'))
    //swap without third variable
    var a1 = 10; var b1 = 20;
    var [b1, a1] = [a1, b1]
    console.log("b1=", b1, " ", a1)

    //sort 
    let a = [4, 5, 3, 6, 8, 9, 2]
    console.log(a.sort());
    console.log(a[2])

    //bad logic tofind missing elements in an array
    let misArr = [1, 2, 3, 5, 6, 7, 9, 11, 13, 14, 16]

    let newArr = misArr.filter((item, i) => {
        if ((misArr[i + 1] - item) == 2) {
            console.log((misArr[i + 1] + item) / 2);
            return (((misArr[i + 1] + item) / 2))
        }

    })

    console.log("missingArray=", newArr)
    // useEffect(()=>{
    //     const button = document.getElementById("check").innerHTML

    //     button.addEventListener("click", (e) => {
    //         console.log('Event', e.target)
    //         console.log('Button click')
    //       });
    // })
    // const button1 = document.getElementById("mybutton");
    // button1.addEventListener('click', function () {
    //     alert("button clicked")
    // })

    return (
        <div style={{ border: "1px solid black", width: "230px", height: "200px", margin: "10px", padding: "10px" }}>
            <form onSubmit={onAddHandler}>
                <input style={{ border: "1px solid black", marginBottom: "5px" }} type="text" id="firstname" onChange={onChangeFirstName} value={firstName}></input>

                <input style={{ border: "1px solid black" }} type="text" id="lastname" onChange={onChangeLastName} value={lastName}></input>
                <p >
                    <button type="submit" >Add</button>
                  
                </p>

            </form>
            <div>
                <div>  <button id="mybutton"> Add Event Listener</button></div>
                <ul>

                    {users.map((user) => (
                        <Card key={user.id} user={user} onDeleteHandler={onDeleteHandler} />
                    ))}
                </ul>
            </div>


        </div>
    )
}

export default Miscellanious;