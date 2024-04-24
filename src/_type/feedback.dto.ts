import {PhotoDto} from "@/_type/photo.dto";

export interface FeedbackCreateDto{
    feedback_content:string
    email:string
}
export interface FeedbackDto {
    feedback_id:string
    feedback_content:string
    feedback_sender:string
    feedback_date:Date
    feedback_status?:Date
    pictures:PhotoDto[]|null
}