import {HttpClient} from "@/lib/http.client";
import {ENDPOINT} from "@/_constant/endpoint";
import {CreateSpeciesDto} from "@/_type/species.dto";

class SpeciesService {
    public getSpecies(){
        return HttpClient.get(ENDPOINT.SPECIES)
    }
    public createSpecies(species:CreateSpeciesDto){
        return HttpClient.post(`${ENDPOINT.SPECIES}/create`,species)
    }
}

export const speciesService = new SpeciesService()