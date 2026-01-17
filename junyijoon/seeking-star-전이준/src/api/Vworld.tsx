import axios from "axios";

export async function myCoordinate(lat: number, lng: number): Promise<string> {
  try {
    const res = await axios.get("/vworld/req/address", {
      params: {
        service: "address",
        request: "getaddress",
        type: "BOTH",
        point: `${lng},${lat}`,
        key: import.meta.env.VITE_VWORLD_KEY,
        format: "json",
      },
    });
    if (res.data.response?.status !== "OK") {
      return "주소를 찾을 수 없습니다";
    }
    return res.data.response.result[0].text;
  } catch (error) {
    console.error("VWorld API Error:", error);
    return "주소를 찾을 수 없습니다";
  }
}
