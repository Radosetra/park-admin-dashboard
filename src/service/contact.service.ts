import {ContactDto, ContactList, ContactResponseDto} from "@/_type/contact.dto";
import {HttpClient} from "@/lib/http.client";
import {ENDPOINT} from "@/_constant/endpoint";

class ContactService {
    public submitContact(contact: ContactDto){
        return HttpClient.post(ENDPOINT.CONTACT, contact)
    }

    public getContacts() {
        return HttpClient.get(ENDPOINT.CONTACT)
    }
    public getContactsByStatus(status:string){
        return HttpClient.get(`${ENDPOINT.CONTACT}?status=${status}`)
    }
    public updateStatus(status:Partial<ContactList>, contact_id:string){
        return HttpClient.put(`${ENDPOINT.CONTACT}/update/${contact_id}`, status)
    }
    public answerMessage(contact_id:string, response:ContactResponseDto){
        return HttpClient.post(`${ENDPOINT.CONTACT}/${contact_id}/response`, response)
    }
}

export const contactService = new ContactService();