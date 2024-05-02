import { useEffect, useState } from "react";


function Github() {

    let username = "Basit-Yar";
    let [data, setData] = useState([]);

    useEffect(() => {

        fetch(`https://api.github.com/users/${username}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setData(data);
            })

    }, [])

    return (

        <div className="flex justify-around py-16">
            <img className="w-1/4" src={data.avatar_url} alt="img" />
            <div className="flex flex-col justify-evenly font-semibold">
                <h2>UserName : <span className="text-orange-700">{username}</span></h2>
                <h2>User Full Name : <span className="text-orange-700">{data.name}</span></h2>
                <h2>Followers : <span className="text-orange-700">{data.followers}</span></h2>
                <h2>Following : <span className="text-orange-700">{data.following}</span></h2>
            </div>
        </div>
    );
}

export default Github;