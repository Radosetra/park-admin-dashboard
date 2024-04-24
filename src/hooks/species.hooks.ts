import {useMutation, useQuery} from "react-query";
import {speciesService} from "@/service/species.service";
import {CreateSpeciesDto} from "@/_type/species.dto";
import {queryClient} from "@/lib/queryClient";

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