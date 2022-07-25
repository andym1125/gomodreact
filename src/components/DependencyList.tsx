import { CSSProperties, ReactElement } from "react"
import { GraphNode } from "../calc/Graph"

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
                    return <li key={value.id}>{value.value}</li>
                })
            :
                ""
        }
    </ul>
}
export default DependencyList

