import { HttpClient } from '../lib/http.client.ts';
import { CreateSpeciesDto } from '../_type/species.dto.ts';
import { ENDPOINT } from '../_constant/endpoint.ts';

class SpeciesService {
    public getSpecies(){
        return HttpClient.get(ENDPOINT.SPECIES)
    }
    public createSpecies(species:CreateSpeciesDto){
        return HttpClient.post(`${ENDPOINT.SPECIES}/create`,species)
    }
}

export const speciesService = new SpeciesService()