import { useRef, useState } from "react";
import { FilePreview } from '../view/media.preview';
import { Button, IconButton } from "../../../button";
import FileSlider from "../view/media.slider";

type FileInputProps = {
    previewed?: "before" | "after"
    // previewed?:boolean
    multiple?: boolean
    size?: "small" | "medium" | "large"
    label?: string
    style?: string
    icon?: React.ReactNode
    variant?: "primary" | "secondary"|"icon"
    children?:React.ReactNode
}
export const FileInput = (props: FileInputProps) => {
    const { previewed, style, multiple=false, children, size = "medium", label, icon, variant = "secondary"} = props
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[]>([]);
    
    const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if (e.target.files){
            setFiles([...files,...Array.from(e.target.files)])
        }
    }
    const removeFile = (index:number)=>{
        setFiles(files.filter((_,i)=> i !== index))
    }
    const handleClick = () => {
        fileInputRef.current?.click()
    }
    const gridClass = () => {
        switch (files!.length) {
            case 1:
                return 'grid-cols-1';
            case 2:
                return 'grid-cols-2';
            default:
                return 'grid-cols-3';
        }
    }
    return (
        <div className={`flex ${previewed === "after"?"flex-col":"flex-col-reverse"}`}>
            <input
                type="file"
                name=""
                id=""
                multiple={multiple}
                style={{display:'none'}}
                onChange={handleFileChange}
                ref={fileInputRef}
            />
            <div className="flex flex-row w-full">

                {  
                    label?
                    <Button size={size} label={label} style={`w-full ${style}`} type="button" variant={variant} onClick={handleClick} leftIcon={icon} />:
                    <IconButton icon={icon} onClick={handleClick} variant={variant} size={size} style={style}/>
                }
                {children}
            </div>
            {
                (previewed && files) && <div className={`${previewed==="after"?"mt-4":"mb-4"}`}>
                    {/* {
                        files!.map((file, index) => (
                            <FilePreview file={file} index={index} removeFile={() => removeFile(index)} key={index} />
                        ))
                    } */}
                    <FileSlider files={files} removeFile={removeFile}/>
                </div>

            }
        </div>
    )
}