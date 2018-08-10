import * as React from 'react';
import { CharacterDto } from '../models/CharacterDto';

export interface Props {
    character: CharacterDto;
    playerName: string;
}

export function Character(props: Props) {
    const character = props.character;
    return (
        <div>
            <text>Player: {props.playerName}</text>
            <text>Character: {character.name}</text>
            <text>Mechanics: {character.mechanics}</text>
            <text>Fluff: {character.fluff}</text>
            <text>notes: {character.notes}</text>
        </div>
    )
}
