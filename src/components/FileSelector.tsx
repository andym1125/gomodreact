import { Component, Dispatch, ReactElement, ReactNode, useContext, useState } from "react";
import { textSpanContainsPosition } from "typescript";
import { AppContext, IAppContext } from "./AppContext";


export interface FileSelectorProps
{
    onChange?: (files: FileList|null)=>any
}

const FileSelector = (props: FileSelectorProps) : ReactElement =>
{
    const ctx = useContext<IAppContext>(AppContext)
    
    const fsOnChange = (files: FileList|null) =>
    {
        if(ctx.setFiles)
            ctx.setFiles(files)
    }

    return <input type="file" onChange={(e)=>fsOnChange(e.currentTarget.files)}></input>
}
export default FileSelector