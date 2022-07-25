import { ReactElement } from "react"

export interface DependencyCardProps
{
    value: string
}

const DependencyCard = (props: DependencyCardProps) : ReactElement =>
{
    return <div className="DependencyCard">
        {props.value}
    </div>
}
export default DependencyCard