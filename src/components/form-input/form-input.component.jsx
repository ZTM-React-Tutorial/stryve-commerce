import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  //   console.log(otherProps);
  return (
    <div className="group">
      {/* need to be in this order for styling to work.. check scss */}
      <input className="form-input" {...otherProps} />
      {/* if label exists */}
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
