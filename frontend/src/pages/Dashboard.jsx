import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";

function Dashboard() {
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
        .get(`http://localhost:5555/User/current`)
        .then((response) => {
            setUsername(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, []);
    return (
        <div>
            {loading ? <Spinner /> : ""}
            Welcome, {username}
        </div>
    )
}

export default Dashboard