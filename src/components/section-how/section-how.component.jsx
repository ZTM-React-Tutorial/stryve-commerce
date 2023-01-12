import StepTextBox from "../step-text-box/step-text-box.component";
import StepImageContainer from "../step-image-container/step-image-container.component";
import "./section-how.styles.scss";

const sectionHowInformation = {
  heading: "Birth of a conscious product",
  secondaryHeading:
    "Join the process of creating sustainable and ethical clothing",
  stepInformation: [
    {
      stepNumber: "01",
      stepHeading: "Eco-conscious from the start",
      stepDescription:
        "Conscious fashion starts with sourcing eco-friendly materials, such as organic cotton, recycled polyester, and plant-based fibers like bamboo and hemp.",
      imgSrc: "img/howto/cottonfields.jpg",
      altText: "cottonfields",
    },
    {
      stepNumber: "02",
      stepHeading: "Prioritizing fair labor practices in conscious fashion",
      stepDescription:
        "Conscious fashion focuses on ethical production, ensuring that all workers involved in the manufacturing process are treated fairly and paid a living wage.",
      imgSrc: "img/howto/working.jpg",
      altText: "Working Staff",
    },
    {
      stepNumber: "03",
      stepHeading: "Eco-conscious fashion choices for a greener future",
      stepDescription:
        "Conscious fashion believes in minimizing the environmental impact of the clothing. This can be achieved through energy-efficient production methods, reducing waste, and using natural dyes and finishes.",
      imgSrc: "img/howto/clothes.jpeg",
      altText: "Our Clothes",
    },
  ],
};

const SectionHow = () => {
  return (
    <section className="section-how">
      <div className="container">
        <span className="subheading">{sectionHowInformation.heading}</span>
        <h2 className="heading-secondary">
          {sectionHowInformation.secondaryHeading}
        </h2>
      </div>
      <div className="container grid grid--2-col grid--center-v">
        {sectionHowInformation.stepInformation.map((step) => {
          if (step.stepNumber % 2 === 0) {
            return (
              <>
                <StepImageContainer
                  imgSrc={step.imgSrc}
                  altText={step.altText}
                />
                <StepTextBox
                  stepNumber={step.stepNumber}
                  stepHeading={step.stepHeading}
                  stepDescription={step.stepDescription}
                />
              </>
            );
          } else {
            return (
              <>
                <StepTextBox
                  stepNumber={step.stepNumber}
                  stepHeading={step.stepHeading}
                  stepDescription={step.stepDescription}
                />
                <StepImageContainer
                  imgSrc={step.imgSrc}
                  altText={step.altText}
                />
              </>
            );
          }
        })}
      </div>
    </section>
  );
};

export default SectionHow;
