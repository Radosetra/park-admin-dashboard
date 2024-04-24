import { PhotoDto } from './photo.dto.ts';

export interface ActivityDto {
    activity_id?: string;
    activity_name: string
    activity_description: string
    pictures:PhotoDto[]|null
}

export interface CreateActivityDto {
    activity_name: string
    activity_description: string
    pictures?:PhotoDto[]
}