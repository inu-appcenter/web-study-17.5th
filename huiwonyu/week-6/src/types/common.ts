export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

export interface PageMeta {
  page: number;
  size: number;
  totalElements: number;
}