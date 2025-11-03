import { Search, User } from "lucide-react";
import Logo from "../assets/images/tving-logo.png";

export default function Header() {
    const menuItems = ["드라마", "예능", "영화", "스포츠", "애니", "뉴스", "라이브"];

    return (
        <header className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-sm z-50 shadow-md">
            <div className="flex items-center justify-between px-16 py-6">
                {/* 왼쪽: 로고 + 메뉴 */}
                <div className="flex items-center gap-12">
                    <img
                        src={Logo}
                        alt="TVING"
                        className="h-10 cursor-pointer hover:opacity-80 transition-opacity"
                    />

                    <nav className="flex items-center gap-10">
                        {menuItems.map((item) => (
                            <button
                                key={item}
                                className="text-white text-lg font-light tracking-wide hover:text-red-500 transition-colors"
                            >
                                {item}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* 오른쪽: 검색 + 프로필 */}
                <div className="flex items-center gap-8">
                    <Search className="text-white w-7 h-7 cursor-pointer hover:text-red-500 transition-colors" />
                    <User className="text-white w-7 h-7 cursor-pointer hover:text-red-500 transition-colors" />
                </div>
            </div>
        </header>
    );
}
