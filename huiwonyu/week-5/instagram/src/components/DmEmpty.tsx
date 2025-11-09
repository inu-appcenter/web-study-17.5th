import dm_detail from "../assets/dm_detail.svg";

export default function DmEmpty() {
  return (
    <div className="flex flex-col items-center justify-center w-full text-center">
      {/* 아이콘 */}
      <img src={dm_detail} alt="DM 비어있음" className="w-24 h-24 mb-4" />

      {/* 텍스트 */}
      <h2 className="text-lg font-semibold mb-1" style={{ fontFamily: "Malgun Gothic", fontWeight: 400, fontSize: 20 }}>
        내 메시지
      </h2>
      <p className="text-gray-500 text-sm mb-4" style={{ fontFamily: "Malgun Gothic", fontWeight: 400, fontSize: 14 }}>
        친구나 그룹에 비공개 사진과 메시지를 보내보세요
      </p>

      <button
        className="text-white text-sm font-semibold py-2 px-4 rounded-lg transition hover:brightness-95 active:brightness-90"
        style={{ backgroundColor: "rgb(74, 93, 249)", fontFamily: "Malgun Gothic", fontWeight: 600, fontSize: 14 }}
      >
        메시지 보내기
      </button>
    </div>
  );
}
