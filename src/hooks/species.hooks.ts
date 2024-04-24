import {useMutation, useQuery} from "react-query";
import { speciesService } from '../service/species.service.ts';
import { CreateSpeciesDto } from '../_type/species.dto.ts';
import { queryClient } from '../lib/queryClient.ts';

export const useFetchSpecies = ()=>{
    return useQuery({
        queryKey: ["species"],
        queryFn: ()=>speciesService.getSpecies()
    })
}
export const useCreateSpecies = ()=>{
    return useMutation({
        mutationKey: ["create_species"],
        mutationFn: (specie:CreateSpeciesDto)=>speciesService.createSpecies(specie),
        onSuccess: async ()=>{
            await queryClient.invalidateQueries("species")
            await queryClient.resetQueries("species")
        }
    })
}