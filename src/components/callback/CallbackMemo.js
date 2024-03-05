import React, { useCallback, useMemo, useState } from 'react'

function CallbackMemo() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [val, setVal] = useState(0);
    const data = [1, 2, 3, 4, 5];

    const res1 = useMemo(() => {
        return (Number(num1) + Number(num2))
    }, [num1, num2])
    console.log(res1)

    const res = useMemo(() => {
        console.log("Inside useMemo")
        return data.reduce((a, b) => a + b);
    }, [data]);


    const sum = useCallback(() => {
        getSum(num1, num2)
    }, [num1, num2])

    function getSum(a, b) {
        return setVal(Number(a) + Number(b));
    }

    return (
        <div style={{ border: "1px solid black", height: "200px", width: "240px", margin: "10px", padding: "10px" }}>
            <h3>useMemo/useCallback</h3>
            <input type="text" onChange={(e) => { setNum1(e.target.value) }} value={num1}></input>
            <input type="text" onChange={(e) => { setNum2(e.target.value) }} value={num2}></input>
            <p> useMemo - Eg.1 {res1} , Eg2. {res}</p>
            <p>useCallback -{val}</p>


            <button onClick={sum}>Add</button>

        </div>
    )
}

export default CallbackMemo