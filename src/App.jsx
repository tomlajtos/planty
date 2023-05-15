//TODO: App renders multiple time, learn about it and solve it
import { useState, useEffect } from "react";
import "./App.css";
import { PlantList } from "./components/PlantList.jsx";
import { Button } from "./components/ui/Button";
import { SquareButton } from "./components/ui/SquareButton";
import { PlantForm } from "./components/PlantForm";

const data_url = "http://localhost:8080/plants";

function App() {
  console.log("App render");
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    let ignore = false;
    const getPlantData = async (url) => {
      try {
        const response = await fetch(url);
        if (!ignore) {
          setPlants(await response.json());
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPlantData(data_url);
    return () => {
      ignore = true;
    };
  }, []);
  // console.log("plants after fetch", plants)
  // console.log(plants);
  return (
    <div className="App py-4 px-2">
      <h1 className="text-3xl font-bold mb-4">Plant[Y]</h1>
      <div className="mx-auto py-3 text-2xl align-center mb-4 h-16 w-full max-w-5xl border border-zinc-200">
        <SquareButton
          className="bg-white hover:shadow-md hover:shadow-green-300 hover:ring-1 ring-green-500"
          type={"button"}
          text={"add plant"}
          clickFn={() => console.log("CLICK")}
        />
        <SquareButton
          className="bg-white hover:shadow-md hover:shadow-red-400 hover:ring-1 ring-red-600"
          type={"button"}
          text={"remove"}
          clickFn={() => console.log("CLICK")}
        />
      </div>
      {plants && <PlantList plants={plants} />}
      {/* <PlantForm
      //   submitFn={(e) => {
      //     e.preventDefault();
      //     console.log("form submitted");
      //   }}
      // /> */}
    </div>
  );
}

export default App;
