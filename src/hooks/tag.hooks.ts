import {useMutation, useQuery} from "react-query";

import { tagService } from "../service/tag.service.ts";
import { CreateTagDto } from "../_type/event.dto.ts";
import { queryClient } from '../lib/queryClient.ts';

export const useFetchTags = ()=>{
    return useQuery({
        queryKey:["tags"],
        queryFn: ()=>tagService.getTags()
    })
}

export const useCreateTag = () => {
    return useMutation({
        mutationKey: ["createTag"],
        mutationFn: (tag: CreateTagDto) => tagService.createTag(tag),
        onSuccess: async ()=> {
            await queryClient.invalidateQueries("tags")
            await queryClient.resetQueries("tags")
        }
    })
}