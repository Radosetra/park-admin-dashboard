import {useMutation, useQuery} from "react-query";
import { activityService } from '../service/activity.service.ts';
import { CreateActivityDto } from '../_type/activity.dto.ts';
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
        mutationFn:(activity:CreateActivityDto)=>activityService.createActivity(activity),
        onSuccess: async ()=>{
            await queryClient.invalidateQueries("activity")
            await queryClient.resetQueries("activity")
        }
    })
}

export const useEditActivity = (activity_id:string)=>{
    return useMutation({
        mutationKey:["editActivity"],
        mutationFn:(activity:Partial<CreateActivityDto>)=>activityService.editActivity(activity, activity_id),
        onSuccess: async ()=>{
            await queryClient.invalidateQueries("activity")
            await queryClient.resetQueries("activity")
        }
    })
}

export const useDeleteActivity = (activity_id:string)=>{
    return useMutation({
        mutationKey:["deleteActivity"],
        mutationFn:()=>activityService.deleteActivity(activity_id)
    })
}