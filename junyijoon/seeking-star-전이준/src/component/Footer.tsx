import { TEXT } from "../constants/text";
import "../css/main.css";
function Footer() {
  return (
    <>
      <span className="detailText">{TEXT.COPYRIGHT}</span>
      <span>
        <span className="inform detailText cursor">
          {TEXT.TERMS_OF_SERVICE}
        </span>
        <span className="inform detailText cursor">{TEXT.PRIVACY_POLICY}</span>
        <span className="inform detailText cursor">
          {TEXT.CUSTOMER_SUPPORT}
        </span>
      </span>
    </>
  );
}

export default Footer;
