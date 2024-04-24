import { PhotoDto } from './photo.dto.ts';

export interface LandscapeDto{
    landscape_id?: string;
    landscape_name: string
    landscape_type: string
    // landscape_position:number[]
    landscape_description: string
    pictures:PhotoDto[]|null
}
export interface CreateLandscapeDto{
    landscape_name: string
    landscape_type: string
    // landscape_position:number[]
    landscape_description: string
    pictures:PhotoDto[]|null
}