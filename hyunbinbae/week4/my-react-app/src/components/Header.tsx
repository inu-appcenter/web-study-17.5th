import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const base =
    "px-3 py-2 rounded-md text-sm text-(--text-secondary) hover:text-white hover:bg-[#2a2a2a]";
  const active = "text-white bg-[#2a2a2a]";

  return (
    // 상단에 고정
    <header className="sticky top-0 z-50 border-b border-(--border-subtle) bg-(--bg-elev-1)/90 backdrop-blur">
      <div className="container-app h-14 flex items-center justify-between">
        <Link to="/" className="font-bold">
          ♫ Spotify
        </Link>
        <nav className="flex items-center gap-1">
          {/* 홈 링크 */}
          <NavLink
            to="/"
            className={({ isActive }) => `${base} ${isActive ? active : ""}`}
          >
            홈
          </NavLink>
          {/* 로그인 링크 */}
          <NavLink
            to="/login"
            className={({ isActive }) => `${base} ${isActive ? active : ""}`}
          >
            로그인
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
