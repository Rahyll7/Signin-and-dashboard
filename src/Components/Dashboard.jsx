import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState();
  const [checkData, setCheckData] = useState("");
  useEffect(() => {
    axios.get("http://localhost:9000/contact").then((res) => {
      console.log(res.data, "Dashboard check");
      res.data.map((i) => {
        setCheckData(i);
        console.log(i);
      });
    });
  }, []);

  const renderTable = () => {
    return (
      <>
        {checkData.map((i) => {
          console.log(i);
        })}
      </>
    );
  };

  return (
    <>
      <h1>Dashboard</h1>
      {/* {renderTable()} */}
    </>
  );
};

export default Dashboard;
