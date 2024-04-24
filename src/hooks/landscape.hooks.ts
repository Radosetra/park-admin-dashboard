import {useMutation, useQuery} from "react-query";
import {landscapeService} from "@/service/landscape.service";
import {CreateLandscapeDto} from "@/_type/landscape.dto";
import {queryClient} from "@/lib/queryClient";

export const useFetchLandscape = ()=>{
    return useQuery({
        queryKey:["landscape"],
        queryFn: ()=> landscapeService.getLandscapes()
    })
}
export const useCreateLandscape = ()=>{
    return useMutation({
        mutationKey:["create-landscape"],
        mutationFn: (landscape:CreateLandscapeDto)=> landscapeService.createLandScape(landscape),
        onSuccess: async ()=>{
            await queryClient.invalidateQueries("landscape")
            await queryClient.resetQueries("landscape")
        }
    })
}