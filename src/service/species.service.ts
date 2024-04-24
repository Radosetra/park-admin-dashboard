import { HttpClient } from '../lib/http.client.ts';
import { ENDPOINT } from '../_constant/endpoint.ts';

class SpeciesService {
    public getSpecies(){
        return HttpClient.get(ENDPOINT.SPECIES)
    }
    public createSpecies(species:FormData){
        return HttpClient.post(`${ENDPOINT.SPECIES}/create`,species)
    }
}

export const speciesService = new SpeciesService()