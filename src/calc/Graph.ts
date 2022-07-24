import { Int, roundInt } from "./types"

export default class Graph
{
    nodeList: GraphNode[] = []
    rootNodes: GraphNode[] = []
    valueIdMap: Map<string, number> = new Map<string, number>()
    currNodeId: number = 0

    constructor(edges?: Edge[])
    {
        if(edges === undefined)
            return

        for (const e of edges)
            this.addEdge(e.from, e.to)
            
        this.determineRootNodes()
    }

    determineRootNodes() : void
    {
        for(const n of this.nodeList)
        {
            if(n.parents.size === 0)
                this.rootNodes.push(n)
        }
    }

    addEdge(from: string, to: string) : void
    {
        let nfrom = this.mustGetNode(from)
        let nto = this.mustGetNode(to)

        nfrom.addChild(nto)
        nto.addParent(nfrom)
    }

    mustGetNode(val: string) : GraphNode
    {
        let nodeid: number|undefined = this.valueIdMap.get(val)
        if(nodeid != undefined)
            return this.nodeList[nodeid]
        
        return this.newNode(val)
    }

    newNode(val: string) : GraphNode
    {
        let n = new GraphNode(this, this.currNodeId, val)
        this.nodeList[this.currNodeId] = n
        this.valueIdMap.set(val, this.currNodeId)

        this.currNodeId++
        return n;
    }
}

export class GraphNode
{
    graph: Graph
    id: number
    value: string
    parents: Set<GraphNode> = new Set<GraphNode>()
    children: Set<GraphNode> = new Set<GraphNode>()

    constructor(graph: Graph, id: number, val: string)
    {
        this.graph = graph
        this.id = id
        this.value = val
    }

    addChild(n: GraphNode) : void
    {
        this.children.add(n)
    }

    addParent(n: GraphNode) : void
    {
        this.parents.add(n)
    }
}

export interface Edge
{
    from: string;
    to: string;
}