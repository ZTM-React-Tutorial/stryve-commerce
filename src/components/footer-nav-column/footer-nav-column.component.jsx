import { Link } from "react-router-dom";
import "./footer-nav-column.styles.scss";

const FooterNavColumn = (props) => {
  const { footerHeading, footerLinks } = props;
  return (
    <div className="nav-col">
      <p className="footer-heading">{footerHeading}</p>
      <ul className="footer-nav">
        {footerLinks.map((footerLink) => {
          let { text, toLink } = footerLink;
          console.log("Text" + text);
          return (
            <li>
              <Link className="footer-link" to={toLink}>
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterNavColumn;
