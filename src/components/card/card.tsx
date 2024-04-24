import { CardProps } from "./types/card.type"

export const Card = (props:CardProps) => {
    const { style, children, overlay=false, shadow="none" } = props
    const shadowSize = ()=>{
        switch (shadow) {
            case "sm":
                return "shadow-sm"        
        
            case "md":
                return "shadow-md"        
        
            case "lg":
                return "shadow-lg"        
        
            case "xl":
                return "shadow-xl"        
        
            case "none":
                return "shadow-none"        
        
            default:
                return "shadow-none"
        }
    }
    return (
        <div className={`card ${style} ${shadowSize()} ${overlay? "image-full":""}`}>
            {children}
        </div>
  )
}
