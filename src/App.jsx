import "./App.css";
import { useState, useEffect } from "react";
import { PlantList } from "./components/PlantList.jsx";
import { Button } from "./components/ui/Button";
import { SquareButton } from "./components/ui/SquareButton";
import { PlantForm } from "./components/PlantForm";

const baseUrl = "http://localhost:8080/plants";

function App() {
  console.log("App render");
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    let ignore = false;

    const getData = async (url) => {
      try {
        const response = await fetch(url);
        if (!ignore) {
          setPlants(await response.json());
          setError(false);
          console.log("yay, data");
        }
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    getData(baseUrl);
    return () => {
      ignore = true;
    };
  }, []);

  // console.log("plants after fetch", plants)
  // console.log(plants);
  return (
    <div className="App py-4 px-2 text-center ">
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
        <Button
          type={"button"}
          className={"text-xl bg-red-900 text-white shadow-md"}
          text={"test"}
        />
      </div>
      {error && (
        <h2 className="mt-8 text-2xl text-red-500">
          Something is up, please refresh...
        </h2>
      )}
      {plants ? <PlantList plants={plants} /> : <h2>Loading plant list...</h2>}
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
