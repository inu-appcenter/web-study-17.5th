import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="text-center">
      <div className="mb-2 flex items-center justify-center gap-2">
        <img src={Logo} alt="Logo" className="h-8 w-8" />
        <h1 className="text-3xl font-bold">TodoList</h1>
      </div>
      <p className="text-gray-500">할 일을 깔끔하게 정리하고 관리하세요!</p>

      {/* ✅ 완료 페이지로 이동 버튼 */}
      <button
        onClick={() => navigate("/done")}
        className="mt-3 bg-[#7A83DE]/80 text-white px-4 py-2 rounded-lg hover:bg-[#6E76CC] transition"
      >
        완료 목록 보기
      </button>
    </header>
  );
};

export default Header;
