import { HttpClient } from '../lib/http.client.ts';
import { ENDPOINT } from '../_constant/endpoint.ts';

class CountService {
  public getOccuringEventCount(){
    return HttpClient.get(`${ENDPOINT.COUNT}event`)
  }
  public getPendingFeedbackCount(){
    return HttpClient.get(`${ENDPOINT.COUNT}feedback`)
  }
  public getPendingContactCount(){
    return HttpClient.get(`${ENDPOINT.COUNT}contact`)
  }
}

export const countService = new CountService()