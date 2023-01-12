import "./step-image-container.styles.scss";
const StepImageContainer = (props) => {
  const { imgSrc, altText } = props;
  return (
    <div className="step-img-container">
      <img src={imgSrc} className="step-img" alt={altText} />
    </div>
  );
};

export default StepImageContainer;
