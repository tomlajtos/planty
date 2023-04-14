export const PlantCard = ({ plant }) => {
  return (
    <li className="flex-col items-center p-4 bg-slate-100 w-full max-w-xs h-96 rounded-xl">
      <h2 className="Name text-xl mb-4 font-semibold">{plant.name}</h2>
      <img className="PlantPic h-20 w-20 my-2 mx-auto border-2 rounded-xl" src={plant.img} alt={plant.alt} />
      <p className="PlantInfo">{plant.info}</p>
    </li>
  );
}
