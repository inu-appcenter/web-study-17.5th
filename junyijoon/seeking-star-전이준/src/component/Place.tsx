import "../css/main.css";
import star from "../assets/star.svg";
import type { placeInformation } from "../type/type.types";
import { scoreGrade } from "../function/weather";
type placed = placeInformation & {
  onClick?: (id: number) => void;
};
function Place({
  id,
  placeName,
  distance,
  cloud,
  visibility,
  dust,
  score,
  favorite,
  onClick,
}: placed) {
  return (
    <div className="place">
      {/* 위 */}
      <div className="placeSide">
        {/* 왼쪽 */}
        <div>
          {/* 조금위 */}
          <div className="placeInformation">
            <div className="placeName">{placeName}</div>
            <div className="placeDistance">{distance}km</div>
          </div>
          {/* 조금아래 */}
          <div className="placeStatus">
            <div>구름 : {cloud}%,</div>
            <div>시정 : {visibility}m,</div>
            <div>황사 : {dust}μg/m³</div>
          </div>
        </div>
        {/* 오른쪽 */}
        <div className="placeQuality">
          <div className={`placeScore ${scoreGrade(score)}`}>
            <img src={star} className="" />
            {score}
          </div>
          <div className="placeFavorite cursor">{favorite}즐겨찾기</div>
        </div>
      </div>
      {/* 아래 */}

      <div className="placeDetail cursor" onClick={() => onClick?.(id)}>
        상세 정보
      </div>
    </div>
  );
}

export default Place;
