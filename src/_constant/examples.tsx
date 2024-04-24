import top1 from "../../../untitled/src/assets/image/top1.jpg"
import top12 from "../../../untitled/src/assets/image/top12.jpg"
import top11 from "../../../untitled/src/assets/image/top11.jpg"
import top13 from "../../../untitled/src/assets/image/top13.jpg"
import top2 from "../../../untitled/src/assets/image/top2.jpg"
import top21 from "../../../untitled/src/assets/image/top21.jpg"
import top22 from "../../../untitled/src/assets/image/top22.jpg"
import top3 from "../../../untitled/src/assets/image/top3.jpg"
import top31 from "../../../untitled/src/assets/image/top31.jpg"
import top32 from "../../../untitled/src/assets/image/top32.jpg"
import {StaticImageData} from "next/image";
import {IEventCard, IFeedbackDialog, INatureCard} from "@/_type/data.display";
import act1 from "../assets/image/tsingy2.jpg"
import act2 from "../assets/image/tsingy3.jpg"
import act3 from "../assets/image/tsingy4.jpg"
import act4 from "../assets/image/tsiribihina-river.jpg"

export interface ITopCarousel {
    images:StaticImageData[]
    position:L.LatLngExpression
}
export const topCarousels:ITopCarousel[] = [
    {
        "images": [
            top1,
            top11,
            top12,
            top13,
        ],
        "position":[-18.9127, 44.7904]
    },
    {
        "images":[
            top2,
            top21,
            top22,
        ],
        "position":[-18.9127, 44.7904]
    },
    {
        "images":[
            top3,
            top31,
            top32,
        ],
        "position":[-18.9127, 44.7904]
    }
]

export const events:IEventCard[] = [
    {
        name:"Hiking Events",
        description:"Hiking Events is a feature of the Google Maps service that allows you to connect to Google Maps",
        endDate: new Date(2024, 5, 15),
        startDate: new Date(2024, 4,15),
        tags:[
            "hicking",
            "group",
            "adventure",
            "picnic",
            "limestone"
        ]
    },{
        name:"Hiking Events",
        description:"Hiking Events is a feature of the Google Maps service that allows you to connect to Google Maps",
        endDate: new Date(2024, 5, 15),
        startDate: new Date(2024, 4,15),
        tags:[
            "hicking",
            "group",
            "adventure",
            "picnic",
            "limestone"
        ]
    },{
        name:"Hiking Events",
        description:"Hiking Events is a feature of the Google Maps service that allows you to connect to Google Maps",
        endDate: new Date(2024, 5, 15),
        startDate: new Date(2024, 4,15),
        tags:[
            "hicking",
            "group",
            "adventure",
            "picnic",
            "limestone"
        ]
    },
]
export const activities:StaticImageData[] = [
    act1,
    act2,
    act3,
    act4,
]

export const feedbacks:IFeedbackDialog[] = [
    {
        user:{
            email: "johndoe@example.com",
            profileUrl:null
        },
        createdAt:new Date(2024,3,13),
        images:[],
        content:"Tsingy is a wonderful place! The limestones are just unique and astonishing! Seeing the lemurs jumping on them, the birds flying above, and some other rare animal species; not to mention plants"
    },
    {
        user:{
            email: "cujohjoyline@example.com",
            profileUrl:null
        },
        createdAt:new Date(2024,4,15),
        images:[],
        content:"Tsingy is a wonderful place! The limestones are just unique and astonishing! Seeing the lemurs jumping on them, the birds flying above, and some other rare animal species; not to mention plants"
    },
    {
        user:{
            email: "mista@example.com",
            profileUrl:null
        },
        createdAt:new Date(2024,3,13),
        images:[],
        content:"Tsingy is a wonderful place! The limestones are just unique and astonishing! Seeing the lemurs jumping on them, the birds flying above, and some other rare animal species; not to mention plants"
    },
    {
        user:{
            email: "dio@example.com",
            profileUrl:null
        },
        createdAt:new Date(2024,4,13),
        images:[
            top11,
            top12,
            top13
        ],
        content:"Tsingy is a wonderful place! The limestones are just unique and astonishing! Seeing the lemurs jumping on them, the birds flying above, and some other rare animal species; not to mention plants"
    },
    {
        user:{
            email: "speedwagon@example.com",
            profileUrl:null
        },
        createdAt:new Date(2024,1,13),
        images:[],
        content:"Tsingy is a wonderful place! The limestones are just unique and astonishing! Seeing the lemurs jumping on them, the birds flying above, and some other rare animal species; not to mention plants"
    }

]

export const natures:Partial<INatureCard>[] = [
    {
        title:"Birds",
        type:"Animal",
        description:"Birds are the most important part of the species and species of the species that are the most important part of the species that are the most important part of the species",
    },
    {
        title:"Birds",
        type:"Animal",
        description:"Birds are the most important part of the species and species of the species that are the most important part of the species that are the most important part of the species",
    },
    {
        title:"Birds",
        type:"Animal",
        description:"Birds are the most important part of the species and species of the species that are the most important part of the species that are the most important part of the species",
    },
    {
        title:"Birds",
        type:"Animal",
        description:"Birds are the most important part of the species and species of the species that are the most important part of the species that are the most important part of the species",
    }
]