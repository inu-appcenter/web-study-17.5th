const StatueMessage = () => {
  const Users = [
    { Message: 'Hello, World', UserName: '이준' },
    { Message: '안녕', UserName: '민지' },
    { Message: 'Hi', UserName: '형준' },
    { Message: '이힝', UserName: '형민' },
    { Message: '야호', UserName: '지민' },
    { Message: '장문 텍스트 줄바꿈 테스트', UserName: '준희' },
  ];
  return (
    <>
      {Users.map((user, index) => (
        <div key={index} className="DMMainStatusMessageFrame">
          <div className="DMMainStatusMessageText">{user.Message}</div>
          <div className="DMMainStatusMessageProfile">
            <img
              className="DMMainStatusMessageProfileImg"
              src="https://scontent-icn2-1.xx.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c379.0.1290.1290a_dst-jpg_s200x200_tt6&_nc_cat=1&ccb=1-7&_nc_sid=7565cd&_nc_ohc=CSiwedmKhNAQ7kNvwHA5Xxc&_nc_oc=AdlP2Iv74mo8WQ6WCDHhgCI5zB4yXmN8lUPCQUD0gqtjEMMOc4OCqsQ0mcBEegz98Zo&_nc_zt=24&_nc_ht=scontent-icn2-1.xx&oh=00_Afj_iwHj9qWBt3fAqTeQYWuDQPzufWQpFrjtcnetML0nNg&oe=691F14D9"
            />
          </div>
          <div className="StatueMessageusername">{user.UserName}</div>
        </div>
      ))}
    </>
  );
};

export default StatueMessage;
