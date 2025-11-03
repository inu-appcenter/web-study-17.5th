import newemote1 from "../assets/dksdkwnjdy.gif";
import "./newemoticon.css";

function Newemoticon() {
  return (
    <div className="newemot_list">
      <a href="https://e.kakao.com/t/shaky-animals" className="newemot_link">
        <span className="imgspace">
          <img src={newemote1}></img>
        </span>
        <strong className="newemot_text">안아줘요의 안아...</strong>
      </a>
    </div>
  );
}

export default Newemoticon;
