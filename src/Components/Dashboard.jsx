import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  //   const { userName } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9000/contact").then((res) => {
      setData(res.data);
    });
  }, []);

  const renderTable = () => {
    return (
      <>
        <h2>Welcome, {data[0].userName}</h2>
      </>
    );
  };

  return (
    <>
      <h1>Dashboard</h1>
      {renderTable()}
    </>
  );
};

export default Dashboard;
