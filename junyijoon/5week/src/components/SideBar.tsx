import sidebartop from "../assets/sidebartop.png";
import sidebar1 from "../assets/sidebar1.png";
import sidebar2 from "../assets/sidebar2.png";
import sidebar3 from "../assets/sidebar3.png";
import sidebar4 from "../assets/sidebar4.png";
import sidebar5 from "../assets/sidebar5.png";
import sidebar6 from "../assets/sidebar6.png";
import sidebar7 from "../assets/sidebar7.png";
import sidebar8 from "../assets/sidebar8.png";
import sidebarunder1 from "../assets/sidebarunder1.png";
import sidebarunder2 from "../assets/sidebarunder2.png";

const SideBar = () => {
  return (
    <div className="SideBar">
      <div className="SidebarBtn SidebarTop">
        <img src={sidebartop}></img>
      </div>

      <div className="SidebarBtn">
        <img src={sidebar1}></img>
      </div>

      <div className="SidebarBtn">
        <img src={sidebar2}></img>
      </div>

      <div className="SidebarBtn">
        <img src={sidebar3}></img>
      </div>

      <div className="SidebarBtn">
        <img src={sidebar4}></img>
      </div>

      <div className="SidebarBtn">
        <img src={sidebar5}></img>
      </div>

      <div className="SidebarBtn">
        <img src={sidebar6}></img>
      </div>

      <div className="SidebarBtn">
        <img src={sidebar7}></img>
      </div>

      <div className="SidebarBtn">
        <img src={sidebar8}></img>
      </div>
      <div className="SidebarSpace" />
      <div className="SidebarBtn">
        <img src={sidebarunder1}></img>
      </div>

      <div className="SidebarBtn">
        <img src={sidebarunder2}></img>
      </div>
    </div>
  );
};
export default SideBar;
