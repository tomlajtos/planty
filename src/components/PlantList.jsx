import { PlantCard } from "./PlantCard.jsx";

export const PlantList = ({ plants }) => {
  return (
    <ul className="mx-auto p-4 flex flex-row flex-wrap gap-4 justify-center w-full min-w-[400px] max-w-5xl ">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
};
