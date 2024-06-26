import { HttpClient } from '../lib/http.client.ts';
import { ClientDto } from '../_type/client.dto.ts';
import { CreateEventDto, EditEventDto, EventDto } from '../_type/event.dto.ts';
import { ENDPOINT } from '../_constant/endpoint.ts';

class EventService{
    public getEvents(){
        return HttpClient.get(ENDPOINT.EVENT+"all/")
    }
    public getEventById(eventId: string){
        return HttpClient.get(ENDPOINT.EVENT+eventId)
    }
    public addToNotifications(eventId:string, client:ClientDto){
        return HttpClient.post(`${ENDPOINT.EVENT}${eventId}/interested`, client)
    }
    public createEvent(event:CreateEventDto){
        return HttpClient.post(`${ENDPOINT.EVENT}create`, event);
    }
    public editEvent (eventId:string, event:EditEventDto){
        console.log("Edit event", eventId, event);
        
        return HttpClient.put(`${ENDPOINT.EVENT}update/${eventId}`, event)
    }
    public deleteEvent(eventId:string){
        return HttpClient.delete(`${ENDPOINT.EVENT}delete/${eventId}`)
    }
}

export const eventService = new EventService()