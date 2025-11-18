import { useState } from "react";

type SearchBarProps = {
  onSearch: (keyword: string) => void;
  onFilter: (filterType: string | null) => void;
};

export default function SearchBar({ onSearch, onFilter }: SearchBarProps) {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="w-full mb-4">
      <input
        className="border border-gray-300 px-4 py-3 bg-white shadow-sm placeholder-gray-400 focus:outline-none ml-74 w-1/3 mb-3"
        placeholder="장소 이름 검색..."
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
          onSearch(e.target.value);
        }}
      />

      <div className="flex gap-2 overflow-x-auto ml-9 mt-3 ml-74">
        <button
          className="w-28 py-2 text-white rounded-lg font-semibold" style={{ backgroundColor: "#FFE6EE", color: "#595959ff" }}
          onClick={() => onFilter("INDOOR")}
        >
          실내
        </button>

        <button
          className="w-28 py-2 text-white rounded-lg font-semibold" style={{ backgroundColor: "#FFE6EE", color: "#595959ff" }}
          onClick={() => onFilter("OUTDOOR")}
        >
          실외
        </button>

        <button
          className="w-28 py-2 text-white rounded-lg font-semibold" style={{ backgroundColor: "#FFE6EE", color: "#595959ff" }}
          onClick={() => onFilter("POWER")}
        >
          콘센트 있음
        </button>

        <button
          className="w-28 py-2 text-white rounded-lg font-semibold" style={{ backgroundColor: "#FFE6EE", color: "#595959ff" }}
          onClick={() => onFilter(null)}
        >
          초기화
        </button>
      </div>
    </div>
  );
}
