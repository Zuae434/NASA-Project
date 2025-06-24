import APOD from "./components/APOD-Section/APOD";
import NavBar from "./components/Nav-Bar/NavBar";
import RoverCollection from "./components/Mars-Rover/RoverCollection";
import "./index.css";

function App() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div>
        <APOD />
      </div>
      <div className="flex relative">
        <RoverCollection />
      </div>
    </>
  );
}

export default App;
