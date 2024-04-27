import { HttpClient } from '../lib/http.client.ts';
import { ENDPOINT } from '../_constant/endpoint.ts';

class ActivityService {
    public getActivity(){
        return HttpClient.get(ENDPOINT.ACTIVITY)
    }
    public createActivity (activity:FormData) {
        return HttpClient.post(`${ENDPOINT.ACTIVITY}create`,activity)
    }
    public editActivity (activity:FormData, activity_id:string) {
        return HttpClient.put(`${ENDPOINT.ACTIVITY}update/${activity_id}`,activity)
    }
    public deleteActivity (activity_id:string) {
        return HttpClient.delete(`${ENDPOINT.ACTIVITY}delete/${activity_id}`)
    }
}

export const activityService = new ActivityService()