import React from 'react'
import useFetch from './customhooks/useFetch'

function Home({ apiPath }) {

  //console.log(apiPath)

  const { data } = useFetch(apiPath);

  // let s = data.filter(movie => (movie.original_title==="Leo")
  // ).map()

  // console.log(s)

  return (
    <div style={{ border: "1px solid black", height: "200px", width: "230px", margin: "10px", padding: "10px" }}>
      Routing Eg. Home/ useFetch
      <h4>Movies</h4>
      <div>
        {data.filter(movie => (movie.original_title === "Leo" || movie.original_title === "Trolls Band Together")
        ).map(item => (
          <div key={item.id}>{item.original_title}</div>
        ))}
      </div>
    </div>
  )
}

export default Home