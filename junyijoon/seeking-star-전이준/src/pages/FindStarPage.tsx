import "../css/main.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import location from "../assets/location.svg";
import relocation from "../assets/reset-location.svg";
import cloud from "../assets/cloud.svg";
import eye from "../assets/eye.svg";
import wind from "../assets/wind.svg";
import { useEffect, useState } from "react";
import { TEXT } from "../constants/text";
import { myCoordinate } from "../api/Vworld";
import Place from "../component/Place";
import { placeData } from "../data/placeData";
import PlaceProfile from "../component/PlaceProfile";

function findStarPage() {
  const [address, setAddress] = useState<string>("");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const myPlace = placeData.find((p) => p.id == 1);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  //좌표 인천대학교 고정
  useEffect(() => {
    myCoordinate(37.3758, 126.6328).then(setAddress).catch(console.error);
  }, []);
  return (
    <>
      <div className="page">
        <header>
          <Header />
        </header>
        <main className="midset">
          {/* 현위치 관련 */}
          <div className="location">
            <div className="locationInformation">
              <img src={location} />
              <span className="locationCoordination">
                <div>{TEXT.MYCOORDINATE}</div>
                <div>{address}</div>
              </span>
              <div
                className="locationReCoordination cursor"
                onClick={() => {
                  myCoordinate(37.3758, 126.6328).then(setAddress);
                }}
              >
                <img src={relocation} />
                {TEXT.COORDINATERESET}
              </div>
            </div>
            {myPlace && (
              <div className="locationStatus">
                <div>
                  <img src={cloud} />
                  <span>
                    {myPlace.cloud}
                    {TEXT.SIGN.PERCENT}
                  </span>
                </div>
                <div>
                  <img src={eye} />
                  <span>
                    {myPlace.visibility}
                    {TEXT.SIGN.METER}
                  </span>
                </div>
                <div>
                  <img src={wind} />
                  <span>
                    {myPlace.dust}
                    {TEXT.SIGN.DENSITY}
                  </span>
                </div>
              </div>
            )}
          </div>
          {/* 검색창 */}
          <div>
            <input
              type="search"
              placeholder="관측 장소를 검색하세요..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <span>{TEXT.SEARCH}</span>
            <span>{TEXT.FAVORITE}</span>
          </div>
          {placeData
            .filter((place) => place.placeName.includes(search))
            .map((place) => (
              <Place
                onClick={() => {
                  setOpen(true);
                }}
                key={place.id}
                id={place.id}
                placeName={place.placeName}
                distance={place.distance}
                cloud={place.cloud}
                visibility={place.visibility}
                dust={place.dust}
                score={place.score}
                favorite={true}
              />
            ))}
          {open && (
            <PlaceProfile
              onClick={() => {
                setOpen(false);
              }}
            />
          )}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default findStarPage;
