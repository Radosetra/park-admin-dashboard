import { PhotoDto } from '../_type/photo.dto.ts';

export type LandscapeType = {
    landscape_name: string;
    type: "type1" | "type2";
    landscape_description: string;
    photos: PhotoDto[]
}