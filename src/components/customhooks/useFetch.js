import { useEffect, useState } from "react";

const useFetch = (apiPath) => {

   // console.log(apiPath)
    const url = "https://api.themoviedb.org/3/" + apiPath+"?api_key="+"b80d59c33d6d57ed9c7e3713f91c188a"
    //+"&query=";

    //console.log(url);

    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchmovies() {
            try{
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData.results)
            }
            catch(err){
                console.log(err)
            }
        }

        fetchmovies();
    },[url])
    return { data }

}
export default useFetch;