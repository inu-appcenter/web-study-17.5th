import { useEffect, useState } from "react";
import BusinessCard from "./components/BusinessCard";
import CardBack from "./components/CardBack";
import FlippableCard from "./components/FlippableCard";
import mailIcon from "./assets/mail.png";
import githubIcon from "./assets/github.png";
import velogIcon from "./assets/velog.png";
import type { Contact, LogoInfo, ProfileInfo } from "./types/card";

const logo: LogoInfo = {
  title: "HUIWON",
  subtitle: "INCHEON UNIVERSITY",
};

const profile: ProfileInfo = {
  position: "개발자",
  name: "유 희 원 Yu Hui Won",
  address: "서울특별시 서대문구",
};

const contacts: Contact[] = [
  { id: "phone", label: "전화번호", value: "010-8560-4428" },
  {
    id: "email",
    label: "메일",
    value: "heuiwon716@gmail.com",
    icon: mailIcon,
  },
  {
    id: "github",
    label: "깃허브",
    value: "Dead-or-Alive0609",
    icon: githubIcon,
  },
  {
    id: "velog",
    label: "벨로그",
    value: "https://velog.io/@hi_1/posts",
    icon: velogIcon,
  },
];

const App = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFlipped(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!isFlipped) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsFlipped(false);
    }, 8000);

    return () => window.clearTimeout(timeoutId);
  }, [isFlipped]);

  return (
    <div className="flex flex-col items-center gap-4">
      <FlippableCard
        isFlipped={isFlipped}
        onToggle={() => setIsFlipped((prev) => !prev)}
        front={(
          <BusinessCard
            logo={logo}
            position={profile.position}
            name={profile.name}
            address={profile.address}
            contacts={contacts}
          />
        )}
        back={<CardBack />}
      />
      <p className="text-xs text-neutral-500">
        카드를 클릭하면 뒷면이, Esc 키를 누르면 앞면이 보여요.
      </p>
    </div>
  );
};

export default App;
