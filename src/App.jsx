import React, { useEffect, useState } from "react";

function App() {
 const [data, setData] = useState(null);
 const [error, setError] = useState(null);

 useEffect(() => {
    function fetchData() {
      fetch("https://randomuser.me/api")
        .then((res) => res.json())
        .then((res) => setData(res.results[0]))
        .catch((err) => setError(err));
    }

    fetchData();
 }, []);

 if (error) {
    return ( 
    <div>Error: {error.message}</div>
    );
 }

 if (data) {
    return (
    <>
    Loading...
    </>
    );
 }

 return (
    <div>
      <h1>{data}</h1>
    </div>
 );
}

export default App;
