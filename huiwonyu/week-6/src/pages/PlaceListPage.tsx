import { useEffect, useState } from "react";
import axios from "axios";
import { buildUrl } from "../utils/api";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import type { Place } from "../types/place";
import LogoutButton from "../components/LogoutButton";

export default function PlaceListPage() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [filtered, setFiltered] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchPlaces = async () => {
    try {
      const url = buildUrl("/api/v1/spots");
      const res = await axios.get(url);

      const list = res.data?.data?.content ?? [];
      setPlaces(list);
      setFiltered(list);
    } catch (err) {
      console.error(err);
      alert("장소 조회 실패");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  // 검색 기능
  const handleSearch = (keyword: string) => {
    const lower = keyword.toLowerCase();
    const result = places.filter((p) =>
      p.name.toLowerCase().includes(lower)
    );
    setFiltered(result);
  };

  // 필터 기능
  const handleFilter = (type: string | null) => {
    if (!type) {
      setFiltered(places);
      return;
    }

    if (type === "INDOOR" || type === "OUTDOOR") {
      setFiltered(places.filter((p) => p.placeType === type));
    }

    if (type === "POWER") {
      setFiltered(places.filter((p) => p.hasPowerOutlet));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        로딩 중...
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom, #FFF7F9 0%, #FFE6EE 100%)" }}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mt-2 ml-74 text-gray-800">장소 목록</h2>
        <LogoutButton />
      </div>

      {/* 검색바 */}
      <SearchBar onSearch={handleSearch} onFilter={handleFilter} />

      {/* 장소 목록 */}
      {(() => {
        const rows: any[] = [];
        for (let i = 0; i < filtered.length; i += 5) {
          rows.push(filtered.slice(i, i + 5));
        }

        return (
          <div className="w-full flex flex-col items-center gap-6">

            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center gap-4 group mb-8">

                {row.map((place: any, idx: number) => {
                  const isFirst = idx === 0;

                  return (
                    <div
                      key={place.id}
                      className={`
                  relative overflow-hidden cursor-pointer shadow
                  transition-all duration-300 ease-out h-[330px]
                  ${isFirst ? "w-[422px]" : "w-[152px]"}
                  group-hover:w-[152px]
                  hover:w-[422px]
                `}
                      onClick={() => navigate(`/places/${place.id}`)}
                    >
                      <img
                        src={place.photo}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute bottom-0 left-0 w-full px-3 py-2">
                        <p className="text-white font-bold text-sm">
                          {place.name}
                        </p>
                        <p className="text-white text-xs">
                          {place.locationDetail}
                        </p>
                      </div>
                    </div>
                  );
                })}

              </div>
            ))}
          </div>
        );
      })()}
    </div>
  );
}
