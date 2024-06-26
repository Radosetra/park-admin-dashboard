import { useEffect } from "react"
import { CardHeaderProps } from "../types/card.type"

export const CardHeader = (props:CardHeaderProps) => {
    const { imageUrl, style } = props
    useEffect(() => {
        console.log("Image url : " + imageUrl);
        
    }, [])
    return (
        <div className={`flex ${style}`}>
          {
            imageUrl?
            <img src={imageUrl} className="object-cover w-full h-full shrink-0" alt="card image" />:
              <div className={"w-full h-full bg-graydark/30"}>

              </div>
          }
        </div>
  )
}
