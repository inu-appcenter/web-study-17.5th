import { useEffect, useState } from "react";

const Footer = () => {
    const [remaining, setRemaining] = useState(0);

    useEffect(() => {
        const calculateRemaining = () => {
            const todos = JSON.parse(localStorage.getItem("todos") || "[]");
            const count = todos.filter((item: any) => !item.isDone).length;
            setRemaining(count);
        };

        calculateRemaining();
        window.addEventListener("storage", calculateRemaining);

        const interval = setInterval(calculateRemaining, 500);

        return () => {
            window.removeEventListener("storage", calculateRemaining);
            clearInterval(interval);
        };
    }, []);

    // 완료 항목 삭제
    const handleClearCompleted = () => {
        const todos = JSON.parse(localStorage.getItem("todos") || "[]");
        const newTodos = todos.filter((item: any) => !item.isDone); // 완료된 것 제외
        localStorage.setItem("todos", JSON.stringify(newTodos));
        window.dispatchEvent(new Event("storage"));
    };

    return (
        <div className="flex justify-between items-center border-t border-gray-200 my-8 pt-8">
            <span className="text-gray-700">할 일이 {remaining}개 남았습니다!</span>
            <button
                onClick={handleClearCompleted}
                className="bg-gray-300 text-black/60 px-3 py-1 rounded-md hover:bg-gray-400 transition"
            >
                완료 목록 삭제
            </button>
        </div>
    );
};

export default Footer;
