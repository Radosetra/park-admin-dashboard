import {HttpClient} from "@/lib/http.client";
import {ENDPOINT} from "@/_constant/endpoint";
import {CreateLandscapeDto} from "@/_type/landscape.dto";

class LandscapeService{
    public getLandscapes(){
        return HttpClient.get(ENDPOINT.LANDSCAPE)
    }
    public createLandScape(landscape:CreateLandscapeDto){
        return HttpClient.post(`${ENDPOINT.LANDSCAPE}/create`, landscape)
    }
}
export const landscapeService = new LandscapeService()