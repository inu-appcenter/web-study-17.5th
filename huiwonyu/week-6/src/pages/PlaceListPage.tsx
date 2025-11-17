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
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">장소 목록</h2>
        <LogoutButton />
      </div>

      {/* 검색바 */}
      <SearchBar onSearch={handleSearch} onFilter={handleFilter} />

      {/* 장소 목록 */}
      <div className="grid grid-cols-1 gap-4">
        {filtered.map((place: any) => (
          <div
            key={place.id}
            className="bg-white rounded-xl shadow p-4 border cursor-pointer hover:bg-gray-50"
            onClick={() => navigate(`/places/${place.id}`)}
          >
            <h3 className="text-lg font-bold">{place.name}</h3>
            <p className="text-sm text-gray-600">{place.locationDetail}</p>

            {place.photo && (
              <img
                src={place.photo}
                alt="place"
                className="w-full h-40 object-cover rounded-lg mt-2"
              />
            )}

            <p className="mt-2 text-sm">{place.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
