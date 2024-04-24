export enum FeedbackStatus {
    approved = "approved",
    pending = "pending",
    declined = "declined"
}

export type FeedbackType = {
    sender: string,
    name: string,
    content: string,
    date: string,
    status: FeedbackStatus,
    photos: string[]
}