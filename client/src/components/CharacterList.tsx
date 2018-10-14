import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchRequest } from 'src/store/characters/actions'
import { Character as CharacterModel } from 'src/store/characters/types';
import { ApplicationState } from 'src/store/index'
import { CharacterSummary as CharacterView } from './CharacterSummary';
import { withRouter, RouteComponentProps } from 'react-router';
import styled from 'styled-components';


const CharactersContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
`

interface PropsFromState {
    loading: boolean
    characters: CharacterModel[]
    playerName: string
    gameId?: number
}

interface PropsFromDispatch {
    fetch: typeof fetchRequest
}

type PropsFromRoute = RouteComponentProps<{}>

type Props = PropsFromState & PropsFromDispatch & PropsFromRoute


class CharacterList extends React.Component<Props>{

    public componentDidMount() {
        this.props.fetch();
    }

    public render() {
        const openDetails = (id: number) => this.props.history.push("/characters/" + id)

        const charModels = this.props.characters
        const playerName = this.props.playerName;
        const characters = charModels
            .map((t) => (
                <CharacterView
                    key={t.id}
                    character={t}
                    playerName={playerName}
                    onClick={() => openDetails(t.id)} />));
        return (
            <CharactersContainer>
                {characters}
            </CharactersContainer>);
    }
}

const mapStateToProps = ({ characters, games: { selectedGame } }: ApplicationState) => ({
    characters: Array.from(characters.charactersById.values()),
    gameId: selectedGame,
    loading: characters.loading,
    playerName: "Hehe"
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetch: () => dispatch(fetchRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CharacterList))
