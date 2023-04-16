export const Button = ({ type, text, className, clickFn }) => {
  return (
    <button className={className} type={type} onClick={clickFn}>{text}</button>
  );
};
