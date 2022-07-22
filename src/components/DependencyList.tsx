import React, {Component, ReactElement, ReactNode, useState } from "react";
import FileSelector from "./FileSelector";

const DependencyList = (proprs: {}) : ReactElement =>
{
    const [fileText, setFileText] = useState<string>();

    let it = [
        "one",
        "two",
        "three"
    ]

    const onFileInput = (files: FileList|null) =>
    {
        if(!files)
            return;
        
        files.item(0)?.text()
        .then((text: string) =>
        {
            setFileText(text)
            console.log(text)
            return text
        })
        .then((text: string) =>
        {

        })
    }

    return <div>
        <FileSelector onChange={onFileInput}></FileSelector>
        {it.map((val, idx) => {
            return <div key={idx}>{val}</div>
        })}
    </div>
}
export default DependencyList