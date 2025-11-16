export default function DMHome() {
  return (
    <div className="flex-1 grid place-items-center text-white/70">
      <div className="text-center">
        <div className="mx-auto mb-4 h-16 w-16 grid place-items-center rounded-full bg-white/10">
          <span role="img" aria-label="smile" className="text-2xl">
            🙂
          </span>
        </div>
        <h2 className="text-xl font-semibold">메시지를 선택하세요</h2>
        <p className="text-sm">왼쪽에서 친구를 클릭하면 대화가 열립니다.</p>
      </div>
    </div>
  );
}
