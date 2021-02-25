export interface SquareProps {
    value: string|'◯'|'✕'|null
    onClick: () => void
}

export interface BoardProps {
    squares: Array<string>,
    xIsNext: boolean
    onClick: (i: number) => void
}

export interface GameProps {
    history: Array<{squares: Array<string>}>,
    stepNumber:number
    xIsNext: boolean
}
