import { CardBodyProps } from "../types/card.type"

export const CardBody = (props:CardBodyProps) => {
    const { children } = props
    return (
        <div className='px-5 py-4 flex flex-col gap-2'>
            {children}
        </div>
    )
}
