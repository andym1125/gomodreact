import { Component, Dispatch, ReactElement, ReactNode, useState } from "react";
import { textSpanContainsPosition } from "typescript";


export interface FileSelectorProps
{
    onChange?: (files: FileList|null)=>any
}

const FileSelector = (props: FileSelectorProps|undefined) : ReactElement =>
{
    let [files, setFiles] = useState<FileList|null>();
    
    const fsOnChange = (files: FileList|null) =>
    {
        setFiles(files)
        if(props?.onChange)
            props.onChange(files)
    }

    return <input type="file" onChange={(e)=>fsOnChange(e.currentTarget.files)}></input>
}
export default FileSelector