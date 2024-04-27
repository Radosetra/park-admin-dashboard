import { useMutation, useQuery } from 'react-query';

import { galleryService } from '../service/gallery.service.ts';
import { queryClient } from '../lib/queryClient.ts';


export const useFetchPhotos = ()=>{
    return useQuery({
        queryKey:["gallery"],
        queryFn: ()=> galleryService.getPhotos()
    })
}
export const useUploadPhotos = (entity:string, entity_id:string)=>{
    return useMutation({
        mutationKey:["upload", entity, entity_id],
        mutationFn: (pictures:FormData)=> galleryService.uploadPhoto(pictures, entity, entity_id),
        onSuccess: async ()=>{
            await queryClient.invalidateQueries("landscape")
            await queryClient.resetQueries("landscape")
        }
    })
}