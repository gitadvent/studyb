import { useEffect } from "react";

const Promises = () => {

    let statPromise = new Promise(function (resolve, reject) {
        const string1 = "hi How Are you";
        const string2 = "hi How Are you";
        if (string1 === string2) {
            resolve();
        }
        else {
            reject();
        }
    })
    statPromise.then(function () {
        console.log("success")
    }).
        catch(function () {
            console.log("failure")
        }
        )

    let url = "https://jsonplaceholder.typicode.com/todos/1";
    useEffect(() => {
        // FetchRes is the promise to resolve
        // it by using.then() method
        let fetchRes= fetch(url);
        fetchRes.then(res =>
            res.json()).then(d => {
                console.log(d)
            })
    }, [url])

    return (
        <div>

        </div>
    )
}
export default Promises;