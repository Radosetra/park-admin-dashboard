import {useMutation, useQuery} from "react-query";
import { landscapeService } from '../service/landscape.service.ts';
import { queryClient } from '../lib/queryClient.ts';

export const useFetchLandscape = ()=>{
    return useQuery({
        queryKey:["landscape"],
        queryFn: ()=> landscapeService.getLandscapes()
    })
}
export const useCreateLandscape = ()=>{
    return useMutation({
        mutationKey:["create-landscape"],
        mutationFn: (landscape:FormData)=> landscapeService.createLandScape(landscape),
        onSuccess: async ()=>{
            await queryClient.invalidateQueries("landscape")
            await queryClient.resetQueries("landscape")
        }
    })
}