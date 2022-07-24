export type Int = number & {__int__: void}

export function roundInt(n: number) : Int
{
    return Math.round(n) as Int
}

export function isInt(n: number) : n is Int
{
    return n % 1 === 0
}