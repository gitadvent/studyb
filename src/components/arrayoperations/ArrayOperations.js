
const ArrayOperations = () => {

    const arr = [2, 4, 6, 3, 2];
    const arr1 = [5, 4, 3, 8, 7];

    let users = [
        { id: 1, name: "Sonia", age: 38 },
        { id: 2, name: "Ryan", age: 8 },
        { id: 3, name: "Rion", age: 48 },
        { id: 4, name: "RyanJ", age: 18 }
    ]

    //Reduce
    const redRes = arr.reduce((x, y) => {
        return x + y;
    })

    //foreach
    arr.forEach((item, i) => {

        // arr[i] = item * 10;
        console.log(item * 10);
    })

    console.log("foreach:", arr)

    //Map
    const mapRes = arr1.map(item => {
        return item * 2 + ",";
    })

    console.log(arr1)

    //filter method returns all the occurences in the array elements which satisfies the condition
    const filRes = arr.filter(item => {
        return item > 2;

    })

    //duplicate arrayElements
    const arrEle = [2, 4, 6, 4, 3, 10, 2, 3];
    const dups = arrEle.filter((item, index) => {
        console.log(arrEle.indexOf(item), index)
        return (arrEle.indexOf(item) !== index)

    })

    console.log(dups)

    //find method returns the first occurence in the array that satisfies condition, and it wont check rest of the elements 
    const findArr = [2, 4, 6, 3, 2];
    let findRes = findArr.find((item, i) => {
        return (item > 2)
    })
    console.log(findRes)
    //filter method returns all the occurences in the array elements which satisfies the condition
    let filUser = users.filter((user) => {
        return (user.name === "Ryan")
    })
    console.log(filUser)

    //Flat Array

    const flatArray = [1, 2, [4, 5], 8, [3, 9, [0, 12, [2, 5]]], 7]
    // let arr = [1, [2, [3, [4, 5], 6], 7, 8], 9, 10];
    let flat1 = flatArray.flat(1);
    let flat2 = flatArray.flat(2);
    let flat3 = flatArray.flat(3);
    let flat4 = flatArray.flat(Infinity);

    console.log(flat1, flat2, flat3, flat4)


    //HigherOrder Functions
    const argArray = [3, 6, 2, 7, 8];
    function HigherOrderFn(argFunction, callbackFn1) {

        argArray.forEach(argFunction)

        callbackFn1("hii welcome")

    }

    function callbackFn(num) {
        console.log(num)
    }

    function callbackFn1(quote) {

        console.log(quote)

    }

    HigherOrderFn(callbackFn, callbackFn1)

    // Min and Max value in an array
    let mArray = [5, 7, 3, 9, 2, 8];

    const minArr = Math.min(...mArray);
    const maxArr = Math.max(...mArray);

    console.log(minArr, "-", maxArr);

    //Push and pop from the array

    let pArray = [6, 3, 7, 8, 0];

    pArray.push(5);
    console.log("Push()", pArray);

    pArray.pop();
    console.log("Pop()", pArray)

    //concat array
    const newArr = pArray.concat(mArray);
    console.log("Concat -", newArr)

    const date = new Date();
    console.log("Date", date);

    //round
    const s = 11.5;
    console.log("Round-", Math.round(s));

    //Find Second largest element in an array

    let index = pArray.indexOf(Math.max(...pArray))
    console.log(index)
    pArray.splice(index, 1); //remove index by position
    let secLarg = Math.max(...pArray)
    console.log(secLarg)

    let a = [5, 7, 8, 3, 9, 10, 15];

    for (let i = 0; i < a.length; i++) {
        if ((a[i] % 3 === 0) && (a[i] % 5 === 0)) {
            console.log(a[i], "is FizzBuzz")
        }
        else if (a[i] % 5 === 0) {
            console.log(a[i], "is Buzz")
        }
        else if (a[i] % 3 === 0) {
            console.log(a[i], "is Fizz")
        }
    }

    let str = "sonia";
    let strArr = str.split('').reverse().join('');

    console.log(strArr)


    let firstnum = 0;
    let secondnum = 1;
    let thirsnum = firstnum + secondnum;

    console.log(firstnum);
    console.log(secondnum)
    while (thirsnum <= 15) {
        console.log(thirsnum)
        firstnum = secondnum;
        secondnum = thirsnum;
        thirsnum = firstnum + secondnum;

    }

    //find duplicate
    let dupArray = [6, 5, 9, 3, 5, 0, 1, 9]
    let dup = dupArray.filter((item, i) => {

        return (dupArray.indexOf(item) === i)

    })
    console.log(dup);

    //long word in a sentence
    let longStr = "let us find out the occurences longest word in this sentence";
    let resStr = longStr.split(' ');

    let y = resStr.reduce((acc, curr) => {
        console.log(acc, "1")
        console.log(curr, "2")
        if (curr.length > acc.length) {
            // acc=curr;
            return curr
        }
        else {

            return acc;
        }

    })

    console.log("Longest reduce", y);
    //Reduce in objects

    let redUsers = users.reduce((acc, prev) => {

        console.log("AccREd", acc);
        console.log("PrevREd", prev);

        if (acc.age > prev.age) {
            return acc;
        }
        else {

            return (prev);
        }
    })

    console.log("Longest reduce", redUsers);

    // Sort function
    let longRes = resStr.sort((first, second) => {

        return (first.length > second.length)
    })
    let ind = longRes.length;
    console.log("Sort", ind)

    console.log("Longest:", longRes[ind - 1])

    //sort -ascending
    let a1 = [4, 5, 3, 6, 8, 9, 2];
    let sortA1 = a1.sort();
    sortA1.reverse();
    let res1 = a.sort((first, second) => {

        return first - second

    })

    console.log(sortA1);


    let arrR = [5, 7, 5, 8, 9, 1, 0, 4];
    arrR.pop();//remove last element
    arrR.shift();//remove first element
    //arrR.splice(2, 1); //remove by index and number of elemnts
    arrR.splice(2, 2, "apple", "orange")

    console.log("Array Splice-", arrR)
    arrR.length = 0; // clears an array
    console.log(arrR)

    //UST question
    console.log(typeof [1, 3, 5])

    //UST question
    let obj1 = { name: "john" }
    let obj2 = { name: "john" }
    let num = 100;
    let strVal = "100";

    let arrComp1 = [2, 3, 4]
    let arrComp2 = [2, 3, 4]

    console.log("Array with equal values == : ", JSON.stringify(arrComp1) == JSON.stringify(arrComp2))
    console.log("Array with equal values === :", arrComp1 === arrComp2)
    console.log(obj1 == obj2)// false as it checks it  points to same memory
    console.log(obj1 === obj2) //false
    console.log("JSON Stringify obj with == ", JSON.stringify(obj1) == JSON.stringify(obj2))// convert an object in to string, and then checks
    console.log("num and str comparison with == :", num == strVal);
    console.log("num and str comparison with === :", num === strVal)

    //UST question
    obj2.name = "sonia"
    console.log(obj2.name)

    //UST question
    var v = 10;
    function sum() {
        var v = 11
    }
    sum();
    console.log(v)

    //filter array starts with 's'
    let arrS = ["apple", "sample", "search", "cat"]

    let res = arrS.filter((item) => {

        if (item.startsWith('s')) {
            return item
        }
    }
    )
    console.log(res)

    //Missing element
    const arrNew = [1, 2, 3, 4, 5, 7, 8]

    const missArray = []

    let minValue = Math.min(...arrNew)
    let maxValue = Math.max(...arrNew)
    console.log(minValue, "+", maxValue)
    for (let i = minValue; i < maxValue; i++) {
        if (arrNew.indexOf(i) < 0) {
            missArray.push(i)

        }
        else {
            missArray.push(i)
        }
    }
    console.log(missArray);

    const arr2 = [2, 3, 4, 5]
    const arr3 = [2, 3, 4, 5]

    if (JSON.stringify(arr2) == JSON.stringify(arr3)) {
        console.log("true")
    }
    else {
        console.log("false")
    }

    let newstr = "please enter your name";
    let occStr = "please enter your name";

    let checkStr = newstr.split("");

    let checkOccStr = occStr.split("")

    console.log(checkStr)

    for (let i = 0; i < checkStr.length; i++) {
        let count = 0;
        for (let j = 0; j < checkOccStr.length; j++) {
            if (checkStr[i] == checkOccStr[j]) {
                count = count + 1;

            }

        }
        console.log(checkStr[i], count)
    }

    // remove all duplicates
    let arrN = [1, 2, 3, 4, 2, 3];

    let resN = arr1.filter((item, i) => {
        if (arr1.indexOf(item) != i) {
            return item
        }
    })


    for (let i = 0; i < arrN.length; i++) {
        for (let j = 0; j < resN.length; j++)
            if (arrN[i] === resN[j]) {
                arrN.splice(i, 1)
            }
    }
    console.log(arrN)

    let ne=str.split('');
    let r=ne.reverse();
    console.log(r)

//replace first letter to cap


let str5= "welcome to the fantacy world";

str.replace()
let strArr1= str5.split(" ");
console.log(strArr1)

let resstr= strArr1.map((item,i)=>{
let newstr=item[0].toUpperCase()
console.log(item.length)

return( item.replace(item[0],newstr) )


})

console.log(resstr.join(" "))

    return (
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", border: "1px solid black", height: "200px", width: "805px", margin: "10px", padding: "10px" }}>
            <div style={{ width: "150px" }}>
                <h4>Map Fn</h4>
                <p>{mapRes}</p>
                <h4>ForEach</h4>
                <p>{arr}</p>
            </div>
            <div style={{ width: "150px" }}>
                <h4>Reduce Fn</h4>
                <span>{redRes}</span>
                <h4>Find Method</h4>
                <span>{findRes}</span>
            </div>
            <div>
                <h4>Filter Fn</h4>
                <p>{filRes}</p>
                {filUser.map(user =>
                    <div key={user.id}>{user.name}</div>
                )}
                <h4>Flat Array</h4>
                <p>{flat4}</p>
            </div>
            <div>
                <h4>Duplicate Array</h4>
                <p>{dups}</p>

            </div>
        </div>
    )
}
export default ArrayOperations;