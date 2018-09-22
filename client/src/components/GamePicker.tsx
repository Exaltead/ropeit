import { Game } from "../store/games/types";
import * as React from "react";
import Select from "react-select";

export interface Props {
    games: Game[]
    selected?: number
}

const GamePicker = (props: Props) => {
    const options = props.games.map(t => ({ value: t.id, label: t.name }))
    const selectedValue = props.selected !== undefined ? options[props.selected] : null
    return (<Select options={options} value={selectedValue} />)
}

export default GamePicker;