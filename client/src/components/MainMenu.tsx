import * as React from 'react';
import './MainMenu.css'
enum Selection {
    Players = "Players",
    Characters = "Characters",
    Notes = "Notes"
}

export interface Props {
    onClick: (selection: Selection) => void;
}

const MainMenu = (props: Props) => {
    return (
        <ul>
            <li onClick={() => props.onClick(Selection.Players)} >{Selection.Players}</li>
            <li onClick={() => props.onClick(Selection.Characters)} >{Selection.Characters}</li>
            <li onClick={() => props.onClick(Selection.Notes)} >{Selection.Notes}</li>
        </ul>
    );
}

export default MainMenu;