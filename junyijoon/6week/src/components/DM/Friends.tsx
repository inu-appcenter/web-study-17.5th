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
          src="https://scontent-icn2-1.xx.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c379.0.1290.1290a_dst-jpg_s200x200_tt6&_nc_cat=1&ccb=1-7&_nc_sid=7565cd&_nc_ohc=CSiwedmKhNAQ7kNvwHA5Xxc&_nc_oc=AdlP2Iv74mo8WQ6WCDHhgCI5zB4yXmN8lUPCQUD0gqtjEMMOc4OCqsQ0mcBEegz98Zo&_nc_zt=24&_nc_ht=scontent-icn2-1.xx&oh=00_Afj_iwHj9qWBt3fAqTeQYWuDQPzufWQpFrjtcnetML0nNg&oe=691F14D9"
        />
        {online ? <div className="online" /> : <></>}
        <div className="DMMainDMFriendprofileContentSet">
          <span className="DMMainDMFriendprofileContentName">{name}</span>
          <span className="DMMainDMFriendprofileContentText">{content}</span>
        </div>
      </div>
    </div>
  );
};
export default Friends;
