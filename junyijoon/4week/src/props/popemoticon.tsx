import ghkskTdjdy from "../assets/ghkskTdjdy.gif";
import "./newemoticon.css";

function Popemoticon() {
  return (
    <li className="popemoticon">
      <span className="poprank">{1}</span>
      <div className="popart">
        <span className="product">화났어요의 화났어 ... </span>
        <span className="author">부드라미</span>
      </div>
      <a className="popemot_link">
        <img className="popimg" src={ghkskTdjdy} />
      </a>
    </li>
  );
}

export default Popemoticon;
