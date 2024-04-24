export interface EventDto{
    event_id: string;
    event_name: string;
    event_start_date: Date;
    event_end_date: Date;
    event_description: string;
    tags:TagDto[]
}
export interface CreateEventDto {
    event_name:string;
    event_start_date:Date;
    event_end_date:Date;
    event_description:string;
    tags?:TagDto[];
}
export interface TagDto{
    tag_id: string
    tag_name: string;
}
export interface AddNotificationDto{
    client_email: string;
}