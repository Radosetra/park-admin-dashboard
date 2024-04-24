import { HttpClient } from '../lib/http.client.ts';
import { CreateActivityDto } from '../_type/activity.dto.ts';
import { ENDPOINT } from '../_constant/endpoint.ts';

class ActivityService {
    public getActivity(){
        return HttpClient.get(ENDPOINT.ACTIVITY)
    }
    public createActivity (activity:FormData) {
        return HttpClient.post(`${ENDPOINT.ACTIVITY}create`,activity)
    }
    public editActivity (activity:Partial<CreateActivityDto>, activity_id:string) {
        return HttpClient.post(`${ENDPOINT.ACTIVITY}edit/${activity_id}`,activity)
    }
    public deleteActivity (activity_id:string) {
        return HttpClient.delete(`${ENDPOINT.ACTIVITY}delete/${activity_id}`)
    }
}

export const activityService = new ActivityService()