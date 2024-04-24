import {ReactNode} from "react";
import {StaticImageData} from "next/image";
import {PhotoDto} from "@/_type/photo.dto";
import {TagDto} from "@/_type/event.dto";

export interface IWonderCard {
    children:ReactNode
    title:string
    subtitle:string
    description:string
    position:L.LatLngExpression
}
export interface IEventCard {
    event_id:string
    name:string
    description:string
    tags:TagDto[]
    startDate:Date
    endDate:Date
}
export interface IUser {
    email:string
    profileUrl:string|null
}
export interface IFeedbackCard {
    user:string
    createdAt:Date
    content:string
}
export interface IFeedbackDialog extends IFeedbackCard{
    images?:PhotoDto[]
}
export interface INatureCard {
    children:ReactNode
    title:string
    type:string
    description:string
}