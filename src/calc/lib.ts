
export function setToArray<T>(set: Set<T>): T[]
{
    let ret: T[] = []
    set.forEach((value: T) => {
        ret.push(value)
    })
    return ret
}