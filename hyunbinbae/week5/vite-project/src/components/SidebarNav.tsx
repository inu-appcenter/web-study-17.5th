import { useState } from "react";
import { useLocation } from "react-router-dom";

// 아이콘의 SVG Path
const ICON_PATHS: Record<string, string> = {
  Home: "m21.762 8.786-7-6.68a3.994 3.994 0 0 0-5.524 0l-7 6.681A4.017 4.017 0 0 0 1 11.68V19c0 2.206 1.794 4 4 4h3.005a1 1 0 0 0 1-1v-7.003a2.997 2.997 0 0 1 5.994 0V22a1 1 0 0 0 1 1H19c2.206 0 4-1.794 4-4v-7.32a4.02 4.02 0 0 0-1.238-2.894Z",
  InstagramLogo:
    "M 12 2.982 c 2.937 0 3.285 0.011 4.445 0.064 a 6.087 6.087 0 0 1 2.042 0.379 a 3.408 3.408 0 0 1 1.265 0.823 a 3.408 3.408 0 0 1 0.823 1.265 a 6.087 6.087 0 0 1 0.379 2.042 c 0.053 1.16 0.064 1.508 0.064 4.445 s -0.011 3.285 -0.064 4.445 a 6.087 6.087 0 0 1 -0.379 2.042 a 3.643 3.643 0 0 1 -2.088 2.088 a 6.087 6.087 0 0 1 -2.042 0.379 c -1.16 0.053 -1.508 0.064 -4.445 0.064 s -3.285 -0.011 -4.445 -0.064 a 6.087 6.087 0 0 1 -2.043 -0.379 a 3.408 3.408 0 0 1 -1.264 -0.823 a 3.408 3.408 0 0 1 -0.823 -1.265 a 6.087 6.087 0 0 1 -0.379 -2.042 c -0.053 -1.16 -0.064 -1.508 -0.064 -4.445 s 0.011 -3.285 0.064 -4.445 a 6.087 6.087 0 0 1 0.379 -2.042 a 3.408 3.408 0 0 1 0.823 -1.265 a 3.408 3.408 0 0 1 1.265 -0.823 a 6.087 6.087 0 0 1 2.042 -0.379 c 1.16 -0.053 1.508 -0.064 4.445 -0.064 M 12 1 c -2.987 0 -3.362 0.013 -4.535 0.066 a 8.074 8.074 0 0 0 -2.67 0.511 a 5.392 5.392 0 0 0 -1.949 1.27 a 5.392 5.392 0 0 0 -1.269 1.948 a 8.074 8.074 0 0 0 -0.51 2.67 C 1.012 8.638 1 9.013 1 12 s 0.013 3.362 0.066 4.535 a 8.074 8.074 0 0 0 0.511 2.67 a 5.392 5.392 0 0 0 1.27 1.949 a 5.392 5.392 0 0 0 1.948 1.269 a 8.074 8.074 0 0 0 2.67 0.51 C 8.638 22.988 9.013 23 12 23 s 3.362 -0.013 4.535 -0.066 a 8.074 8.074 0 0 0 2.67 -0.511 a 5.625 5.625 0 0 0 3.218 -3.218 a 8.074 8.074 0 0 0 0.51 -2.67 C 22.988 15.362 23 14.987 23 12 s -0.013 -3.362 -0.066 -4.535 a 8.074 8.074 0 0 0 -0.511 -2.67 a 5.392 5.392 0 0 0 -1.27 -1.949 a 5.392 5.392 0 0 0 -1.948 -1.269 a 8.074 8.074 0 0 0 -2.67 -0.51 C 15.362 1.012 14.987 1 12 1 Z m 0 5.351 A 5.649 5.649 0 1 0 17.649 12 A 5.649 5.649 0 0 0 12 6.351 Z m 0 9.316 A 3.667 3.667 0 1 1 15.667 12 A 3.667 3.667 0 0 1 12 15.667 Z m 5.872 -10.859 a 1.32 1.32 0 1 0 1.32 1.32 a 1.32 1.32 0 0 0 -1.32 -1.32 Z",
  Search: "M 19 10.5 A 8.5 8.5 0 1 1 10.5 2 a 8.5 8.5 0 0 1 8.5 8.5 Z",
  Compass: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 4v16M4 12h16",
  Video:
    "M 22.935 7.468 c -0.063 -1.36 -0.307 -2.142 -0.512 -2.67 a 5.341 5.341 0 0 0 -1.27 -1.95 a 5.345 5.345 0 0 0 -1.95 -1.27 c -0.53 -0.206 -1.311 -0.45 -2.672 -0.513 C 15.333 1.012 14.976 1 12 1 s -3.333 0.012 -4.532 0.065 c -1.36 0.063 -2.142 0.307 -2.67 0.512 c -0.77 0.298 -1.371 0.69 -1.95 1.27 a 5.36 5.36 0 0 0 -1.27 1.95 c -0.206 0.53 -0.45 1.311 -0.513 2.672 C 1.012 8.667 1 9.024 1 12 s 0.012 3.333 0.065 4.532 c 0.063 1.36 0.307 2.142 0.512 2.67 c 0.297 0.77 0.69 1.372 1.27 1.95 c 0.58 0.581 1.181 0.974 1.95 1.27 c 0.53 0.206 1.311 0.45 2.672 0.513 C 8.667 22.988 9.024 23 12 23 s 3.333 -0.012 4.532 -0.065 c 1.36 -0.063 2.142 -0.307 2.67 -0.512 a 5.33 5.33 0 0 0 1.95 -1.27 a 5.356 5.356 0 0 0 1.27 -1.95 c 0.206 -0.53 0.45 -1.311 0.513 -2.672 c 0.053 -1.198 0.065 -1.555 0.065 -4.531 s -0.012 -3.333 -0.065 -4.532 Z m -1.998 8.972 c -0.05 1.07 -0.228 1.652 -0.38 2.04 c -0.197 0.51 -0.434 0.874 -0.82 1.258 a 3.362 3.362 0 0 1 -1.258 0.82 c -0.387 0.151 -0.97 0.33 -2.038 0.379 c -1.162 0.052 -1.51 0.063 -4.441 0.063 s -3.28 -0.01 -4.44 -0.063 c -1.07 -0.05 -1.652 -0.228 -2.04 -0.38 a 3.354 3.354 0 0 1 -1.258 -0.82 a 3.362 3.362 0 0 1 -0.82 -1.258 c -0.151 -0.387 -0.33 -0.97 -0.379 -2.038 C 3.011 15.28 3 14.931 3 12 s 0.01 -3.28 0.063 -4.44 c 0.05 -1.07 0.228 -1.652 0.38 -2.04 c 0.197 -0.51 0.434 -0.875 0.82 -1.26 a 3.372 3.372 0 0 1 1.258 -0.819 c 0.387 -0.15 0.97 -0.329 2.038 -0.378 C 8.72 3.011 9.069 3 12 3 s 3.28 0.01 4.44 0.063 c 1.07 0.05 1.652 0.228 2.04 0.38 c 0.51 0.197 0.874 0.433 1.258 0.82 c 0.385 0.382 0.622 0.747 0.82 1.258 c 0.151 0.387 0.33 0.97 0.379 2.038 C 20.989 8.72 21 9.069 21 12 s -0.01 3.28 -0.063 4.44 Z m -4.584 -6.828 l -5.25 -3 a 2.725 2.725 0 0 0 -2.745 0.01 A 2.722 2.722 0 0 0 6.988 9 v 6 c 0 0.992 0.512 1.88 1.37 2.379 c 0.432 0.25 0.906 0.376 1.38 0.376 c 0.468 0 0.937 -0.123 1.365 -0.367 l 5.25 -3 c 0.868 -0.496 1.385 -1.389 1.385 -2.388 s -0.517 -1.892 -1.385 -2.388 Z m -0.993 3.04 l -5.25 3 a 0.74 0.74 0 0 1 -0.748 -0.003 a 0.74 0.74 0 0 1 -0.374 -0.649 V 9 a 0.74 0.74 0 0 1 0.374 -0.65 a 0.737 0.737 0 0 1 0.748 -0.002 l 5.25 3 c 0.341 0.196 0.378 0.521 0.378 0.652 s -0.037 0.456 -0.378 0.651 Z",
  MessageSquare:
    "M 13.973 20.046 L 21.77 6.928 C 22.8 5.195 21.55 3 19.535 3 H 4.466 C 2.138 3 0.984 5.825 2.646 7.456 l 4.842 4.752 l 1.723 7.121 c 0.548 2.266 3.571 2.721 4.762 0.717 Z",
  Heart:
    "M 16.792 3.904 A 4.989 4.989 0 0 1 21.5 9.122 c 0 3.072 -2.652 4.959 -5.197 7.222 c -2.512 2.243 -3.865 3.469 -4.303 3.752 c -0.477 -0.309 -2.143 -1.823 -4.303 -3.752 C 5.141 14.072 2.5 12.167 2.5 9.122 a 4.989 4.989 0 0 1 4.708 -5.218 a 4.21 4.21 0 0 1 3.675 1.941 c 0.84 1.175 0.98 1.763 1.12 1.763 s 0.278 -0.588 1.11 -1.766 a 4.17 4.17 0 0 1 3.679 -1.938 m 0 -2 a 6.04 6.04 0 0 0 -4.797 2.127 a 6.052 6.052 0 0 0 -4.787 -2.127 A 6.985 6.985 0 0 0 0.5 9.122 c 0 3.61 2.55 5.827 5.015 7.97 c 0.283 0.246 0.569 0.494 0.853 0.747 l 1.027 0.918 a 44.998 44.998 0 0 0 3.518 3.018 a 2 2 0 0 0 2.174 0 a 45.263 45.263 0 0 0 3.626 -3.115 l 0.922 -0.824 c 0.293 -0.26 0.59 -0.519 0.885 -0.774 c 2.334 -2.025 4.98 -4.32 4.98 -7.94 a 6.985 6.985 0 0 0 -6.708 -7.218 Z",
  PlusSquare:
    "M 21 11 h -8 V 3 a 1 1 0 1 0 -2 0 v 8 H 3 a 1 1 0 1 0 0 2 h 8 v 8 a 1 1 0 1 0 2 0 v -8 h 8 a 1 1 0 1 0 0 -2 Z",
  User: "M12 11c1.33 0 2.62-0.65 3.54-1.84s1.46-2.76 1.46-4.16S16.1 2.29 15.18 1.1s-2.19-1.1-3.18-1.1S8.82 0.29 7.89 1.48s-1.8 3.01-1.8 4.39 0.49 2.97 1.4 4.16S10.67 11 12 11zM22 22v-2a6 6 0 0 0-6-6H8a6 6 0 0 0-6 6v2",
  Menu: "M 3.5 6.5 h 17 a 1.5 1.5 0 0 0 0 -3 h -17 a 1.5 1.5 0 0 0 0 3 Z m 17 4 h -17 a 1.5 1.5 0 0 0 0 3 h 17 a 1.5 1.5 0 0 0 0 -3 Z m 0 7 h -17 a 1.5 1.5 0 0 0 0 3 h 17 a 1.5 1.5 0 0 0 0 -3 Z",
  MetaApp: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z",
};

// 2. SVG 렌더링 컴포넌트
const CustomSvgIcon = ({
  iconKey,
  size,
  //isActive,
}: {
  iconKey: string;
  size: number;
  isActive?: boolean;
}) => {
  const path = ICON_PATHS[iconKey];

  if (!path) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  );
};

const NavItem = ({
  iconKey,
  text,
  isActive, // isActive prop 사용
  isExpanded,
}: {
  iconKey: string;
  text: string;
  isActive?: boolean;
  isExpanded: boolean;
}) => (
  <div
    className={`w-full py-3 px-4 flex items-center gap-4 cursor-pointer transition-colors duration-200 rounded-xl ${
      isActive
        ? "font-bold bg-white/10"
        : "text-white/70 hover:text-white hover:bg-white/10"
    }`}
    title={text}
  >
    {/* CustomSvgIcon 렌더링 */}
    <CustomSvgIcon iconKey={iconKey} size={24} isActive={isActive} />
    {isExpanded && <span className="text-base">{text}</span>}
  </div>
);

export default function SidebarNav() {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation(); // 현재 경로를 가져오기 위해 useLocation 사용

  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);

  // navItems 배열: path만 남기고, isActive는 false로 설정
  const navItems = [
    { iconKey: "Home", text: "홈", path: "/" },
    { iconKey: "Search", text: "검색", path: "/search" },
    { iconKey: "Compass", text: "탐색 탭", path: "/explore" },
    { iconKey: "Video", text: "릴스", path: "/reels" },
    { iconKey: "MessageSquare", text: "메시지", path: "/dm" }, // path만 남김
    { iconKey: "Heart", text: "알림", path: "/notifications" },
    { iconKey: "PlusSquare", text: "만들기", path: "/create" },
    { iconKey: "User", text: "프로필", path: "/profile" },
  ];

  // 현재 경로가 /dm 또는 /dm/:chatId 일 때 메시지가 활성화
  const isMessageActive = location.pathname.startsWith("/dm");

  return (
    <nav
      className={`shrink-0 border-r border-white/10 bg-black/90 text-white hidden md:flex md:flex-col transition-all duration-300 ${isExpanded ? "w-64 px-2" : "w-16 px-0 items-center"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`py-4 mb-4 border-b border-white/10 ${isExpanded ? "px-4" : "flex justify-center w-full"}`}
      >
        {isExpanded ? (
          <h1 className="text-2xl font-serif italic font-bold">Instagram</h1>
        ) : (
          <CustomSvgIcon iconKey="InstagramLogo" size={28} />
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavItem
            key={item.text}
            iconKey={item.iconKey} // key 전달
            text={item.text}
            // '메시지' 항목일 때만 계산된 isMessageActive 값을 전달
            isActive={item.path === "/dm" ? isMessageActive : false}
            isExpanded={isExpanded}
          />
        ))}
      </div>

      <div
        className={`mt-auto pt-4 border-t border-white/10 ${isExpanded ? "px-2" : "flex justify-center flex-col w-full items-center"}`}
      >
        <NavItem
          iconKey="Menu"
          text="더 보기"
          isExpanded={isExpanded}
          isActive={false}
        />
        <NavItem
          iconKey="MetaApp"
          text="Meta의 다른 앱"
          isExpanded={isExpanded}
          isActive={false}
        />
      </div>
    </nav>
  );
}
