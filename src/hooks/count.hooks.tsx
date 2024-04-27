import { useQuery } from 'react-query';
import { countService } from '../service/count.service.ts';

export const useFetchOccuringEventCount=()=>{
  return useQuery({
    queryKey: ["count_event"],
    queryFn: ()=> countService.getOccuringEventCount()
  })
}

export const useFetchPendingFeedbackCount = ()=>{
  return useQuery({
    queryKey: ["pending_feedback"],
    queryFn: ()=> countService.getPendingFeedbackCount()
  })
}

export const useFetchPendingContactCount = ()=>{
  return useQuery({
    queryKey: ["pending_contact"],
    queryFn: ()=> countService.getPendingContactCount()
  })
}