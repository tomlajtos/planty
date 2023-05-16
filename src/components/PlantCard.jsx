import { useState, useEffect } from "react";
import PlantStatus from "./PlantStatus";

export const PlantCard = ({ plant }) => {
  const [status, setStatus] = useState("");
  const statusUrl = `http://localhost:8080/plants/${plant.id}/status`;

  useEffect(() => {
    let ignore = false;
    const getStatus = async (url) => {
      const response = await fetch(url);
      const result = await response.json();
      setStatus(result);
    };
    getStatus(statusUrl);
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <li className="flex-col items-center p-4 bg-white shadow-lg w-full max-w-xs h-96 rounded-xl">
      <h2 className="Name text-xl mb-4 font-semibold">{plant.name}</h2>
      <img
        className="PlantPic h-20 w-20 my-2 mx-auto border border-stone-400 rounded-xl"
        src={plant.img_url}
        alt={plant.img_alt}
      />
      <ul>
        {/*{status.map((info) => (
          <CareInfo key={info.id} info={info} />
        ))}*/}
        <PlantStatus info={status} />
      </ul>
    </li>
  );
};
