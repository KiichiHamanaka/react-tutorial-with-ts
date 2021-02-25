export interface SquareProps {
    value: string;
    onClick: () => void;
}

export interface BoardProps {
    squares: Array<string>,
    finished: boolean,
    onClick: (i: number) => void
}
