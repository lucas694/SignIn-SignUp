import './App.css';
import Login from "./components/Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignUp from "./components/Sign In/SignUp";
import SignIn from "./components/SignIn/SignIn";
import MyProfile from "./components/MyProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login LoginPage={<SignUp/>}/>}/>
          <Route path="/SignIn" element={<Login LoginPage={<SignIn/>}/>}/>
          <Route path="/SignUp" element={<Login LoginPage={<SignUp/>}/>}/>
          <Route path="/Profile" element={<MyProfile />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
