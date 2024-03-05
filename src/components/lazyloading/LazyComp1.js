import { useEffect, useState } from "react";
import useFetch from "../customhooks/useFetch";

const LazyComp1 = () => {

   const { data } = useFetch("movie/now_playing");
   const[dataList,setDataList]= useState([])

  /// console.log(data)

   const filteredList=data.filter((movie)=>{
    return movie.original_title.includes("A")
   
   })

   useEffect(()=>{
    setDataList(filteredList)
   },[data])
   //console.log(dataList)
   
    // const url = "https://api.themoviedb.org/3/" + "movie/now_playing"+"?api_key="+"b80d59c33d6d57ed9c7e3713f91c188a"
    //   const [data, setData] = useState([])

    //   useEffect(() => {
    //     async function fetchmovies() {
    //         const response = await fetch(url);
    //         const jsonData = await response.json();
    //         setData(jsonData.results)
    //     }

    //    setTimeout(fetchmovies,5000);
    // },[url])
    
    
    return (
    <div style={{ border: "1px solid black", height: "200px", width: "350px", margin: "10px", padding: "10px" }}>
        <h3>Lazy loading component</h3>
        <div>
        {dataList.map(item => (
          <div key={item.id}>{item.original_title}</div>
        ))}
        </div>
    </div>
    )
}

export default LazyComp1;