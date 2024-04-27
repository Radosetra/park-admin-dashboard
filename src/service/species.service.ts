import { HttpClient } from '../lib/http.client.ts';
import { ENDPOINT } from '../_constant/endpoint.ts';
import { SpecieType } from '../_type/species.dto.ts';

class SpeciesService {
    public getSpecies(){
        return HttpClient.get(ENDPOINT.SPECIES)
    }
    public createSpecies(species:FormData){
        return HttpClient.post(`${ENDPOINT.SPECIES}create`,species)
    }
    public getSpeciesByType(type:SpecieType){
        return HttpClient.get(`${ENDPOINT.SPECIES}type?q=${type}`)
    }
    public editSpecies(specie_id:string, specie:FormData){
        return HttpClient.put(`${ENDPOINT.SPECIES}update/${specie_id}`, specie)
    }
}

export const speciesService = new SpeciesService()