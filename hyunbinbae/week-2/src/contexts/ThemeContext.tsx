import { createContext, useContext, useEffect, useState } from "react";

type DarkModeContextValue = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextValue>({
  darkMode: false,
  toggleDarkMode: () => {},
});

// HTML 루트 요소에 'dark' 클래스를 적용하고 로컬 스토리지에 저장
const applyDarkClass = (isDark: boolean) => {
  if (isDark) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

type DarkModeProviderProps = {
  children: any;
};

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState(false);

  // 버튼으로 토글
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      applyDarkClass(next);
      return next;
    });
  };

  // 처음 로드될 때: 저장값 있으면 그걸로, 없으면 시스템 설정을 따름
  useEffect(() => {
    const saved = localStorage.getItem("theme"); // "dark" | "light" | null
    const systemPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    // 로컬 저장값이 있으면 그것을, 없으면 시스템 설정을 사용
    const initial = saved ? saved === "dark" : systemPrefersDark;
    setDarkMode(initial);
    applyDarkClass(initial);
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// 어디서든 사용: const { darkMode, toggleDarkMode } = useDarkMode();
export const useDarkMode = () => useContext(DarkModeContext);
