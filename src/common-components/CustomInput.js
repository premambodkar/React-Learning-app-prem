const CustomInput = (props) => {
  const customClass = `${props.class}`;
  return (
    <div>
      <input
        id={props.id}
        name={props.name}
        className={customClass}
        type={props.type}
      />
    </div>
  );
};

export default CustomInput;
