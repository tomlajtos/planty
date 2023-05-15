export const SquareButton = ({ type, text, className, clickFn }) => {
  const fixedClasses =
    "mx-2 px-4 py-1 w-fit h-fit rounded-full shadow-md text-2xl text-slate-800";
  const classNames = fixedClasses + " " + className;
  return (
    <button className={classNames} type={type} onClick={clickFn}>
      {text}
    </button>
  );
};
