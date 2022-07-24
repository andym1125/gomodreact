import React, {Component, ReactElement, ReactNode, useEffect, useState } from "react";
import graphFromText from "../calc/graph-funcs";
import FileSelector from "./FileSelector";
import Graph, { GraphNode } from "../calc/Graph"
import { AppContext } from "./AppContext";

const DependencyList = (proprs: {}) : ReactElement =>
{
    const [files, setFiles] = useState<FileList|null>()
    const [graph, setGraph] = useState<Graph>()
    const [filetxt, setFiletxt] = useState<string>()

    //files change
    useEffect(() => {
        if(!files)
            return
        
        files.item(0)?.text()
            .then((text: string)=>{setFiletxt(text)})
    }, [files])

    //filetxt change
    useEffect(() => {
        if(!filetxt)
            return
        
        setGraph(graphFromText(filetxt))
    }, [filetxt])

    //graph change
    useEffect(() => {
        if(!graph)
            return
        
        //console.log(graph)
    }, [graph])

    let ctx = {
        "files":files,
        "setFiles":setFiles,
        "graph": graph,
        "setGraph": setGraph,
    }

    return <AppContext.Provider value={ctx}>
        <FileSelector></FileSelector>
    </AppContext.Provider>
}
export default DependencyList