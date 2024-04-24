import { HttpClient } from '../lib/http.client.ts';
import { ENDPOINT } from '../_constant/endpoint.ts';

class GalleryService {
    public getPhotos(){
        return HttpClient.get(ENDPOINT.GALLERY)
    }
}

export const galleryService = new GalleryService();