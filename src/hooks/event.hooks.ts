import {useMutation, useQuery} from "react-query";
import { eventService } from '../service/event.service.ts';
import { ClientDto } from '../_type/client.dto.ts';
import { CreateEventDto } from '../_type/event.dto.ts';
import { queryClient } from '../lib/queryClient.ts';

export const useFetchEvents = ()=>{
    return useQuery({
        queryKey:["events"],
        queryFn: ()=>eventService.getEvents()
    })
}

export const useAddToNotifications = (eventId:string)=>{
    return useMutation({
        mutationKey:["addToNotifications"],
        mutationFn: (client:ClientDto)=>eventService.addToNotifications(eventId, client),
    })
}

export const useCreateEvent = ()=>{
    return useMutation({
        mutationKey:["createEvent"],
        mutationFn: (event:CreateEventDto)=>eventService.createEvent(event),
        onSuccess: async ()=>{
            await queryClient.invalidateQueries("events")
            await queryClient.resetQueries("events")
        }
    })
}
export const useEditEvent = (event_id:string)=>{
    return useMutation({
        mutationKey:["editEvent"],
        mutationFn: (event:Partial<CreateEventDto>)=>eventService.editEvent(event_id,event),
        onSuccess: async ()=>{
            await queryClient.invalidateQueries("events")
            await queryClient.resetQueries("events")
        }
    })
}
export const useDeleteEvent = (event_id:string)=>{
    return useMutation({
        mutationKey:["deleteEvent"],
        mutationFn: ()=>eventService.deleteEvent(event_id),
        onSuccess: async ()=>{
            await queryClient.invalidateQueries("events")
            await queryClient.resetQueries("events")
        }
    })
}