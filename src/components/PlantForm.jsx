import { Button } from "./ui/Button";
import { FormTextInput } from "./ui/FormTextInput";

export const PlantForm = ({ submitFn }) => {
  return (
    <form
      className="p-4 mx-auto my-4 flex flex-col gap-3 items-tart text-left border border-slate-500 rounded-2xl max-w-md"
      onSubmit={submitFn}
    >
      <FormTextInput
        htmlFor={"name"}
        labelText={"Name: "}
        id={"name"}
        name={"name"}
        changeFn={(e) => console.log(e.target.value)}
      />
      <FormTextInput
        htmlFor={"sciName"}
        labelText={"Scientific Name: "}
        id={"sciName"}
        name={"sciName"}
        changeFn={(e) => console.log(e.target.value)}
      />
      <FormTextInput
        htmlFor={"nameT"}
        labelText={"Text input test: "}
        id={"nameT"}
        name={"nameT"}
        changeFn={(e) => console.log(e.target.value)}
      />
      <label>
        Date of purchase: <input type="date" name="purchaseDate" />
      </label>
      <Button
        className="border-2 border-green-600"
        type={"submit"}
        text={"Add"}
      />
    </form>
  );
};
