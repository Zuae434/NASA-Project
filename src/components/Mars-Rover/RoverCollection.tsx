import Particles from "../../assets/Particles";
import Selection from "./Selection";

const MarsRoverCollection = () => {
  return (
    <>
      <div
        style={{ width: "100%", height: "600px", position: "relative" }}
        id="MarsRoverCollection"
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={1000}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <div className="absolute justify-center items-center top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex m-w-md flex-col items-center justify-center gap-[100px]">
          <h1 className="text-gradient text-center self-stretch font-[IBM Plex Mono] text-4xl not-italic font-bold leading-[normal]">
            Your Mars Rover Photos
          </h1>
          <div className="flex flex-row items-between justify-between gap-[30px]">
            <Selection />
          </div>
        </div>
      </div>
    </>
  );
};

export default MarsRoverCollection;
