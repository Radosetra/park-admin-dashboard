import { HttpClient } from '../lib/http.client.ts';
import { ENDPOINT } from '../_constant/endpoint.ts';

class OverviewService {
  public getOccuringEventCount(){
    return HttpClient.get(`${ENDPOINT.COUNT}event`)
  }
  public getPendingFeedbackCount(){
    return HttpClient.get(`${ENDPOINT.COUNT}feedback`)
  }
  public getPendingContactCount(){
    return HttpClient.get(`${ENDPOINT.COUNT}contact`)
  }
  public getRecentPendingFeedback(){
    return HttpClient.get(`${ENDPOINT.OVERVIEW}feedback`)
  }
  public getRecentPendingContact(){
    return HttpClient.get(`${ENDPOINT.OVERVIEW}contact`)
  }
}

export const overviewService = new OverviewService()