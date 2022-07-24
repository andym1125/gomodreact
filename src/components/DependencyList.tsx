import React, {Component, ReactElement, ReactNode, useState } from "react";
import graphFromText from "../calc/graph-funcs";
import FileSelector from "./FileSelector";
import Graph, { GraphNode } from "../calc/Graph"

const DependencyList = (proprs: {}) : ReactElement =>
{
    const [fileText, setFileText] = useState<string>();
    const [graph, setGraph] = useState<Graph>(new Graph());
    const [displayNodes, setDisplayNodes] = useState<GraphNode>()

    let it = [
        "one",
        "two",
        "three"
    ]

    const onFileInput = (files: FileList|null) =>
    {
        if(!files)
            return;

        console.log(this)
        setGraph(new Graph([{to:"--", from:"---"}]))
        
        files.item(0)?.stream.toString()
        files.item(0)?.text()
        .then((text: string) =>
        {
            setFileText(text)
            console.log(graphFromText(text))
            setGraph(() => graphFromText(text))
            
            setInterval(()=>{console.log(graph)}, 1000)

            return text
        })
    }

    return <div>
        <FileSelector onChange={onFileInput.bind(this)}></FileSelector>
        {it.map((val, idx) => {
            return <div key={idx}>{val}</div>
        })}
    </div>
}
export default DependencyList