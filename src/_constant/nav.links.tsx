import {ReactNode} from "react";

export interface INavLink {
    to: string
    label: string
    icon?:ReactNode
    subLink?:INavLink[]
}
export const navLinks:INavLink[] = [
    {
        to:"/home",
        label:"home",
    },
    {
        to:"/home/#about",
        label:"about",
    },
    {
        to:"/home/#event",
        label:"event",
    },
    {
        to:"/home/#nature",
        label:"nature",
    },
    {
        to:"/home/#todo",
        label:"todo",
        subLink:[
            {
                to:"/home/#topAttractions",
                label:"topAttractions"
            },
            {
                to:"/home/#activities",
                label:"activities"
            }
        ]
    },
    {
        to:"/home/#getInTouch",
        label:"getInTouch",
        subLink:[
            {
                to:"/home/#contact",
                label: "contact",
            },
            {
                to: "/home/#feedback",
                label: "feedback"
            }
        ]
    },
    {
        to:"/gallery/",
        label:"wonder",
    },
]