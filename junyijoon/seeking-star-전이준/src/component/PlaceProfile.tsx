import "../css/main.css";
type setClick = {
  onClick?: () => void; // 상세정보 클릭 핸들러
};
function PlaceProfile({ onClick }: setClick) {
  return (
    <div onClick={onClick} className="z-indexbackground">
      <div className="placeCard">
        <div></div>
        <div></div>
        <img />
        <div>
          <div>점수</div>
          <div>구름</div>
          <div>시정</div>
          <div>황사</div>
        </div>
        <div>
          <img />
          <div>주소</div>
          <div>~주소~</div>
        </div>
        <div>
          <div>설명</div>
          <div>~설명~</div>
        </div>
        <div>
          <div>추천이동방식</div>
          <div>card</div>
          <div>카드</div>
        </div>
      </div>
    </div>
  );
}

export default PlaceProfile;
