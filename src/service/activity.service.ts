import {HttpClient} from "@/lib/http.client";
import {ENDPOINT} from "@/_constant/endpoint";
import {CreateActivityDto} from "@/_type/activity.dto";

class ActivityService {
    public getActivity(){
        return HttpClient.get(ENDPOINT.ACTIVITY)
    }
    public createActivity (activity:CreateActivityDto) {
        return HttpClient.post(`${ENDPOINT.ACTIVITY}/create`,activity)
    }
    public editActivity (activity:Partial<CreateActivityDto>, activity_id:string) {
        return HttpClient.post(`${ENDPOINT.ACTIVITY}/edit/${activity_id}`,activity)
    }
    public deleteActivity (activity_id:string) {
        return HttpClient.delete(`${ENDPOINT.ACTIVITY}/delete/${activity_id}`)
    }
}

export const activityService = new ActivityService()