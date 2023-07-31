import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./Components/SignIn";
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />}></Route>
          <Route path="/dash" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
