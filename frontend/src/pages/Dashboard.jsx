import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import DashboardHeader from "../components/DashboardHeader";

function Dashboard() {
<<<<<<< HEAD
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/User/current`)
      .then((response) => {
        console.log(response.data);
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
      <DashboardHeader />
      {loading ? <Spinner /> : ""}
      Welcome, {username}
    </div>
  );
=======
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios
        .get(`http://localhost:5555/User/current`)
        .then((response) => {
            console.log(response.data);
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
            <DashboardHeader />
            {/* {loading ? <Spinner /> : ""} */}
            {/* Welcome, {username} */}
        </div>
    )
>>>>>>> 92b1e718e794875028c4cf14eb91e8199d3acbdd
}

export default Dashboard;
