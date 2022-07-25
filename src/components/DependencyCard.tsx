import React, { MouseEventHandler, ReactElement, MouseEvent, useState, useContext } from "react"
import { GraphNode } from "../calc/Graph"
import { AppContext, IAppContext } from "./AppContext"

export interface DependencyCardProps
{
    node: GraphNode
}

const DependencyCard = (props: DependencyCardProps) : ReactElement =>
{
    const ctx = useContext<IAppContext>(AppContext)

    let onCardClick: MouseEventHandler<HTMLDivElement> = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) =>
    {
        if(ctx.setSelectedNode)
            ctx.setSelectedNode(props.node)
    }

    return (
        <div 
            className={"DependencyCard" + (ctx.selectedNode === props.node ? " selected" : "")} 
            onClick={onCardClick}>
            {props.node.value}
        </div>
    )
}
export default DependencyCard