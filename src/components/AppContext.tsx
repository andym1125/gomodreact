import { useState, createContext } from "react";
import Graph from "../calc/Graph";

export interface IAppContext
{
    files?: FileList|null
    setFiles?: React.Dispatch<React.SetStateAction<FileList|null|undefined>>//Why undefined?

    graph?: Graph
    setGraph?: React.Dispatch<React.SetStateAction<Graph|undefined>>
}

export let AppContext = createContext<IAppContext>({})
