import {useMutation, useQuery} from "react-query";
import {ContactDto, ContactList, ContactResponseDto} from "@/_type/contact.dto";
import {contactService} from "@/service/contact.service";
import {queryClient} from "@/lib/queryClient";

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
export const useFetchContactByStatus = (status:string)=>{
    return useQuery({
        queryKey: ["contact_status"],
        queryFn:()=>contactService.getContactsByStatus(status)
    })
}
export const useEditContactStatus = (contact_id:string)=>{
    return useMutation({
        mutationKey: ["edit_contact_status"],
        mutationFn:(status:Partial<ContactList>)=>contactService.updateStatus(status,contact_id),
        onSuccess: async ()=>{
            await queryClient.invalidateQueries("contacts")
            await queryClient.invalidateQueries("contact_status")
            await queryClient.resetQueries("contacts")
            await queryClient.resetQueries("contact_status")
        }
    })
}
export const useAnswerMessage = (contact_id:string)=>{
    return useMutation({
        mutationKey: ["answer_message"],
        mutationFn: (response:ContactResponseDto)=>contactService.answerMessage(contact_id,response),
        onSuccess: async ()=>{
            await queryClient.invalidateQueries("contact")
            await queryClient.invalidateQueries("contact_status")
            await queryClient.resetQueries("contact")
            await queryClient.resetQueries("contact_status")
        }
    })
}
