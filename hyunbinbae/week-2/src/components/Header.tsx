import { useDarkMode } from "../contexts/ThemeContext";

type HeaderProps = {
  currentPage: "home" | "done";
  onNavigate: (page: "home" | "done") => void;
};

const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  //
  const { darkMode, toggleDarkMode } = useDarkMode();

  const emoji = darkMode ? "🌙" : "☀️";
  const label = darkMode ? "다크 모드" : "라이트 모드";

  return (
    // 헤더와 네비게이션/토글 버튼을 flex로 배치
    <div className="flex items-center justify-between mb-4">
      <div className="text-left flex-1">
        {currentPage === "home" ? (
          <>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              📆 Today is
            </h3>
            <h1 className="text-blue-500 dark:text-blue-400 text-2xl font-bold mt-1">
              {new Date().toDateString()}
            </h1>
          </>
        ) : (
          // DoneTodo 페이지 제목 : 클릭 시 목록으로 돌아가기
          <h1
            onClick={() => onNavigate("home")}
            className="
              text-blue-500 dark:text-blue-400 text-2xl font-bold cursor-pointer transition
              hover:text-blue-600 dark:hover:text-blue-300
            "
          >
            ← 할 일 목록
          </h1>
        )}
      </div>

      <div className="flex items-center gap-3">
        {currentPage === "home" && (
          // 완료 페이지로 이동하는 버튼
          <button
            onClick={() => onNavigate("done")}
            className="
              px-3 py-1 text-sm font-medium rounded-lg transition
              bg-blue-500 text-white hover:bg-blue-600
              dark:bg-blue-400 dark:text-white-900 dark:hover:bg-blue-500
            "
          >
            완료된 일
          </button>
        )}

        <button
          onClick={toggleDarkMode}
          aria-label={label}
          className="
            p-2 text-xl sm:text-2xl transition-transform duration-300 ease-in-out transform hover:scale-110
            rounded-full bg-gray-100 dark:bg-gray-700 shadow-md dark:shadow-lg
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
        >
          {emoji}
        </button>
      </div>
    </div>
  );
};

export default Header;
