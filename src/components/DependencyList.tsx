import { CSSProperties, ReactElement } from "react"
import { GraphNode } from "../calc/Graph"
import DependencyCard from "./DependencyCard"

export interface DependencyListProps
{
    dependencies?: GraphNode[]
}

const DependencyList = (props: DependencyListProps) : ReactElement =>
{

    return <ul className="DependencyList">
        {
            (props.dependencies)
            ?
                props.dependencies?.map((value: GraphNode) => {
                    return <DependencyCard key={value.id} value={value.value}></DependencyCard>
                })
            :
                ""
        }
    </ul>
}
export default DependencyList

