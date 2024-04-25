import { HttpClient } from '../lib/http.client.ts';
import { ENDPOINT } from '../_constant/endpoint.ts';
import { FeedbackDto } from '../_type/feedback.dto.ts';

class FeedbackService {
    public getFeedbacks() {
        return HttpClient.get(ENDPOINT.FEEDBACK)
    }
    public getFeedbackByStatus(feedback_status:string){
        return HttpClient.get(ENDPOINT.FEEDBACKSTATUS+feedback_status)
    }
    public getFeedbackById(feedback_id: string) {
        return HttpClient.get(ENDPOINT.FEEDBACK+feedback_id)
    }
    public submitFeedback(feedback:FormData){
        return HttpClient.post(ENDPOINT.NEWFEEDBACK, feedback)
    }
    // public changeFeedbackStatus(feedbackId:string ,feedback:FormData){
    //     return HttpClient.post(ENDPOINT.FEEDBACK+feedbackId+"/validate", feedback)
    // }
    public updateFeedbackStatus(feedback_status:Partial<FeedbackDto>, feedbackId:string){
        return HttpClient.put(ENDPOINT.FEEDBACK+feedbackId+"/validate", feedback_status)
    }
}

export const feedbackService = new FeedbackService()