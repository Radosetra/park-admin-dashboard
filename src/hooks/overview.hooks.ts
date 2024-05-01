import { useQuery } from 'react-query';
import { overviewService } from '../service/overview.service.ts';

export const useFetchOccuringEventCount=()=>{
  return useQuery({
    queryKey: ["count_event"],
    queryFn: ()=> overviewService.getOccuringEventCount()
  })
}

export const useFetchPendingFeedbackCount = ()=>{
  return useQuery({
    queryKey: ["pending_feedback"],
    queryFn: ()=> overviewService.getPendingFeedbackCount()
  })
}

export const useFetchPendingContactCount = ()=>{
  return useQuery({
    queryKey: ["pending_contact"],
    queryFn: ()=> overviewService.getPendingContactCount()
  })
}

export const useFetchRecentPendingFeedback = ()=>{
  return useQuery({
    queryKey: ["recent_feedback"],
    queryFn: ()=> overviewService.getRecentPendingFeedback()
  })
}

export const useFetchRecentPendingContact = ()=>{
  return useQuery({
    queryKey: ["recent_contact"],
    queryFn: ()=> overviewService.getRecentPendingContact()
  })
}