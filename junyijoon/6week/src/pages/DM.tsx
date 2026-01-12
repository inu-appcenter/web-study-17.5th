import SideBar from '../components/SideBar';
import Friends from '../components/DM/Friends';
import { useState } from 'react';
import StatusMessage from '../components/DM/StatusMessage';

const DM = () => {
  const [input, setInput] = useState('');
  const [messsage, setMesssage] = useState<{ role: string; content: string }[]>(
    []
  );
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const Profile = () => {
    window.location.href = 'https://www.instagram.com/rpdmfma_06/';
  };
  const Sender = async () => {
    if (!input.trim()) return;

    const MyMessage = { role: 'me', content: input };
    const YourMessage = { role: 'you', content: input };
    setMesssage((prev) => [...prev, MyMessage, YourMessage]);
    setInput('');
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
              <button className="DMMainNameUserName">{'냥냥콩떡'}</button>
              <svg
                className="hover"
                aria-label="아래쪽 V자형 아이콘"
                fill="currentColor"
                height="12"
                role="img"
                viewBox="0 0 24 24"
                width="12"
              >
                <path d="M12 17.502a1 1 0 0 1-.707-.293l-9-9.004a1 1 0 0 1 1.414-1.414L12 15.087l8.293-8.296a1 1 0 0 1 1.414 1.414l-9 9.004a1 1 0 0 1-.707.293Z"></path>
              </svg>
            </span>
            <svg
              className="imghovering"
              aria-label="새로운 메시지"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <path
                d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="16.848"
                x2="20.076"
                y1="3.924"
                y2="7.153"
              ></line>
            </svg>
          </div>
        </div>
        <div className="DMMainSearch">
          <label className="DMMainSearchDiv">
            <svg
              className="DMMainSearchimg"
              aria-label="검색"
              fill="currentColor"
              height="16"
              role="img"
              viewBox="0 0 24 24"
              width="16"
            >
              <path
                d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="16.511"
                x2="22"
                y1="16.511"
                y2="22"
              ></line>
            </svg>
            <input className="DMMainSearchText" placeholder="검색"></input>
          </label>
        </div>
        <div className="DMMainStatusMessage">
          <StatusMessage />
        </div>
        <div className="DMMainDM">
          <div className="DMMainDiv">
            <h1 className="DMMainDivText">{'메시지'}</h1>
            <a className="DMMainDivLinkText hover">{'요청'}</a>
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
            <div className="DMTalkingTopFriendprofileContent" onClick={Profile}>
              <img
                className="DMTalkingTopFriendprofileImg"
                src="https://scontent-icn2-1.xx.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c379.0.1290.1290a_dst-jpg_s200x200_tt6&_nc_cat=1&ccb=1-7&_nc_sid=7565cd&_nc_ohc=CSiwedmKhNAQ7kNvwHA5Xxc&_nc_oc=AdlP2Iv74mo8WQ6WCDHhgCI5zB4yXmN8lUPCQUD0gqtjEMMOc4OCqsQ0mcBEegz98Zo&_nc_zt=24&_nc_ht=scontent-icn2-1.xx&oh=00_Afj_iwHj9qWBt3fAqTeQYWuDQPzufWQpFrjtcnetML0nNg&oe=691F14D9"
              />
              {/* {online ? <div className="online" /> : <></>} */}
              <div className="DMTalkingTopFriendprofileContentSet">
                <span className="DMTalkingTopFriendprofileContentName">
                  {'김밥'}
                  {'님'}
                </span>
                <span className="DMTalkingTopFriendprofileContentText">
                  {'최근 활동 : 5분 전'}
                </span>
              </div>
            </div>
            {/* 밑에 있는 내용도 온전히 처리되면 맵핑으로 처리할 계획입니다 */}
            <div className="utill">
              <svg
                aria-label="음성 통화"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M18.227 22.912c-4.913 0-9.286-3.627-11.486-5.828C4.486 14.83.731 10.291.921 5.231a3.289 3.289 0 0 1 .908-2.138 17.116 17.116 0 0 1 1.865-1.71 2.307 2.307 0 0 1 3.004.174 13.283 13.283 0 0 1 3.658 5.325 2.551 2.551 0 0 1-.19 1.941l-.455.853a.463.463 0 0 0-.024.387 7.57 7.57 0 0 0 4.077 4.075.455.455 0 0 0 .386-.024l.853-.455a2.548 2.548 0 0 1 1.94-.19 13.278 13.278 0 0 1 5.326 3.658 2.309 2.309 0 0 1 .174 3.003 17.319 17.319 0 0 1-1.71 1.866 3.29 3.29 0 0 1-2.138.91 10.27 10.27 0 0 1-.368.006Zm-13.144-20a.27.27 0 0 0-.167.054A15.121 15.121 0 0 0 3.28 4.47a1.289 1.289 0 0 0-.36.836c-.161 4.301 3.21 8.34 5.235 10.364s6.06 5.403 10.366 5.236a1.284 1.284 0 0 0 .835-.36 15.217 15.217 0 0 0 1.504-1.637.324.324 0 0 0-.047-.41 11.62 11.62 0 0 0-4.457-3.119.545.545 0 0 0-.411.044l-.854.455a2.452 2.452 0 0 1-2.071.116 9.571 9.571 0 0 1-5.189-5.188 2.457 2.457 0 0 1 .115-2.071l.456-.855a.544.544 0 0 0 .043-.41 11.629 11.629 0 0 0-3.118-4.458.36.36 0 0 0-.244-.1Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="DMTalkingMid">
          {messsage.map((msg, idx) => (
            <div>
              {msg.role === 'me' ? (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <div key={idx} className={'DMTalkingMyMessage'}>
                    {msg.content}
                  </div>
                </div>
              ) : (
                <div
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}
                >
                  <img
                    className="DMTalkingYourMessageimg"
                    src="https://scontent-icn2-1.xx.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c379.0.1290.1290a_dst-jpg_s200x200_tt6&_nc_cat=1&ccb=1-7&_nc_sid=7565cd&_nc_ohc=CSiwedmKhNAQ7kNvwHA5Xxc&_nc_oc=AdlP2Iv74mo8WQ6WCDHhgCI5zB4yXmN8lUPCQUD0gqtjEMMOc4OCqsQ0mcBEegz98Zo&_nc_zt=24&_nc_ht=scontent-icn2-1.xx&oh=00_Afj_iwHj9qWBt3fAqTeQYWuDQPzufWQpFrjtcnetML0nNg&oe=691F14D9"
                  />
                  <div key={idx} className="DMTalkingYourMessage">
                    {msg.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="DMTalkingBottom">
          <div className="DMTalkingBottomTextDiv">
            <div className="DMTalkingBottomLeftImg">
              <svg
                className="imghovering"
                aria-label="이모티콘 선택"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
              </svg>
            </div>
            <input
              className="DMTalkingBottomText"
              placeholder="메시지 입력..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  Sender();
                }
              }}
            ></input>
            {input ? (
              <button className="sender" onClick={Sender}>
                {'Send'}
              </button>
            ) : (
              <>
                <div className="DMTalkingBottomRightImg">
                  <svg
                    className="imghovering"
                    aria-label="음성 클립"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path
                      d="M19.5 10.671v.897a7.5 7.5 0 0 1-15 0v-.897"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="12"
                      x2="12"
                      y1="19.068"
                      y2="22"
                    ></line>
                    <path
                      d="M12 15.745a4 4 0 0 1-4-4V6a4 4 0 0 1 8 0v5.745a4 4 0 0 1-4 4Z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="8.706"
                      x2="15.104"
                      y1="22"
                      y2="22"
                    ></line>
                  </svg>
                </div>
                <div className="DMTalkingBottomRightImg">
                  <svg
                    className="imghovering"
                    aria-label="사진 또는 동영상 추가"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path
                      d="M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="m2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                    <path
                      d="M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                </div>
                <div className="DMTalkingBottomRightImg">
                  <svg
                    className="imghovering"
                    aria-label="GIF 또는 스티커를 선택하세요"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path
                      d="M13.11 22H7.416A5.417 5.417 0 0 1 2 16.583V7.417A5.417 5.417 0 0 1 7.417 2h9.166A5.417 5.417 0 0 1 22 7.417v5.836a2.083 2.083 0 0 1-.626 1.488l-6.808 6.664A2.083 2.083 0 0 1 13.11 22Z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                    <circle cx="8.238" cy="9.943" r="1.335"></circle>
                    <circle cx="15.762" cy="9.943" r="1.335"></circle>
                    <path
                      d="M15.174 15.23a4.887 4.887 0 0 1-6.937-.301"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                    <path
                      d="M22 10.833v1.629a1.25 1.25 0 0 1-1.25 1.25h-1.79a5.417 5.417 0 0 0-5.417 5.417v1.62a1.25 1.25 0 0 1-1.25 1.25H9.897"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                </div>
                <div className="DMTalkingBottomRightImg">
                  <svg
                    className="imghovering"
                    aria-label="좋아요"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                  </svg>
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
