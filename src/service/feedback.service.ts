import { HttpClient } from '../lib/http.client.ts';
import { FeedbackDto } from '../_type/feedback.dto.ts';
import { ENDPOINT } from '../_constant/endpoint.ts';

class FeedbackService {
    public getFeedbacks() {
            return HttpClient.get(ENDPOINT.FEEDBACK)
    }
    public getFeedbackById(feedback_id: string) {
        return HttpClient.get(ENDPOINT.FEEDBACK+feedback_id)
    }
    public submitFeedback(feedback:FormData){
        return HttpClient.post(ENDPOINT.NEWFEEDBACK, feedback)
    }
    public updateFeedbackStatus(status:Partial<FeedbackDto>, feedback_id:string){
        return HttpClient.put(`${ENDPOINT.FEEDBACK}/update/${feedback_id}`,status)
    }
}

export const feedbackService = new FeedbackService()