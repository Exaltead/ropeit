import * as React from 'react';
import { Character as CharacterModel } from 'src/store/characters/types'



interface Props {
    character: CharacterModel
}

const CharacterDetailsRead = (props: Props) => {
    console.log(props)
    return (
        <p>Details of character {props.character.id}</p>
    )
}

export default CharacterDetailsRead