import { Button } from "./ui/Button"
export const PlantForm = ({ submitFn }) => {
  return (
    <form className="p-4 mx-auto my-4 flex flex-col gap-3 items-tart text-left border border-slate-500 rounded-2xl max-w-md" onSubmit={submitFn}>
      <div className="w-full grid grid-cols-6 grid-rows-1">
        <label htmlFor="name" className="col-span-2">Name: </label>
        <input id="name" className="col-span-4 bg-slate-100 w-full max-w-md border border-black rounded-full" name="name" type="text" />
      </div>
      <div className="w-full grid grid-cols-6 grid-rows-1">
        <label htmlFor="sciName" className="col-span-2">Scientific name: </label>
        <input id="sciName" className="col-span-4 bg-slate-100 w-full max-w-md border border-black rounded-full" name="name" type="text" />
      </div>
      <label>
        Date of purchase: <input type="date" name="purchaseDate" />
      </label>
      <Button className="border-2 border-green-600" type={"submit"} text={"Add"} />
    </form>
  );
};
