import {useMutation, useQuery} from "react-query";
import { feedbackService } from '../service/feedback.service.ts';
import { queryClient } from '../lib/queryClient.ts';
import { FeedbackDto } from '../_type/feedback.dto.ts';

export const useFetchFeedback = ()=>{
    return useQuery({
        queryKey:["feedback"],
        queryFn: ()=> feedbackService.getFeedbacks()
    })
}

export const useFetchFeedbackById = (eventId:string)=>{
    return useQuery({
        queryKey:["feedback", eventId],
        queryFn: ()=>feedbackService.getFeedbackById(eventId)
    })
}

export const useUpdateFeedbackStatus = (feedback_id:string)=>{
    return useMutation({
        mutationKey:["udpate_feedback_status"],
        mutationFn: (status:Partial<FeedbackDto>)=>feedbackService.updateFeedbackStatus(status,feedback_id),
        onSuccess: async ()=>{
            await queryClient.invalidateQueries("feedback")
            await queryClient.invalidateQueries("feedback")
        }
    })
}
export const useSubmitFeedback = ()=>{
    return useMutation({
        mutationKey:["create_feedback"],
        mutationFn: (feedback:FormData)=>feedbackService.submitFeedback(feedback),
        onSuccess: async ()=>{
            await queryClient.invalidateQueries("feedback")
            await queryClient.resetQueries("feedback")
        }
    })
}