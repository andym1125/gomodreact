import { useState, createContext } from "react";
import Graph, { GraphNode } from "../calc/Graph";
import { ISelectedNode } from "../calc/types";

export interface IAppContext
{
    files?: FileList|null
    setFiles?: React.Dispatch<React.SetStateAction<FileList|null|undefined>>//Why undefined?

    graph?: Graph
    setGraph?: React.Dispatch<React.SetStateAction<Graph|undefined>>

    selectedNode?: ISelectedNode
    setSelectedNode?: React.Dispatch<React.SetStateAction<ISelectedNode|undefined>>
}

export let AppContext = createContext<IAppContext>({})
