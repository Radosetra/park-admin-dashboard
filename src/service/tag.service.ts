import { HttpClient } from '../lib/http.client.ts';
import { TagDto } from '../_type/event.dto.ts';
import { CreateTagDto } from '../_type/event.dto.ts';
import { ENDPOINT } from '../_constant/endpoint.ts';

class TagService{
    public getTags(){
        return HttpClient.get(ENDPOINT.TAG)
    }
    public createTag(tag:CreateTagDto){
        return HttpClient.post(ENDPOINT.TAGCREATE, tag);
    }
}

export const tagService = new TagService()