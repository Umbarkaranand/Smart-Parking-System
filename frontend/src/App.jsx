import Home from "./Screens/Home";
import About from "./Screens/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Resgistration } from "./Screens/Resgistration";
import { Singin } from "./Screens/Singin";
import { MainParking } from "./Screens/MainParking";
import { ParkingRegistration } from "./Components/ParkingRegistration";
import { ParkingSlots } from "./Components/ParkingSlots";
import { AdminstratorPanel } from "./Screens/AdminstratorPanel";


function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/registration" element={<Resgistration />}></Route>
            <Route exact path="/signin" element={<Singin />}></Route>
            <Route exact path="/mainparking" element={<MainParking />}></Route>
            <Route exact path="/parkingregistration" element={<ParkingRegistration />}></Route>
            <Route exact path="/parkingslots" element={<ParkingSlots />}></Route> 
            <Route exact path="/adminstratorpanel" element={<AdminstratorPanel/>}></Route>

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
