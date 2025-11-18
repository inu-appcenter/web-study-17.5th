import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("loggedIn");

    alert("로그아웃 되었습니다!");
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 text-gray-700 text-sm mr-74 mt-2"
    >
      로그아웃
    </button>
  );
}
