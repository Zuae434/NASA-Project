import { useEffect, useState } from "react";
import RollingGallery from "../../assets/RollingGallery";
import { Controller, useForm } from "react-hook-form";

type Rover = {
  earth_date: string;
  photos: {
    camera: {
      name: string;
    };
    img_src: string;
  }[];
};

const Selection = () => {
  const { control } = useForm();
  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const [roverName, setRoverName] = useState("");
  const handleRoverChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRoverName(event.target.value);
  };

  const [rover, setRover] = useState<Rover>();
  useEffect(() => {
    const fetchRover = async () => {
      const response = await fetch(`
        https://api.nasa.gov/mars-photos/api/v1/rovers/${
          roverName ? roverName : "Curiosity"
        }/photos?earth_date=${selectedDate}&api_key=${
        import.meta.env.VITE_NASA_API_KEY
      }
        `);
      const result: Rover = await response.json();
      setRover(result);
    };
    fetchRover();
  }, [selectedDate, roverName]);

  return (
    <>
      <div className="flex flex-row justify-between gap-[30px]">
        <select
          value={roverName}
          onChange={handleRoverChange}
          className="button-box-shadow h-[48px] w-[240px] flex shadow-xl-30 shrink-0 text-[#f9f8fc] font-[Inter] text-[16px] text-center"
          style={{
            background: `linear-gradient(90deg, rgba(5, 5, 5, 0.5) 0%, rgba(135, 47, 156, 0.5) 50%, rgba(240, 163, 228, 0.5) 100%`,
          }}
        >
          <option value="Curiosity">Curiosity</option>
          <option value="Opportunity">Opportunity</option>
          <option value="Spirit">Spirit</option>
        </select>
        <Controller
          control={control}
          name="date"
          render={() => (
            <input
              value={selectedDate}
              onChange={handleDateChange}
              type="date"
              className="button-box-shadow h-[48px] w-[240px] flex shadow-xl-30 shrink-0 text-[#f9f8fc] font-[Inter] text-[16px] items-center justify-center HHHHH"
              style={{
                background: `linear-gradient(270deg, rgba(5, 5, 5, 0.5) 0%, rgba(135, 47, 156, 0.5) 50%, rgba(240, 163, 228, 0.5) 100%`,
              }}
            />
          )}
        />
      </div>
      <div className="absolute top-[250%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <RollingGallery
          autoplay={true}
          pauseOnHover={false}
          images={rover?.photos.slice(0, 10).map((photo) => photo.img_src)}
          cameraName={
            rover?.photos[0].camera.name
              ? rover.photos[0].camera.name
              : "Camera Undefined"
          }
        />
      </div>
    </>
  );
};

export default Selection;
