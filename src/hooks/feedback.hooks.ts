import {useMutation, useQuery} from "react-query";
import { feedbackService } from '../service/feedback.service.ts';
import { queryClient } from '../lib/queryClient.ts';
import { FeedbackDto } from "../_type/feedback.dto.ts";
import { FeedbackStatus } from "../types/feedbackType.ts";
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

export const useFetchFeedbackByStatus = (feedbackStatus:string) => {
    return useQuery({
        queryKey:["feedbackStatus", feedbackStatus],
        queryFn: ()=>feedbackService.getFeedbackByStatus(feedbackStatus)
    })
}

export const useUpdateFeedbackStatus = (feedback_id:string)=>{
    return useMutation({
        mutationKey:["udpate_feedback_status", feedback_id],
        mutationFn: (feedback_status:Partial<FeedbackDto>)=>feedbackService.updateFeedbackStatus(feedback_status,feedback_id),
        onSuccess: async ()=>{
            await queryClient.invalidateQueries("feedback")
            await queryClient.resetQueries("feedback")

            await queryClient.invalidateQueries(["feedbackStatus", FeedbackStatus.APPROVED])
            await queryClient.invalidateQueries(["feedbackStatus", FeedbackStatus.PENDING])
            await queryClient.invalidateQueries(["feedbackStatus", FeedbackStatus.REFUSED])

            await queryClient.resetQueries(["feedbackStatus", FeedbackStatus.APPROVED])
            await queryClient.resetQueries(["feedbackStatus", FeedbackStatus.PENDING])
            await queryClient.resetQueries(["feedbackStatus", FeedbackStatus.REFUSED])
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