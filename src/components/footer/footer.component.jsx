import { Link } from "react-router-dom";
import { LogoInstagram, LogoFacebook, LogoTwitter } from "react-ionicons";
import FooterNavColumn from "../footer-nav-column/footer-nav-column.component";
import "./footer.styles.scss";

const footerLinkElements = [
  {
    footerHeading: "Account",
    footerLinks: [
      {
        text: "Create account",
        toLink: "/",
      },
      {
        text: "Sign in",
        toLink: "/",
      },
      {
        text: "iOS app",
        toLink: "/",
      },
      {
        text: "Android app",
        toLink: "/",
      },
    ],
  },
  {
    footerHeading: "Company",
    footerLinks: [
      {
        text: "About Conscious Fashion",
        toLink: "/",
      },
      {
        text: "For Business",
        toLink: "/",
      },
      {
        text: "Partners",
        toLink: "/",
      },
      {
        text: "Careers",
        toLink: "/",
      },
    ],
  },
  {
    footerHeading: "Resources",
    footerLinks: [
      {
        text: "Help center",
        toLink: "/",
      },
      {
        text: "Privacy & terms",
        toLink: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--5-col">
        <div className="logo-col">
          <a href="#">
            <div className="logo-container">
              <img src="img/logo/logo.jpg" alt="Isheera Dias" />
            </div>
          </a>
          <ul className="social-links">
            <li>
              <LogoInstagram className="social-icon" />
            </li>
            <li>
              <LogoFacebook
                className="social-icon"
                // onClick={alert("Facebook Page")}
              />
            </li>
            <li>
              <LogoTwitter
                className="social-icon"
                // onClick={alert("Twitter Page")}
              />
            </li>
          </ul>
          <p className="copyright">
            Copyright &copy; 2023 by Conscious Fashion, Inc. All rights
            reserved.
          </p>
        </div>
        <div className="address-col">
          <p className="footer-heading">Contact Us</p>
          <address className="contacts">
            <p>Near Habitat, Opposite Martin, Sieasta, Parra, GOA</p>
            <p>
              <Link className="footer-link" to="tel:+917719994201">
                +91 7719994201
              </Link>
              <br />
              <Link className="footer-link" to="mailto:isheeradias0@gmail.com">
                isheeradias0@gmail.com
              </Link>
            </p>
          </address>
        </div>
        <FooterNavColumn
          footerHeading={footerLinkElements[0].footerHeading}
          footerLinks={footerLinkElements[0].footerLinks}
        />
        <FooterNavColumn
          footerHeading={footerLinkElements[1].footerHeading}
          footerLinks={footerLinkElements[1].footerLinks}
        />
        <FooterNavColumn
          footerHeading={footerLinkElements[2].footerHeading}
          footerLinks={footerLinkElements[2].footerLinks}
        />
      </div>
    </footer>
  );
};

export default Footer;
