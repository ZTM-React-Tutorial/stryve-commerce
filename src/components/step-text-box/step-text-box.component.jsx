import "./step-text-box.styles.scss";

const StepTextBox = (props) => {
  const { stepNumber, stepHeading, stepDescription } = props;
  return (
    <div className="step-text-box">
      <p className="step-number">{stepNumber}</p>
      <h3 className="heading-tertiary">{stepHeading}</h3>
      <p className="step-description">{stepDescription}</p>
    </div>
  );
};

export default StepTextBox;
