export interface SignupRequest {
  name: string;
  studentNumber: number;
  password: string;
  role: "USER" | "ADMIN";
}

export interface LoginRequest {
  studentNumber: number;
  password: string;
}

// 공통 응답 타입
export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}
