import React, {Component, CSSProperties, ReactElement, ReactNode, useEffect, useState } from "react";
import graphFromText from "../calc/graph-funcs";
import FileSelector from "./FileSelector";
import Graph, { GraphNode } from "../calc/Graph"
import { AppContext } from "./AppContext";
import DependencyList from "./DependencyList";
import { setToArray } from "../calc/lib";
import { ISelectedNode } from "../calc/types";

const DependencyApp = (proprs: {}) : ReactElement =>
{
    //Context state
    const [files, setFiles] = useState<FileList|null>()
    const [graph, setGraph] = useState<Graph>()
    const [selectedNode, setSelectedNode] = useState<ISelectedNode>()

    //Component state
    const [filetxt, setFiletxt] = useState<string>()
    const [history, setHistory] = useState<GraphNode[][]>([])
    const [centerDepends, setCenterDepends] = useState<GraphNode[]>()
    const [parentDepends, setParentDepends] = useState<GraphNode[]>()
    const [childDepends, setChildDepends] = useState<GraphNode[]>()

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
    useEffect(() =>
    {
        if(!graph)
            return
        
        setHistory([
            graph.rootNodes,
            setToArray(graph.rootNodes[0].children),
            [],
        ])
        setCenterDepends(setToArray<GraphNode>(graph.rootNodes[0].children))
    }, [graph])

    //selectedNode change
    useEffect(() =>
    {
        if(!selectedNode)
            return

        if(selectedNode.list == "parent")
        {
            //setCenterDepends(parentDepends)
            // if(history && history.length >= 2)
            // {
                history.pop()
                setHistory(history)
            // }
                
        }
        else if(selectedNode.list == "child")
        {
            history?.push(setToArray(selectedNode.n.children))
            setHistory(history)
        }
        else if(selectedNode.list === "center")
        {
            history.pop()
            history.push(setToArray(selectedNode.n.children))
            setHistory(history)
        }

        // if(selectedNode.list === "parent")

        //     setCenterDepends(parentDepends)
        // else if (selectedNode.list === "child")
        //     setCenterDepends(childDepends)

        setChildDepends(setToArray(selectedNode.n.children))
        setParentDepends(setToArray(selectedNode.n.parents))
    }, [selectedNode])

    useEffect(() =>
    {
        console.log(history)
    }, [history])

    let ctx = {
        "files":files,
        "setFiles":setFiles,
        "graph": graph,
        "setGraph": setGraph,
        "selectedNode": selectedNode,
        "setSelectedNode": setSelectedNode,
    }

    let styles: CSSProperties = {
        display: "flex",
        flexDirection: "column",
    }

    return <AppContext.Provider value={ctx}>
        <div style={styles}>
            <FileSelector></FileSelector>
            <div className="directory-container" >
                <DependencyList id="parent" dependencies={history[history.length-3]}></DependencyList>
                <DependencyList id="center" dependencies={history[history.length-2]}></DependencyList>
                <DependencyList id="child" dependencies={history[history.length-1]}></DependencyList>
            </div>
        </div>
    </AppContext.Provider>
}
export default DependencyApp