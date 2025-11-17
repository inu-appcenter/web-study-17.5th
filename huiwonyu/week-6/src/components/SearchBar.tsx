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
        className="w-full border rounded-lg px-4 py-3 mb-2"
        placeholder="장소 이름 검색..."
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
          onSearch(e.target.value);
        }}
      />

      <div className="flex gap-2 overflow-x-auto">
        <button
          className="px-3 py-2 bg-gray-200 rounded-lg text-sm"
          onClick={() => onFilter("INDOOR")}
        >
          실내
        </button>

        <button
          className="px-3 py-2 bg-gray-200 rounded-lg text-sm"
          onClick={() => onFilter("OUTDOOR")}
        >
          실외
        </button>

        <button
          className="px-3 py-2 bg-gray-200 rounded-lg text-sm"
          onClick={() => onFilter("POWER")}
        >
          콘센트 있음
        </button>

        <button
          className="px-3 py-2 bg-gray-200 rounded-lg text-sm"
          onClick={() => onFilter(null)}
        >
          초기화
        </button>
      </div>
    </div>
  );
}
