export interface EventDto{
    // test change string -> number
    event_id: string;
    event_name: string;
    event_start_date: Date;
    event_end_date: Date;
    event_description: string;
    allDay?: boolean;
    tags:TagDto[]
}
export interface CreateEventDto {
    event_name:string;
    event_start_date:string;
    event_end_date:string;
    event_description:string;
    tags?:TagDto[];
}

export interface EditEventDto {
    event_id: string;
    event_name: string;
    event_start_date: string;
    event_end_date: string;
    event_description: string;
    allDay?: boolean;
    tags:TagDto[]
}

export interface DeleteEventDto {
    event_id: string;
    event_name: string;
}
export interface TagDto{
    tag_id: string
    tag_name: string;
}
export interface CreateTagDto{
    tag_name: string;
}
export interface TagSelected extends TagDto {
    tag_selected: boolean;
}
export interface AddNotificationDto{
    client_email: string;
}