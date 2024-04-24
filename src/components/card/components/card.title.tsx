import { CardTitleProps } from "../types/card.type"

export const CardTitle = (props:CardTitleProps) => {
    const { title, badge, rightIcon } = props
    return (
        <div className={`flex flex-row ${(rightIcon)?"justify-between":"justify-center"} items-center pt-5 px-5`}>
            <div className="flex flex-row space-x-3 items-center">
                <h1 className="text-2xl font-semibold text-customGray-400/90">{title}</h1>
                {badge}
            </div>
            {rightIcon}
        </div>
  )
}
