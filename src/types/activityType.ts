import { PhotoDto } from '../_type/photo.dto.ts';

export type ActivityType = {
    activity_name: string
    activity_description: string
    photos: PhotoDto[]
}