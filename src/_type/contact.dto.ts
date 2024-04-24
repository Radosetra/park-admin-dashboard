export interface ContactDto {
    user_email: string
    contact_content: string
}
export interface ContactList{
    contact_id?: string
    user_email: string
    contact_content: string
    contact_status: string
}
export interface ContactResponseDto {
    contact_content: string
}