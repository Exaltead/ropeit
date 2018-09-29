import * as React from 'react';
import { Character as CharacterModel } from 'src/store/characters/types'

export interface Props {
    character: CharacterModel;
    playerName: string;
    onClick: () => void;
}

export function CharacterSummary(props: Props) {
    const character = props.character;
    return (
        <div onClick={props.onClick}>
            <text>Player: {props.playerName}</text>
            <text>Character: {character.name}</text>
            <text>Mechanics: {character.mechanics}</text>
            <text>Fluff: {character.fluff}</text>
            <text>notes: {character.notes}</text>
        </div>
    )
}
