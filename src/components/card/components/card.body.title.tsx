import { CardBodyTitleProps } from '../types/card.type'

export const CardBodyTitle = (props:CardBodyTitleProps) => {
    const { children, style } = props
    return (
    <h2 className={`card-title ${style}`}>
        {children}
    </h2>
  )
}
