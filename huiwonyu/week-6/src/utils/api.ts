export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// 슬래시 중복 방지: BASE_URL 끝의 / 제거
export function buildUrl(path: string) {
  const cleanBase = BASE_URL.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return cleanBase + cleanPath;
}
