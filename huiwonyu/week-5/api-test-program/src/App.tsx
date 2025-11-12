import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_API_KEY
      }&autoload=false`;
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((pos) => {
            const { latitude, longitude } = pos.coords;
            const container = document.getElementById("map");
            if (!container) return;

            const loc = new window.kakao.maps.LatLng(latitude, longitude);
            const options = { center: loc, level: 3 };
            const map = new window.kakao.maps.Map(container, options);

            new window.kakao.maps.Marker({
              position: loc,
              map,
            });
          });
        } else {
          alert("이 브라우저는 위치 정보를 지원하지 않습니다.");
        }
      });
    };
    document.head.appendChild(script);
  }, []);

  return <div id="map" style={{ width: "100%", height: "100vh" }} />;
};

export default App;
