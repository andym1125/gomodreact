import React, {Component, ReactElement, ReactNode, useEffect, useState } from "react";
import graphFromText from "../calc/graph-funcs";
import FileSelector from "./FileSelector";
import Graph, { GraphNode } from "../calc/Graph"
import { AppContext } from "./AppContext";

const DependencyList = (proprs: {}) : ReactElement =>
{
    const [files, setFiles] = useState<FileList|null>()
    const [filetxt, setFiletxt] = useState<string>()

    //Convert files to filetxt
    useEffect(() => {
        if(!files)
            return
        
        files.item(0)?.text()
            .then((text: string)=>{setFiletxt(text)})
    }, [files])

    //Convert filetxt to graph
    useEffect(() => {
        if(!filetxt)
            return
        
        console.log(filetxt)
    }, [filetxt])

    let ctx = {
        "files":files,
        "setFiles":setFiles
    }

    return <AppContext.Provider value={ctx}>
        <FileSelector></FileSelector>
    </AppContext.Provider>
}
export default DependencyList