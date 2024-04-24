import { HttpClient } from '../lib/http.client.ts';
import { ENDPOINT } from '../_constant/endpoint.ts';

class LandscapeService{
    public getLandscapes(){
        return HttpClient.get(ENDPOINT.LANDSCAPE)
    }
    public createLandScape(landscape:FormData){
        return HttpClient.post(`${ENDPOINT.LANDSCAPE}/create`, landscape)
    }
}
export const landscapeService = new LandscapeService()