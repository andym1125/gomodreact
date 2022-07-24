import { useState, createContext } from "react";

export interface IAppContext
{
    files?: FileList|null
    setFiles?: React.Dispatch<React.SetStateAction<FileList|null|undefined>>//Why undefined?
}

export let AppContext = createContext<IAppContext>({})
