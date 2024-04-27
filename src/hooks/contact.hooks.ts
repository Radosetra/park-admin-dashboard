import {useMutation, useQuery} from "react-query";

import { ContactDto, ContactList, ContactResponseDto, ContactStatus } from '../_type/contact.dto.ts';
import { contactService } from '../service/contact.service.ts';
import { queryClient } from '../lib/queryClient.ts';

export const useSubmitContact = ()=>{
    return useMutation({
        mutationKey: ["contact"],
        mutationFn:(contact:ContactDto)=>contactService.submitContact(contact),
        onSuccess: async ()=>{
            await queryClient.invalidateQueries("contact")
            await queryClient.invalidateQueries("contact_status")
            await queryClient.resetQueries("contact")
            await queryClient.resetQueries("contact_status")
        }
    })
}
export const useFetchContacts = ()=>{
    return useQuery({
        queryKey: ["contacts"],
        queryFn:()=>contactService.getContacts()
    })
}
export const useFetchContactByStatus = (status:ContactStatus)=>{
    return useQuery({
        queryKey: ["contact", status],
        queryFn:()=>contactService.getContactsByStatus(status)
    })
}
export const useEditContactStatus = (contact_id:string)=>{
    return useMutation({
        mutationKey: ["edit_contact_status"],
        mutationFn:(status:Partial<ContactList>)=>contactService.updateStatus(status,contact_id),
        onSuccess: async ()=>{
            await queryClient.invalidateQueries("contacts")
            await queryClient.resetQueries("contacts")
            await queryClient.invalidateQueries(["contact", ContactStatus.ANSWERED])
            await queryClient.invalidateQueries(["contact", ContactStatus.PENDING])
            await queryClient.resetQueries(["contact",ContactStatus.ANSWERED])
            await queryClient.resetQueries(["contact",ContactStatus.PENDING])
        }
    })
}
export const useAnswerMessage = (contact_id:string)=>{
    return useMutation({
        mutationKey: ["answer_message"],
        mutationFn: (response:ContactResponseDto)=>contactService.answerMessage(contact_id,response),
        onSuccess: async ()=>{
            await queryClient.invalidateQueries("contact")
            await queryClient.resetQueries("contact")
            await queryClient.invalidateQueries(["contact", ContactStatus.ANSWERED])
            await queryClient.invalidateQueries(["contact", ContactStatus.PENDING])
            await queryClient.resetQueries(["contact",ContactStatus.ANSWERED])
            await queryClient.resetQueries(["contact",ContactStatus.PENDING])
        }
    })
}
