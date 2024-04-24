import { IconButtonProps } from './types/button'

export const IconButton = (props:IconButtonProps) => {
    const { icon, onClick, variant, size, style, disabled=false} = props
    let btnSize = "w-full"
    switch (size) {
        case "small":
        btnSize = "in-icon-btn-small"
        break;
        case "medium":
        btnSize = "in-icon-btn-medium"
        break;
        case "large":
        btnSize = "in-icon-btn-large"
        break;
    
        default:
        btnSize = "in-icon-btn-medium"
        break;
    }
    let btnVariant;
    switch (variant) {
        case "primary":
            btnVariant="in-btn-primary"
            break;
        case "secondary":
            btnVariant="in-btn-secondary"
            break;
        case "icon":
            btnVariant="in-btn-icon"
            break;
        default:
            break;
    }
    return (
        <button 
            className={`${btnVariant} ${btnSize} ${style} ${disabled && `cursor-not-allowed ${variant==="primary"?"bg-primary-300 hover:bg-primary-300":(variant==="secondary"?"hover:bg-transparent hover:text-primary-300 border-primary-300 text-primary-300":"text-primary-300 hover:bg-transparent")}`} in-icon-btn`} 
            onClick={onClick} 
            disabled={disabled}
            type="button"
        >
            {icon}
        </button>
    )
}
