import { GraphNode } from "./Graph"

export type Int = number & {__int__: void}

export function roundInt(n: number) : Int
{
    return Math.round(n) as Int
}

export function isInt(n: number) : n is Int
{
    return n % 1 === 0
}

export interface ISelectedNode
{
    n: GraphNode //The selected GraphNode
    list: string //The ID of the list it was selected from
}