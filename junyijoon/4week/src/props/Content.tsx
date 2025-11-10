import banner1 from "../assets/tabopen.gif";
import RkajrdjTdjdy from "../assets/RkajrdjTdjdy.gif";
import "./content.css";
import radiodefault from "../assets/radiodefault.png";
import radiodecheck from "../assets/radiocheck.png";
import ref from "../assets/href.png";
import Newemoticon from "./newemoticon";
import Popemoticon from "./popemoticon";
function Content() {
  return (
    <div className="Content">
      <span>
        <div className="banner">
          <img src={banner1} />
        </div>
        <div className="bannerbottom">
          <img src={radiodefault} className="bannerbutton" />
          <img src={radiodecheck} className="bannerbutton" />
        </div>
      </span>
      <div className="emoticonintro new">
        <h3>
          <a href="https://e.kakao.com/item/new">신규 이모티콘</a>
          <img src={ref}></img>
        </h3>
        <div className="newemote">
          <Newemoticon />
          <Newemoticon />
          <Newemoticon />
          <Newemoticon />
          <Newemoticon />
          <Newemoticon />
          <Newemoticon />
          <Newemoticon />
          <Newemoticon />
          <Newemoticon />
        </div>
      </div>
      <div className="emoticonintro pop">
        <h3>
          <a href="https://e.kakao.com/item/hot">인기 이모티콘</a>
          <img src={ref}></img>
        </h3>
        <ol className="popemote1">
          <Popemoticon />
          <Popemoticon />
          <Popemoticon />
          <Popemoticon />
          <Popemoticon />
        </ol>
        <ol className="popemote2">
          <Popemoticon />
          <Popemoticon />
          <Popemoticon />
          <Popemoticon />
          <Popemoticon />
        </ol>
      </div>
      <div className="emoticonintrostyle">
        <div className="styleemoticon">
          <h3 className="style">
            <a href="https://e.kakao.com/item/hot">스타일</a>
            <img src={ref}></img>
          </h3>
          <div className="styleemote">
            <div className="style_link">
              <strong className="tag">#행복해요</strong>
              <span className="round_box">#날치에요</span>
            </div>
            <div className="style_emote_list">
              <a className="style_emote_link">
                <img className="style_img" src={RkajrdjTdjdy} />
              </a>
            </div>
            <div className="style_emote_list">
              <a className="style_emote_link">
                <img className="style_img" src={RkajrdjTdjdy} />
              </a>
            </div>
            <div className="style_emote_list">
              <a className="style_emote_link">
                <img className="style_img" src={RkajrdjTdjdy} />
              </a>
            </div>
            <div className="style_emote_list">
              <a className="style_emote_link">
                <img className="style_img" src={RkajrdjTdjdy} />
              </a>
            </div>
            <div className="style_emote_list">
              <a className="style_emote_link">
                <img className="style_img" src={RkajrdjTdjdy} />
              </a>
            </div>
          </div>
          <div className="styleemote">
            <div className="style_link">
              <strong className="tag">#행복해요</strong>
              <span className="round_box">#날치에요</span>
            </div>
            <div className="style_emote_list">
              <a className="style_emote_link">
                <img className="style_img" src={RkajrdjTdjdy} />
              </a>
            </div>
            <div className="style_emote_list">
              <a className="style_emote_link">
                <img className="style_img" src={RkajrdjTdjdy} />
              </a>
            </div>
            <div className="style_emote_list">
              <a className="style_emote_link">
                <img className="style_img" src={RkajrdjTdjdy} />
              </a>
            </div>
            <div className="style_emote_list">
              <a className="style_emote_link">
                <img className="style_img" src={RkajrdjTdjdy} />
              </a>
            </div>
            <div className="style_emote_list">
              <a className="style_emote_link">
                <img className="style_img" src={RkajrdjTdjdy} />
              </a>
            </div>
          </div>
          <div className="styleemote">
            <div className="style_link">
              <strong className="tag">#행복해요</strong>
              <span className="round_box">#날치에요</span>
            </div>
            <div className="style_emote_list">
              <a className="style_emote_link">
                <img className="style_img" src={RkajrdjTdjdy} />
              </a>
            </div>
            <div className="style_emote_list">
              <a className="style_emote_link">
                <img className="style_img" src={RkajrdjTdjdy} />
              </a>
            </div>
            <div className="style_emote_list">
              <a className="style_emote_link">
                <img className="style_img" src={RkajrdjTdjdy} />
              </a>
            </div>
            <div className="style_emote_list">
              <a className="style_emote_link">
                <img className="style_img" src={RkajrdjTdjdy} />
              </a>
            </div>
            <div className="style_emote_list">
              <a className="style_emote_link">
                <img className="style_img" src={RkajrdjTdjdy} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
