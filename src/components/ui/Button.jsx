export const Button = ({ type, text, className, clickFn }) => {
  const fixedClasses = "px-4 max-w-fit rounded-lg";
  const classNames = fixedClasses + " " + className;
  return (
    <button className={classNames} type={type} onClick={clickFn}>
      {text}
    </button>
  );
};
