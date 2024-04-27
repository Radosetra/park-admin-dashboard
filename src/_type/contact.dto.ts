export interface ContactDto {
    user_email: string
    contact_content: string
}
export interface ContactList{
    contact_id?: string
    user_email: string
    contact_content: string
    contact_status: ContactStatus
    contact_date: Date
}

export enum ContactStatus {
    ANSWERED= "answered",
    PENDING= "pending"
}
export interface ContactResponseDto {
    response: string
}