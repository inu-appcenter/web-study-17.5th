import { useState } from "react";

const Editor = () => {
    const [inputValue, setInputValue] = useState("");

    const handleAddButton = () => {
        const todo = { title: inputValue, isDone: false };

        // 기존 데이터 가져오기 (없으면 빈 배열 [])
        const oldItems = JSON.parse(localStorage.getItem("todos") || "[]");

        // 새로운 할일 추가
        const newItems = [...oldItems, todo];

        // 다시 저장 (문자열로 변환해서)
        localStorage.setItem("todos", JSON.stringify(newItems));

        setInputValue("");
    };

    return (
        <div className="flex items-center gap-2 border-b border-gray-200 py-2 mb-8">
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
                placeholder="할 일을 입력하세요"
                className="flex-1 rounded-md px-4 py-4 text-gray-700 
                            border border-transparent
                            hover:border-[#7A83DE] focus:border-[#7A83DE]
                            focus:ring-2 focus:ring-[#7A83DE] 
                            focus:outline-none
                            transform hover:scale-[1.02] focus:scale-[1.02]
                            transition-all duration-200"
            />
            <button
                className="bg-[#7A83DE]/80
                text-white 
                rounded-xl 
                px-4 py-2 
             transform hover:scale-105 
             transition-transform duration-200"
                onClick={handleAddButton}>
                + 추가
            </button>
        </div>
    );
};

export default Editor;