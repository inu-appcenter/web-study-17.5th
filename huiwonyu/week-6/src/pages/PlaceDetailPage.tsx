import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { buildUrl } from "../utils/api";
import type { Place } from "../types/place";

export default function PlaceDetailPage() {
  const { id } = useParams();
  const [place, setPlace] = useState<Place | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchDetail = async () => {
    try {
      const url = buildUrl(`/api/v1/spots/${id}`);
      const res = await axios.get(url);

      const data = res.data?.data;
      setPlace(data);
    } catch (err) {
      console.error(err);
      alert("장소 상세 조회 실패");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [id]);

  if (loading) return <div>불러오는 중...</div>;
  if (!place) return <div>데이터 없음</div>;

  return (
    <div
      className="min-h-screen p-4"
      style={{
        background: "linear-gradient(to bottom, #FFF7F9 0%, #FFE6EE 100%)",
      }}
    >
      <div className="max-w-xl mx-auto space-y-6">

        {/* 장소명 */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mt-2">
          {place.name}
        </h2>
        <p className="text-center text-gray-500">{place.locationDetail}</p>

        {/* 이미지 */}
        {place.photo && (
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={place.photo}
              alt="place"
              className="w-full h-64 object-cover"
            />
          </div>
        )}

        {/* 설명 섹션 */}
        <div className="bg-white rounded-2xl p-5 shadow-md justify-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">설명</h3>
          <p className="text-gray-700 text-center">{place.description}</p>
        </div>

        {/* 편의시설 */}
        <div className="bg-white rounded-2xl p-5 shadow-md justify-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">편의시설</h3>

          <ul className="space-y-2 text-[15px]">

            <li className="flex justify-center gap-2">
              <span>취식 가능</span>
              <span
                className={
                  place.eatingAllowed
                    ? "text-pink-600 font-semibold"
                    : "text-gray-400"
                }
              >
                {place.eatingAllowed ? "✓" : "✕"}
              </span>
            </li>

            <li className="flex justify-center gap-2">
              <span>수면 가능</span>
              <span
                className={
                  place.sleepingAllowed
                    ? "text-pink-600 font-semibold"
                    : "text-gray-400"
                }
              >
                {place.sleepingAllowed ? "✓" : "✕"}
              </span>
            </li>

            <li className="flex justify-center gap-2">
              <span>콘센트</span>
              <span
                className={
                  place.hasPowerOutlet
                    ? "text-pink-600 font-semibold"
                    : "text-gray-400"
                }
              >
                {place.hasPowerOutlet ? "✓" : "✕"}
              </span>
            </li>

            <li className="flex justify-center gap-2">
              <span>스터디 가능</span>
              <span
                className={
                  place.studyAllowed
                    ? "text-pink-600 font-semibold"
                    : "text-gray-400"
                }
              >
                {place.studyAllowed ? "✓" : "✕"}
              </span>
            </li>

            <li className="flex justify-center gap-2">
              <span>예약 필요</span>
              <span
                className={
                  place.reservationRequired
                    ? "text-rose-600 font-semibold"
                    : "text-gray-400"
                }
              >
                {place.reservationRequired ? "필요" : "불필요"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
