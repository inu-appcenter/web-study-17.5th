import { useState, useEffect } from "react";
import SpotCard from "../components/SpotCard";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

// GET /api/v1/spots 응답의 content 배열 항목의 타입정의
interface SpotItem {
  id: number;
  lat: string;
  longitude: string;
  name: string;
  locationDetail: string;
  description: string;
  sleepingAllowed: boolean;
  eatingAllowed: boolean;
  hasPowerOutlet: boolean;
  studyAllowed: boolean;
  entertainment: boolean;
  reservationRequired: boolean;
  placeType: "INDOOR" | "OUTDOOR";
  photo: string;
}

// POST /api/v1/spots/search 요청 바디의 타입정의
interface SearchFilter {
  sleepingAllowed?: boolean;
  eatingAllowed?: boolean;
  hasPowerOutlet?: boolean;
  studyAllowed?: boolean;
  entertainment?: boolean;
  reservationRequired?: boolean;
  placeType?: "INDOOR" | "OUTDOOR";
}

const Mainpage = () => {
  const [spots, setSpots] = useState<SpotItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<SearchFilter>({});
  const baseURL = import.meta.env.VITE_BASE_URL; // 체크박스 필터 변경 핸들러
  const navigate = useNavigate();

  const handleFilterChange = (key: keyof SearchFilter, value: boolean) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? undefined : value,
    }));
  }; // 타입 필터 변경 핸들러
  const handlePlaceTypeChange = (type: "INDOOR" | "OUTDOOR") => {
    setFilters((prev) => ({
      ...prev,
      placeType: prev.placeType === type ? undefined : type,
    }));
  }; /**
   * @param isSearch - 검색 API (POST)를 사용할지, 전체 조회 API (GET)를 사용할지 결정
  이 부분은 AI 도움 받았습니다! GET과 POST를 하나로 묶어서 처리하고 코드 중복 방지를 위해서라고 합니다
   */

  const handleDelete = async () => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      alert("로그인 정보가 없습니다.");
      return;
    }

    if (!window.confirm("회원 탈퇴를 하시겠습니까?")) {
      return;
    }

    try {
      // API 문서 기반 DELETE 요청
      const response = await fetch(`${baseURL}/api/v1/auth/delete`, {
        method: "DELETE",
        headers: {
          // 인증 토큰 필요
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("서버 응답:", errorText);
        throw new Error("회원 탈퇴에 실패");
      }

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("name");

      alert("회원 탈퇴가 완료");
      navigate("/login"); // 로그인 페이지로 리디렉션
    } catch (error) {
      alert((error as Error).message);
    }
  };

  const fetchSpots = async (isSearch: boolean = false) => {
    setLoading(true);

    try {
      // 1. URL 설정: 검색 API 또는 전체 조회 API 사용
      let url = isSearch
        ? `${baseURL}/api/v1/spots/search?page=0&size=10`
        : `${baseURL}/api/v1/spots?page=0&size=10`;

      // 2. 검색 시, 필터들을 쿼리 파라미터로 변환하여 URL에 추가 (GET 방식)
      // 이부분도 계속 에러가 나서 AI 도움 받았습니다.. 아직 공부 제대로 못해서 찾아볼게요!
      if (isSearch) {
        const queryParams = Object.entries(filters)
          .filter(([, value]) => value !== undefined)
          .map(([key, value]) => `${key}=${value}`)
          .join("&");

        if (queryParams) {
          url += `&${queryParams}`;
        }
      }

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("서버 응답:", errorText);
        throw new Error(
          isSearch
            ? "스팟 검색에 실패했습니다."
            : "스팟 목록을 불러오는 데 실패했습니다."
        );
      }

      const result = await response.json();
      setSpots(result.data.content || []);
    } catch (error) {
      alert((error as Error).message);
      setSpots([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (loading) return;
    fetchSpots(true);
  };
  useEffect(() => {
    fetchSpots(false);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] pt-24 px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-[#00499B] mb-6">
        캠퍼스 스팟 찾기
      </h1>
      {/* 검색 필터*/}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">🔍 필터</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(
            [
              { key: "sleepingAllowed", label: "수면 가능" },
              { key: "eatingAllowed", label: "식사 가능" },
              { key: "hasPowerOutlet", label: "콘센트" },
              { key: "studyAllowed", label: "공부 가능" },
              { key: "entertainment", label: "놀거리" },
              { key: "reservationRequired", label: "예약 필요" },
            ] as const
          ).map(({ key, label }) => (
            <label
              key={key}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters[key] === true}
                onChange={(e) => handleFilterChange(key, e.target.checked)}
                className="form-checkbox h-5 w-5 text-[#00499B] rounded"
              />
              <span className="text-sm font-medium">{label}</span>
            </label>
          ))}
          <div className="col-span-2 md:col-span-4 flex space-x-4 pt-2">
            <h3 className="font-medium">타입:</h3>
            {["INDOOR", "OUTDOOR"].map((type) => (
              <label
                key={type}
                className="flex items-center space-x-1 cursor-pointer"
              >
                <input
                  type="radio"
                  name="placeType"
                  checked={filters.placeType === type}
                  onChange={() =>
                    handlePlaceTypeChange(type as "INDOOR" | "OUTDOOR")
                  }
                  className="form-radio h-4 w-4 text-[#00499B]"
                />
                <span className="text-sm">
                  {type === "INDOOR" ? "실내" : "야외"}
                </span>
              </label>
            ))}
            <button
              onClick={() => {
                setFilters({});
                fetchSpots(false);
              }}
              className="text-sm text-red-500 hover:text-red-700 ml-4"
            >
              필터 초기화 및 전체 조회
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Button
            ButtonName={loading ? "로딩 중..." : "검색하기"}
            onClick={handleSearch}
          />
        </div>
      </div>
      {loading && (
        <div className="text-center text-lg py-10">
          <p>스팟 목록을 불러오는 중입니다...</p>
        </div>
      )}
      {!loading && spots.length === 0 && (
        <div className="text-center text-gray-500 py-10">
          검색 결과가 없거나 목록을 불러오지 못했습니다.
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spots.map((spot) => (
          <SpotCard
            key={spot.id}
            spotId={spot.id}
            latitude={spot.lat}
            longitude={spot.longitude}
            name={spot.name}
            locationDetail={spot.locationDetail}
            description={spot.description}
            photo={spot.photo}
            sleepingAllowed={spot.sleepingAllowed}
            eatingAllowed={spot.eatingAllowed}
            hasPowerOutlet={spot.hasPowerOutlet}
            studyAllowed={spot.studyAllowed}
            entertainment={spot.entertainment}
            reservationRequired={spot.reservationRequired}
            placeType={spot.placeType}
          />
        ))}
      </div>

      <div className="text-center py-10">
        <button
          type="button"
          onClick={handleDelete}
          className="text-red-500 cursor-pointer text-sm underline-offset-2 hover:underline"
        >
          회원 탈퇴
        </button>
      </div>
    </div>
  );
};

export default Mainpage;
