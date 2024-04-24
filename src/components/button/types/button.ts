export type LinkButtonProps = {
    variant:"primary"|"secondary"
    leftIcon?:React.ReactNode
    label:string
    size?:"small"|"medium"|"large"
    style?:string
    to:String
}
export type IconButtonProps = {
    variant:"primary"|"secondary"|"icon"
    icon:React.ReactNode
    onClick:() => void
    size?:"small"|"medium"|"large"
    style?:string
    disabled?:boolean
}
export type ButtonProps = {
    type: "button"| "reset"| "submit"
    onClick: ()=>void
    label: string
    disabled?: boolean
    variant: "primary"|"secondary"|"icon"
    style?: string
    size?: "small"|"medium"|"large"
    leftIcon?: React.ReactNode
}