import { CSSProperties, ReactElement } from "react"
import { GraphNode } from "../calc/Graph"
import DependencyCard from "./DependencyCard"

export interface DependencyListProps
{
    dependencies?: GraphNode[]
    id: string
}

const DependencyList = (props: DependencyListProps) : ReactElement =>
{

    return <ul className="DependencyList">
        {
            (props.dependencies)
            ?
                props.dependencies?.map((value: GraphNode) => {
                    return <DependencyCard key={value.id} node={value} listId={props.id}></DependencyCard>
                })
            :
                ""
        }
    </ul>
}
export default DependencyList

