import { Game } from "../store/games/types";
import * as React from "react";
import Select from "react-select";

export interface Props {
    games: Game[]
    selected?: number
    onSelected: (selected: number) => void
}

const GamePicker = (props: Props) => {
    const options = props.games.map(t => ({ value: t.id, label: t.name }))
    const selectedValue = props.selected !== undefined ?
        options.find(t => t.value === props.selected) : null
    const handleChange = (
        { value, label }: { value: number, label: string }) => { props.onSelected(value) }
    return (<Select options={options} value={selectedValue} onChange={handleChange} />)
}

export default GamePicker;