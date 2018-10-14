import * as React from 'react';
import { Character as CharacterModel } from 'src/store/characters/types'
import styled from 'styled-components';


const BackDiv = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    margin: 1rem;
    padding: 1rem;
    height: 90%
`


interface Props {
    character: CharacterModel
}

const CharacterDetailsRead = (props: Props) => {
    const character = props.character
    return (
        <BackDiv>
            <h1>{character.name}</h1>
            <h2>Mechanics</h2>
            <p>{character.mechanics}</p>
            <h2>Notes</h2>
            <p>{character.notes}</p>
            <h2>Fluff</h2>
            <p>{character.fluff}</p>

        </BackDiv>
    )
}

export default CharacterDetailsRead