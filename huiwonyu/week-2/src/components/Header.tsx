import Logo from '../assets/logo.png';

const Header = () => {
    return <div>
        <header>
        <div className="flex items-center justify-center gap-2 mb-2">
          <img src={Logo} alt="Logo" className="h-8 w-8" />
          <h1 className="text-3xl font-bold">TodoList</h1>
        </div>
        <h2 className="text-gray-500 text-center">할 일을 깔끔하게 정리하고 관리하세요 !</h2>
      </header>
    </div>
};

export default Header;