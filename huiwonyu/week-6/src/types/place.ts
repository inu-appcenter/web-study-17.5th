import type { ApiResponse } from "./common";

export type PlaceType = "INDOOR" | "OUTDOOR" | string;

export interface Place {
    id: number;
    latitude: string;
    longitude: string;
    name: string;
    locationDetail: string;
    description: string;
    photo: string;
    sleepingAllowed: boolean;
    eatingAllowed: boolean;
    hasPowerOutlet: boolean;
    studyAllowed: boolean;
    entertainment: boolean;
    reservationRequired: boolean;
    placeType: PlaceType;
}

export interface PlaceListData {
    content: Place[];
    page: number;
    size: number;
    totalElements: number;
}

export type PlaceListResponse = ApiResponse<PlaceListData>;