import { useState } from "react";
import SidebarCompact from "../components/Sidebar/SidebarCompact";
import DmList from "../components/DmList";
import DmEmpty from "../components/DmEmpty";
import DmDetail from "../components/DmDetail";

export default function DmPage() {
  // 선택된 DM ID 상태
  const [selectedDm, setSelectedDm] = useState<string | null>(null);

  return (
    <div className="flex h-screen">
      {/* 왼쪽 사이드바 */}
      <SidebarCompact />

      {/* 오른쪽 영역: DM 리스트 + 내용 */}
      <div className="flex flex-1 border-l border-gray-200">
        {/* DM 목록 */}
        <div className="w-[397px] border-r border-gray-200">
          <DmList onSelectDm={(id) => setSelectedDm(id)} />
        </div>

        {/* DM 내용 (선택 여부에 따라 변경) */}
        <div className="flex-1 flex items-center justify-center">
          {selectedDm ? <DmDetail dmId={selectedDm} /> : <DmEmpty />}
        </div>
      </div>
    </div>
  );
}
