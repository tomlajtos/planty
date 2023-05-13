export const SquareButton = ({ type, text, className, clickFn }) => {
  const fixedClasses = "mx-2 w-11 h-11 rounded-lg text-3xl text-white";
  const classNames = fixedClasses + " " + className;
  console.log(classNames);
  return (
    <button className={classNames} type={type} onClick={clickFn}>
      {text}
    </button>
  );
};
