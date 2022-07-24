import { stringify } from "querystring";
import Graph, { Edge } from "./Graph";

export default function graphFromText(text: string) : Graph
{
    let edges: Edge[] = 
    text.split("\n")
    .filter((value) => (!!value)) //filters out space at end of file
    .map((val):Edge => {
        let edge = val.split(" ")
        return {
            from: edge[0],
            to: edge[1]
        }
    })

    return new Graph(edges)
}