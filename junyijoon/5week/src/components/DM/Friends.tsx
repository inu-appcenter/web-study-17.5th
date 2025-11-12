interface FriendsProps {
  name: string;
  content: string;
  online: boolean;
}
const Friends = ({ name, content, online }: FriendsProps) => {
  return (
    <div className="DMMainDMFriendprofile">
      <div className="DMMainDMFriendprofileContent">
        <img
          className="DMMainDMFriendprofileImg"
          src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c379.0.1290.1290a_dst-jpg_s200x200_tt6&_nc_cat=1&ccb=1-7&_nc_sid=7565cd&_nc_ohc=clI8XGLDaPEQ7kNvwGuXAPc&_nc_oc=Adn0-WWLPBEqMqoEK_e-zcduuvwn3bZyeiyw6h_Qu3NWeE_4QaS184IqPw3oahgoR3Q&_nc_zt=24&_nc_ht=scontent-ssn1-1.xx&oh=00_AfgNx994w5nD62Y-ggr6I6c-oJleZq3ix6du_PKvlnbTAw&oe=69161299"
        />
        {online ? <div className="online" /> : <></>}
        {/* 온라인 상태가 안따라감 이슈있음 
        +) GPT한테도 물어봤는데 유의미한 응답이 없네요 스터디전까지 찾아보겠습니다
        */}
        <div className="DMMainDMFriendprofileContentSet">
          <span className="DMMainDMFriendprofileContentName">{name}</span>
          <span className="DMMainDMFriendprofileContentText">{content}</span>
        </div>
      </div>
    </div>
  );
};
export default Friends;
