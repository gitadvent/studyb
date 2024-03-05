import { useEffect, useState } from "react";

const SearchFilter = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [searchList, setSearchList] = useState([])
    const [users, setUsers] = useState([]);
    async function fetchData() {
        try {
            const response = await fetch("https://62de906f976ae7460bdd024e.mockapi.io/users")
            const jsonData = await response.json();
            console.log(jsonData)
            setUsers(jsonData)
        }
        catch (err) {
            throw err;
        }
    }

    useEffect(() => {
        fetchData();

    }, [])

    useEffect(() => {
        if (searchQuery) {
            setSearchList(users.filter((user) => {
                return (user.name)
                    //.join("")
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
            })
            )
        }
        // else {
        //     setUsers(users);
        // }

    }, [searchQuery])
    return (
        <>
            <div style={{ border: "1px solid black", height: "200px", width: "240px", margin: "10px", padding: "10px" }}>
                <h3>SearchFilter</h3>
                <input id="search" type="text" style={{ border: "1px solid black", marginBottom: "2px" }} onChange={(event) => setSearchQuery(event.target.value)}></input>

                {(searchQuery.length > 0) ?
                    searchList.map((searchitem) => {
                        return (
                            <div>{searchitem.name}</div>
                        )
                    })
                    : users.map((user) => {
                        return (
                            <div>{user.name}</div>
                        )
                    })

                }
            </div>

        </>
    )
}
export default SearchFilter;