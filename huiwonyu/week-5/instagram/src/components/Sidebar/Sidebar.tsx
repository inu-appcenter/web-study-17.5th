import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import Profile from "../../assets/profile.png";
import Home from "../../assets/1home.svg";
import Home_dark from "../../assets/1home_d.svg";
import Search from "../../assets/2search.svg";
import Search_dark from "../../assets/2search_d.svg";
import Compass from "../../assets/3compass.svg";
import Compass_dark from "../../assets/3compass_d.svg";
import Reels from "../../assets/4reels.svg";
import Reels_dark from "../../assets/4reels_d.svg";
import Dm from "../../assets/5dm.svg";
import Dm_dark from "../../assets/5dm_d.svg";
import Notice from "../../assets/6notice.svg";
import Notice_dark from "../../assets/6notice_d.svg";
import Plus from "../../assets/7plus.svg";
import Plus_dark from "../../assets/7plus_d.svg";
import Three_Line from "../../assets/8three_line.svg";
import Three_Line_dark from "../../assets/8three_line_d.svg";
import Three_Box from "../../assets/9three_box.svg";
import Three_Box_dark from "../../assets/9three_box_d.svg";

type MenuItem = {
  to?: string;
  label: string;
  icon: string;
  icon_dark?: string;
};

const mainMenus: MenuItem[] = [
  { to: "/", label: "홈", icon: Home, icon_dark: Home_dark },
  { to: "/search", label: "검색", icon: Search, icon_dark: Search_dark },
  { to: "/compass", label: "탐색", icon: Compass, icon_dark: Compass_dark },
  { to: "/reels", label: "릴스", icon: Reels, icon_dark: Reels_dark },
  { to: "/dm", label: "메시지", icon: Dm, icon_dark: Dm_dark },
  { to: "/notice", label: "알림", icon: Notice, icon_dark: Notice_dark },
  { label: "만들기", icon: Plus }, // dark 없음
];

const bottomMenus = [
  { label: "더보기", icon: Three_Line, icon_dark: Three_Line_dark },
  { label: "그리드", icon: Three_Box, icon_dark: Three_Box_dark },
];

export default function SidebarExpanded() {
  return (
    <aside
      aria-label="사이드바"
      className="flex flex-col bg-white text-black border-r border-gray-200 h-screen"
      style={{
        width: 244,
        paddingTop: 12,
        paddingInlineStart: 12,
        paddingInlineEnd: 12,
        paddingBottom: 20,
        boxSizing: "border-box",
      }}
    >
      {/* 상단 로고 */}
      <div className="flex items-center h-18 mb-5 px-2">
        <Link to="/">
          <img src={Logo} alt="Instagram" className="h-7" />
        </Link>
      </div>

      {/* 메인 메뉴 */}
      <nav className="flex-1 flex flex-col gap-5">
        {mainMenus.map(({ to, label, icon, icon_dark }) => {
          if (to) {
            return (
              <NavLink
                key={label}
                to={to}
                aria-label={label}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-4 rounded-xl px-3 py-2 transition-colors",
                    isActive ? "hover:bg-gray-100" : "hover:bg-gray-100",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center justify-center w-6 h-6">
                      <img
                        src={isActive && icon_dark ? icon_dark : icon}
                        alt={label}
                        className={`object-contain w-6 h-6 ${label === "홈"
                          ? "scale-110"
                          : label === "메시지" && isActive
                            ? "scale-[1.2] translate-x-[2px]"
                            : ""
                          }`}
                      />
                    </div>
                    <span className="text-sm">{label}</span>
                  </>
                )}
              </NavLink>
            );
          } else {
            return (
              <div
                key={label}
                className="flex items-center gap-4 rounded-xl px-3 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <div className="flex items-center justify-center w-6 h-6">
                  <img src={icon} alt={label} className="w-6 h-6 object-contain" />
                </div>
                <span className="text-sm">{label}</span>
              </div>
            );
          }
        })}

        {/* 프로필 */}
        <NavLink
          to="/profile"
          aria-label="프로필"
          className={({ isActive }) =>
            [
              "flex items-center gap-4 rounded-xl px-3 py-2 transition-colors",
              isActive ? "hover:bg-gray-100" : "hover:bg-gray-100",
            ].join(" ")
          }
        >
          <div className="flex items-center justify-center w-6 h-6">
            <img
              src={Profile}
              alt="프로필"
              className="w-6 h-6 rounded-full object-cover"
            />
          </div>
          <span className="text-sm">프로필</span>
        </NavLink>
      </nav>

      {/* 하단 메뉴 */}
      <div className="mt-auto flex flex-col gap-3 pt-6">
        {bottomMenus.map(({ label, icon }) => (
          <div
            key={label}
            className="flex items-center gap-4 rounded-xl px-3 py-2 hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center justify-center w-6 h-6">
              <img src={icon} alt={label} className="w-6 h-6 object-contain" />
            </div>
            <span className="text-sm">{label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
