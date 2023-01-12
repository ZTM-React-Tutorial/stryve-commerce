import { Link } from "react-router-dom";
import "./hero.styles.scss";
const Hero = (props) => {
  const {
    headingPrimary,
    heroDesc,
    heroBtnTxt,
    custImgs,
    custImgDesc,
    heroImg,
  } = props.details;
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">{headingPrimary}</h1>
          <p className="hero-description">{heroDesc}</p>
          <Link className="btn btn--full margin-right-sm" to="/shop">
            {heroBtnTxt}
          </Link>
          <div className="customer-img-container">
            <div className="customer-imgs">
              {custImgs.map((custImg) => {
                return <img src={custImg.src} alt={custImg.alt} />;
              })}

              {/* <img src="img/customers/Customer-02.jpeg" alt="Customers" />
              <img src="img/customers/Customer-03.jpeg" alt="Customers" />
              <img src="img/customers/Customer-04.jpeg" alt="Customers" />
              <img src="img/customers/Customer-05.jpeg" alt="Customers" />
              <img src="img/customers/Customer-06.jpeg" alt="Customers" /> */}
            </div>
            {/* dangerouslySetInnerHTML renders html elements as html elements and not as string. */}
            <p
              className="customer-img-description"
              dangerouslySetInnerHTML={{ __html: custImgDesc }}
            ></p>
          </div>
        </div>
        <div className="hero-img-box">
          <img src={heroImg.src} className="hero-img" alt={heroImg.alt} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
