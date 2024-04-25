import { PhotoDto } from './photo.dto.ts';
import { FeedbackStatus } from '../types/feedbackType.ts';

export interface FeedbackCreateDto{
    feedback_content:string
    email:string
}
export interface FeedbackDto {
    feedback_id:string
    feedback_content:string
    feedback_sender:string
    feedback_date:Date

    // feedback_status?:Date
    feedback_status:FeedbackStatus
    pictures:PhotoDto[]|null
}