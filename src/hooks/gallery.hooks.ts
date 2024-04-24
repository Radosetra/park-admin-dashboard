import {useQuery} from "react-query";
import {galleryService} from "@/service/gallery.service";

export const useFetchPhotos = ()=>{
    return useQuery({
        queryKey:["gallery"],
        queryFn: ()=> galleryService.getPhotos()
    })
}