import { HttpClient } from '../lib/http.client.ts';
import { CreateLandscapeDto } from '../_type/landscape.dto.ts';
import { ENDPOINT } from '../_constant/endpoint.ts';

class LandscapeService{
    public getLandscapes(){
        return HttpClient.get(ENDPOINT.LANDSCAPE)
    }
    public createLandScape(landscape:CreateLandscapeDto){
        return HttpClient.post(`${ENDPOINT.LANDSCAPE}/create`, landscape)
    }
}
export const landscapeService = new LandscapeService()