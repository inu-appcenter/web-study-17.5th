export type VWorldAddressText = string;

export interface placeInformation {
  id: number;
  placeName: string;
  distance: number;
  cloud: number;
  visibility: number;
  dust: number;
  score: number;
  favorite: boolean;
}

export interface placeListType {
  id: number;
  placeName: string;
  distance: number;
  cloud: number;
  visibility: number;
  dust: number;
  score: number;
  favorite: boolean;
}
export interface placeDetail {
  placeName: string;
  cloud: number;
  visibility: number;
  dust: number;
  score: number;
  detail: string;
}
