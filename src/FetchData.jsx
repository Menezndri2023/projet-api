import { useEffect,useState } from "react";

function FetchData() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);


    const url = `https://randomuser.me/api`
    function myFetchData(page){
        fetch(`${url}?page=${page}&results=10`,{
            method:"GET"
        })
        .then((res) => res.json(data))
        .then((data) => setData(data.results))
        .catch((err) => setError(err));
   
       }  
       console.log(data)
    useEffect(() => {
       
        myFetchData();
    }, []);
   
    return(
        <div>
            {data.map((item)=>( 
                <div>

                    <h2>{item.email}</h2>
                    <h3>{item.name.title}- {item.name.first} - {item.name.last}</h3>
                    <img src={item.picture.large} alt="" />
                    <p>{item.} </p>
                </div>
            ))
               
                
            }
        </div>
    )

   }

   export default FetchData