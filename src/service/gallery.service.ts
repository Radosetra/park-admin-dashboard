import { HttpClient } from '../lib/http.client.ts';
import { ENDPOINT } from '../_constant/endpoint.ts';

class GalleryService {
    public getPhotos(){
        return HttpClient.get(ENDPOINT.GALLERY)
    }
    public uploadPhoto(pictures:FormData, entity:string, entity_id:string){
        return HttpClient.post(`${ENDPOINT.GALLERY}upload_pictures/${entity}/${entity_id}`,pictures)
    }
}

export const galleryService = new GalleryService();