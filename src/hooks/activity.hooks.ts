import {useMutation, useQuery} from "react-query";
import { activityService } from '../service/activity.service.ts';
import { queryClient } from '../lib/queryClient.ts';

export const useFetchActivity = ()=>{
    return useQuery({
        queryKey:["activity"],
        queryFn: ()=>activityService.getActivity()
    })
}

export const useCreateActivity = ()=>{
    return useMutation({
        mutationKey:["createActivity"],
        mutationFn:(activity:FormData)=>activityService.createActivity(activity),
        onSuccess: async ()=>{
            await queryClient.invalidateQueries("activity")
            await queryClient.resetQueries("activity")
        }
    })
}

export const useEditActivity = (activity_id:string)=>{
    return useMutation({
        mutationKey:["editActivity", activity_id],
        mutationFn:(activity:FormData)=>activityService.editActivity(activity, activity_id),
        onSuccess: async ()=>{
            await queryClient.invalidateQueries("activity")
            await queryClient.resetQueries("activity")
        }
    })
}

export const useDeleteActivity = (activity_id:string)=>{
    return useMutation({
        mutationKey:["deleteActivity", activity_id],
        mutationFn:()=>activityService.deleteActivity(activity_id),
        onSuccess:async ()=>{
            await queryClient.invalidateQueries("activity")
            await queryClient.resetQueries("activity")
        }
    })
}