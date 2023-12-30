import React, { useEffect, useState } from "react";
import {useLoaderData} from "react-router-dom";

function Github () {
    // const [data,setData] = useState([])
    // useEffect(()=>
    // {
    //     fetch("https://api.github.com/users/yaaassshhhh")
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    const data = useLoaderData()

    return (
        <>
            <div className = "bg-gray-700 text-white text-3xl p-4"> Github Followers : {data.followers}
            <img src={data.avatar_url } alt="profile Image" width={300} />
            </div>
            
        </>
    )
}

export default Github;
export const githubInfo = async () =>{
    const response = await fetch ("https://api.github.com/users/yaaassshhhh")
    return response.json()
}