import * as React from 'react';
import { Character as CharacterModel } from 'src/store/characters/types'
import { ApplicationState } from '../store';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';


interface Props {
    character?: CharacterModel
}

const CharacterDetailsRead = (props: Props) => {
    console.log(props)
    return (
        <p>Details of character {props.character!.id}</p>
    )
}

interface PathParams {
    characterId: string
}
type ComponentProps = RouteComponentProps<PathParams>


const mapStateToProps = ({ characters }: ApplicationState, compProps: ComponentProps) => {
    const characterId = parseInt(compProps.match.params.characterId, 10)
    console.log(characters)
    return {
        character: characters.charactersById.get(characterId)
    }

}

export default withRouter(connect(mapStateToProps)(CharacterDetailsRead))