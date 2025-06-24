import "../../index.css";
import NavButton from "./NavButton";

function NavBar() {
  return (
    <>
      <nav>
        <div className="nav-gradient flex w-screen max-h-[80px] p-12px-352px items-center justify-center shrink-0 absolute">
          <NavButton
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M46 38C46 39.0609 45.5786 40.0783 44.8284 40.8284C44.0783 41.5786 43.0609 42 42 42H6C4.93913 42 3.92172 41.5786 3.17157 40.8284C2.42143 40.0783 2 39.0609 2 38V16C2 14.9391 2.42143 13.9217 3.17157 13.1716C3.92172 12.4214 4.93913 12 6 12H14L18 6H30L34 12H42C43.0609 12 44.0783 12.4214 44.8284 13.1716C45.5786 13.9217 46 14.9391 46 16V38Z"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 34C28.4183 34 32 30.4183 32 26C32 21.5817 28.4183 18 24 18C19.5817 18 16 21.5817 16 26C16 30.4183 19.5817 34 24 34Z"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            text="Picture of the Day"
            invertGradient
          />

          <img src="./nasa-logo.png" alt="NASA" className="NavBar-Logo" />

          <a href="#MarsRoverCollection">
            <NavButton text="Mars Rover Collection" />
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
