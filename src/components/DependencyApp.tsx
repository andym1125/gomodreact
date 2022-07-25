import React, {Component, CSSProperties, ReactElement, ReactNode, useEffect, useState } from "react";
import graphFromText from "../calc/graph-funcs";
import FileSelector from "./FileSelector";
import Graph, { GraphNode } from "../calc/Graph"
import { AppContext } from "./AppContext";
import DependencyList from "./DependencyList";

const DependencyApp = (proprs: {}) : ReactElement =>
{
    //Context state
    const [files, setFiles] = useState<FileList|null>()
    const [graph, setGraph] = useState<Graph>()

    //Component state
    const [filetxt, setFiletxt] = useState<string>()
    const [centerDepends, setCenterDepends] = useState<GraphNode[]>()

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
        
        setCenterDepends(graph.rootNodes)
        //console.log(graph)
    }, [graph])

    let ctx = {
        "files":files,
        "setFiles":setFiles,
        "graph": graph,
        "setGraph": setGraph,
    }

    let styles: CSSProperties = {
        display: "flex",
        flexDirection: "column",
    }

    return <AppContext.Provider value={ctx}>
        <div style={styles}>
            <FileSelector></FileSelector>
            <div className="directory-container" >
                <DependencyList></DependencyList>
                <DependencyList dependencies={centerDepends}></DependencyList>
                <DependencyList></DependencyList>
            </div>
        </div>
    </AppContext.Provider>
}
export default DependencyApp