export const FormTextInput = ({htmlFor, labelText, id, name, changeFn}) => {
  return (
    <div className="w-full grid grid-cols-6 grid-rows-1">
      <label htmlFor={htmlFor} className="col-span-2">{labelText}</label>
      <input id={id} name={name} type="text" onChange={changeFn} className="px-2 w-full max-w-md col-span-4 bg-slate-100 border border-black rounded-full"/>
    </div>
  );
}
