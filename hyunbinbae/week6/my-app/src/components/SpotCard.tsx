import { useNavigate } from "react-router-dom";

interface CardProps {
  spotId: number;
  latitude: string;
  longitude: string;
  name: string;
  locationDetail: string;
  description: string;
  photo: string;
  sleepingAllowed: boolean;
  eatingAllowed: boolean;
  hasPowerOutlet: boolean;
  studyAllowed: boolean;
  entertainment: boolean;
  reservationRequired: boolean;
  placeType: "INDOOR" | "OUTDOOR";
}

export default function SpotCard({
  spotId, // id를 구조 분해 할당
  //latitude,
  //longitude,
  name,
  locationDetail,
  description,
  photo,
  sleepingAllowed,
  eatingAllowed,
  hasPowerOutlet,
  studyAllowed,
  entertainment,
  reservationRequired,
  placeType,
}: CardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
      // 🔥 상세 페이지 경로를 ID 기반으로 변경
      onClick={() => navigate(`/spots/${spotId}`)}
    >
      <img
        src={photo}
        alt={name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />

      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-600">{locationDetail}</p>
      <p className="text-sm mt-2">{description}</p>

      <div className="grid grid-cols-2 gap-2 text-sm mt-4">
        <p>수면 가능: {sleepingAllowed ? "O" : "X"}</p>
        <p>식사 가능: {eatingAllowed ? "O" : "X"}</p>
        <p>콘센트: {hasPowerOutlet ? "O" : "X"}</p>
        <p>공부 가능: {studyAllowed ? "O" : "X"}</p>
        <p>놀거리: {entertainment ? "O" : "X"}</p>
        <p>예약 필요: {reservationRequired ? "O" : "X"}</p>
        <p>타입: {placeType === "INDOOR" ? "실내" : "야외"}</p>
      </div>
    </div>
  );
}
