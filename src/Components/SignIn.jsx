import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignInPage = () => {
  const inputValues = { userName: "", password: "" };
  const [data, setData] = useState(inputValues);
  const [loginData, setLoginData] = useState("");
  const [checkData, setCheckData] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    axios.get("http://localhost:9000/contact").then((res) => {
      console.log(res.data, "check");
      setLoginData(res.data);
      res.data.map((i) => {
        setCheckData(i);
      });
    });
  }, []);

  console.log(checkData.userName, "checkData");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkData.userName !== data.userName) {
      alert("Invalid user Name");
    }
    if (checkData.password !== data.password) {
      alert("Invalid user Password");
    }
    if (
      data.userName !== "" &&
      data.password !== "" &&
      checkData.password === data.password &&
      checkData.userName === data.userName
    ) {
      navigate("/dash");
    }
    if (data.userName === "" && data.password !== "") {
      alert("Enter Username");
    }
    if (data.password === "" && data.userName !== "") {
      alert("Enter password");
    } else return null;
  };

  const inputTexts = () => {
    return (
      <>
        <label>Username or Email</label>
        <input
          onChange={handleChange}
          type="text"
          name="userName"
          value={data.userName}
          placeholder="Enter the Username or email"
        ></input>
        <br></br>
        <label>Password</label>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Enter the Password"
          value={data.password}
        ></input>
        <br></br>
        <button onClick={handleSubmit}>Sign In</button>
      </>
    );
  };

  return (
    <>
      <h1>Sign In</h1>
      {inputTexts()}
    </>
  );
};

export default SignInPage;
