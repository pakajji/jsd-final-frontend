import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
//import Main from "../Main/index.jsx";
import Signup from "../Signup/signup.jsx";
import Login from "../Login/login.jsx";
import Navbar from "../Navbar/Navbar";
import Overview from "../Overview/Overview";
import ActivitiesForm from "../ActivitiesForm/ActivitiesForm";
import PersonalProfile from "../PersonalProfile/PersonalProfile";

function App() {
  //const user = localStorage.getItem("token");

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/*user && <Route path="/" exact element={<Main />} />*/}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" exact element={<Navigate replace to="/login" />} />
        <Route path="/overview" element={<Overview />}></Route>
        <Route path="/add-activity" element={<ActivitiesForm />}></Route>
        <Route path="/profile" element={<PersonalProfile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
