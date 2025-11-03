import ContentRow from "../components/ContentRow";
import Header from "../components/Header";

import TyphoonFamily from "../assets/images/Typhoon Family.png";
import JoyPopsLaughPops from "../assets/images/Joy Pops Laugh Pops.png";
import EXchange4 from "../assets/images/EXchange Season 4.png";
import TheDreamLifeOfMrKim from "../assets/images/The Dream Life of Mr. Kim.png";
import MsIncognito from "../assets/images/Ms. Incognito.png";
import ShinsProject from "../assets/images/Shin's Project.png";
import SingAgain4 from "../assets/images/Sing Again4.png";
import DivorceCamp from "../assets/images/Divorce Camp.png";
import TroubleTravel from "../assets/images/Trouble Travel.png";
import ChainsawMan from "../assets/images/Chainsaw Man.png";
import ResidentPlaybook from "../assets/images/Resident Playbook.png";
import ChefAndMyFridge from "../assets/images/Chef And My Fridge.png";

export default function Tving() {
    const top10 = [
        { image: TyphoonFamily, rank: 1, title: "태풍상사" },
        { image: JoyPopsLaughPops, rank: 2, title: "콩콩팡팡" },
        { image: EXchange4, rank: 3, title: "환승연애4" },
        { image: TheDreamLifeOfMrKim, rank: 4, title: "서울 자가에 대기업 다니는 김부장 이야기" },
        { image: MsIncognito, rank: 5, title: "착한 여자 부세미" },
        { image: ShinsProject, rank: 6, title: "신사장 프로젝트" },
        { image: ChefAndMyFridge, rank: 7, title: "냉장고를 부탁해" },
        { image: SingAgain4, rank: 8, title: "싱어게인4" },
        { image: DivorceCamp, rank: 9, title: "이혼숙려캠프" },
        { image: TroubleTravel, rank: 10, title: "지지고 볶는 여행" },
    ];

    const recentlyWatched = [
        { image: EXchange4, title: "환승연애4", episode: "시즌4 : 8화" },
        { image: ChainsawMan, title: "체인소 맨", episode: "10화" },
        { image: ResidentPlaybook, title: "언젠가는 슬기로울 전공의생활", episode: "12화" },
    ];

    return (
        <div className="bg-black min-h-screen pt-24 p-8">
            <Header />
            <ContentRow title="오늘의 티빙 TOP 10" contents={top10} type="top10" />
            <ContentRow title="최근 본 콘텐츠" contents={recentlyWatched} type="recent" />
        </div>
    );
}
