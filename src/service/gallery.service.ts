import {HttpClient} from "@/lib/http.client";
import {ENDPOINT} from "@/_constant/endpoint";

class GalleryService {
    public getPhotos(){
        return HttpClient.get(ENDPOINT.GALLERY)
    }
}

export const galleryService = new GalleryService();