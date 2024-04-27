import { ChangeEvent } from 'react';

type TextAreaProps = {
    cols?:number,
    rows?:number,
    style?:string,
    placeholder?:string
    label?: string 
    onChanged:(()=>void)|((e:ChangeEvent<HTMLTextAreaElement>)=>void) | ((param:any)=>void)
    size?:"small"|"medium"|"large" 
    value?: string
    name?: string
}
export const TextArea = (props:TextAreaProps)=>{
    const {cols, rows=1, placeholder, style, onChanged, size="medium", label, value='', name=''} = props
    let labelSize: string
    switch (size!) {
        case "small":
            labelSize = "text-sm"
            break;
        case "medium":
            labelSize = "text-base"
            break;
        case "large":
            labelSize = "text-lg"
            break;
        default:
            labelSize = "text-base"
            break;
    }
    
    return(
        <div className="w-full h-full flex flex-col gap-2">

            {
                label && (
                    <label className={`label ${labelSize}`}>
                        {label}
                    </label>
                )
            }
            <textarea name={name} id="" cols={cols} rows={rows} onChange={onChanged} className={`in-input in-input-${size} border-[1.5px] border-stroke focus:ring-transparent w-full rounded-lg h-full px-5 py-3 outline-none focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${style}`} placeholder={placeholder} value={value} defaultValue={value}>

            </textarea>
        </div>
    )
}