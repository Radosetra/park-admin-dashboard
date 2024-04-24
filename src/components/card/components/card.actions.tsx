import { CardActionsProps } from "../types/card.type"

export const CardActions = (props:CardActionsProps) => {
  const { children, position="end" } = props
  const posClass = ()=>{
    switch (position) {
      case "center":
        return "justify-center"

      case "start":
        return "justify-start"
      
      case "end":
        return "justify-end"

      default:
        return "justify-end"
    }
  }
  return (
    <div className={`flex justify-end gap-3 ${posClass()}`}>
        {children}
    </div>
  )
}
