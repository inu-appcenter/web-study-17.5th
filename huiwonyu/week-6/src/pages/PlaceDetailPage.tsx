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
    <div className="min-h-screen p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-2">{place.name}</h2>
      <p className="text-gray-600 mb-4">{place.locationDetail}</p>

      {place.photo && (
        <img
          src={place.photo}
          className="w-full h-60 object-cover rounded-lg mb-4"
          alt="place"
        />
      )}

      <h3 className="text-lg font-semibold mb-1">설명</h3>
      <p className="mb-4">{place.description}</p>

      <h3 className="text-lg font-semibold mb-1">편의시설</h3>
      <ul className="list-disc ml-6 text-sm">
        <li>취식 가능: {place.eatingAllowed ? "O" : "X"}</li>
        <li>수면 가능: {place.sleepingAllowed ? "O" : "X"}</li>
        <li>콘센트: {place.hasPowerOutlet ? "O" : "X"}</li>
        <li>스터디 가능: {place.studyAllowed ? "O" : "X"}</li>
        <li>예약 필요: {place.reservationRequired ? "O" : "X"}</li>
      </ul>
    </div>
  );
}
