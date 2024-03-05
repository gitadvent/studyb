import { useEffect } from "react";

const CallbackFunction = () => {

    //Synchronous callback function

    function calculation(x, callback) {
        var s;
        s = x * x;

        return callback(s);
    }

    function callback(s) {
        console.log(" call back executed", s)

        return s
    }

    let res = calculation(5, callback)

    console.log(res)

    //Async Callback
    function calculationAsync(x, callback) {
        var s;
        s = x * x;

        setTimeout(() => {
            callback(s)
        }, 3000)

    }

    function sum(s) {
        console.log(" call back executed", s)
        // return s
    }

    calculationAsync(5, sum)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            const data = await response.json();
            console.log(data);
        };
        fetchData();
    }, [])
    return (
        <div>

        </div>
    )
}

export default CallbackFunction;