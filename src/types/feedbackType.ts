export enum FeedbackStatus {
    APPROVED = "approved",
    PENDING = "pending",
    REFUSED = "refused"
}

export type FeedbackType = {
    sender: string,
    name: string,
    content: string,
    date: string,
    status: FeedbackStatus,
    photos: string[]
}