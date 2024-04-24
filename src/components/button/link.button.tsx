import { Link } from 'react-router-dom'
import { LinkButtonProps } from './types/button'

export const LinkButton = (props:LinkButtonProps) => {
    const { to, leftIcon, label, variant, size, style } = props
    let btnSize = "w-full"
    switch (size) {
      case "small":
        btnSize = "in-btn-small"
        break;
      case "medium":
        btnSize = "in-btn-medium"
        break;
      case "large":
        btnSize = "in-btn-large"
        break;
    
      default:
        btnSize = "w-full"
        break;
    }
    const btnVariant = variant == "primary"? "in-btn-primary" : "in-btn-secondary"
    return (
        <Link to={to as string}>
            <button className={`in-btn ${btnSize} ${style} ${btnVariant}`}>
                {
                    leftIcon &&
                    <span>{leftIcon}</span>
                }
                <span>{label}</span>
            </button>
        </Link>
    )
}
