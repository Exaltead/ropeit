import * as React from 'react';
import { Character as CharacterModel } from 'src/store/characters/types'
import styled from 'styled-components';


const CardDiv = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    min-height: 10rem;
    min-width: 20rem;
    padding: 1rem;
    margin: 1rem;

    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

export interface Props {
    character: CharacterModel;
    playerName: string;
    onClick: () => void;
}

export function CharacterSummary(props: Props) {
    const character = props.character;
    return (
        <CardDiv onClick={props.onClick}>
            <h1>{character.name}</h1>
            <p>Player: {props.playerName}</p>

            <p>Mechanics: {character.mechanics}</p>
            <p>Fluff: {character.fluff}</p>
            <p>notes: {character.notes}</p>
        </CardDiv>
    )
}
