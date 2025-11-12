import SideBar from "../components/SideBar";
import newmessage from "../assets/newmessage.png";
import underarrow from "../assets/underarrow.png";
import searchimg from "../assets/sidebar2.png";
import Friends from "../components/DM/Friends";
import bottomleft from "../assets/bottomleft.png";
import bottomright1 from "../assets/bottomright1.png";
import bottomright2 from "../assets/bottomright2.png";
import bottomright3 from "../assets/bottomright3.png";
import bottomright4 from "../assets/bottomright4.png";
import { useState } from "react";

const DM = () => {
  const [input, setInput] = useState("");
  const [messsage, setMesssage] = useState<{ role: string; content: string }[]>(
    []
  );
  const Sender = async () => {
    if (!input.trim()) return;

    const MyMessage = { role: "user", content: input };
    const YourMessage = { role: "system", content: input };
    setMesssage((prev) => [...prev, MyMessage, YourMessage]);
    setInput("");
  };

  return (
    <div className="DM">
      {/* 사이드바 */}
      <SideBar />
      {/* 메인 */}
      <div className="DMMain">
        <div>
          <div className="DMMainName">
            <span>
              <button className="DMMainNameUserName">{"냥냥콩떡"}</button>
              <img className="DMMainNameUnderarrow" src={underarrow} />
            </span>
            <img className="DMMainNameImg" src={newmessage} />
          </div>
        </div>
        <div className="DMMainSearch">
          <label className="DMMainSearchDiv">
            <img src={searchimg}></img>
            <input className="DMMainSearchText"></input>
          </label>
        </div>
        <div className="DMMainStatusMessage">
          <div className="DMMainStatusMessageFrame"></div>
        </div>
        <div className="DMMainDM">
          <div className="DMMainDiv">
            <h1 className="DMMainDivText">{"메시지"}</h1>
            <a className="DMMainDivLinkText">{"요청"}</a>
          </div>
          <div className="DMMainDMFriendprofileList">
            <Friends name="김밥" content="집가고싶다" online={true} />
            <Friends name="김민수" content="배고파" online={false} />
            <Friends name="이민지" content="졸려" online={false} />
            <Friends name="전이준" content="과?제?" online={true} />
            <Friends name="임지후" content="히히" online={false} />
            <Friends name="김민희" content="나?" online={true} />
            <Friends name="김종필" content="아무거나" online={false} />
            <Friends name="이아름" content="심심해" online={false} />
            <Friends name="박지훈" content="Code" online={false} />
            <Friends name="안지환" content="Index" online={false} />
          </div>
        </div>
      </div>
      {/* 대화창 */}
      <div className="DMTalking">
        <div className="DMTalkingTop">
          <div className="DMTalkingTopFriendprofile">
            <div className="DMTalkingTopFriendprofileContent">
              <img
                className="DMTalkingTopFriendprofileImg"
                src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c379.0.1290.1290a_dst-jpg_s200x200_tt6&_nc_cat=1&ccb=1-7&_nc_sid=7565cd&_nc_ohc=clI8XGLDaPEQ7kNvwGuXAPc&_nc_oc=Adn0-WWLPBEqMqoEK_e-zcduuvwn3bZyeiyw6h_Qu3NWeE_4QaS184IqPw3oahgoR3Q&_nc_zt=24&_nc_ht=scontent-ssn1-1.xx&oh=00_AfgNx994w5nD62Y-ggr6I6c-oJleZq3ix6du_PKvlnbTAw&oe=69161299"
              />
              {/* {online ? <div className="online" /> : <></>} */}
              <div className="DMTalkingTopFriendprofileContentSet">
                <span className="DMTalkingTopFriendprofileContentName">
                  {"김밥"}
                  {"님"}
                </span>
                <span className="DMTalkingTopFriendprofileContentText">
                  {"최근 활동 : 5분 전"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="DMTalkingMid">
          {messsage.map((msg, idx) => (
            <div
              key={idx}
              className={msg.role === "user" ? "UserMessage" : "GPTMessage"}
            >
              {msg.content}
            </div>
          ))}
        </div>
        <div className="DMTalkingBottom">
          <div className="DMTalkingBottomTextDiv">
            <div className="DMTalkingBottomLeftImg">
              <img className="DMTalkingBottomImg" src={bottomleft} />
            </div>
            <input
              className="DMTalkingBottomText"
              placeholder="메시지 입력..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
            {input ? (
              <button onClick={Sender}>{"Send"}</button>
            ) : (
              //   방금 생각났는데 전송이 영어로 되어있네요
              <>
                <div className="DMTalkingBottomRightImg">
                  <img className="DMTalkingBottomImg" src={bottomright1}></img>
                </div>
                <div className="DMTalkingBottomRightImg">
                  <img className="DMTalkingBottomImg" src={bottomright2}></img>
                </div>
                <div className="DMTalkingBottomRightImg">
                  <img className="DMTalkingBottomImg" src={bottomright3}></img>
                </div>
                <div className="DMTalkingBottomRightImg">
                  <img className="DMTalkingBottomImg" src={bottomright4}></img>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DM;
