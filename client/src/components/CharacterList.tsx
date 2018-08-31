import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchRequest } from 'src/store/characters/actions'
import { Character as CharacterModel } from 'src/store/characters/types';
import { ApplicationState } from 'src/store/index'
import { Character as CharacterView } from './Character';

interface PropsFromState {
    loading: boolean
    characters: CharacterModel[]
    playerName: string
    gameId: number
}

interface PropsFromDispatch {
    fetch: typeof fetchRequest
}

type Props = PropsFromState & PropsFromDispatch


class CharacterList extends React.Component<Props>{

    public componentDidMount() {
        this.props.fetch();
    }

    public render() {
        const charModels = this.props.characters
        const playerName = this.props.playerName;
        const characters = charModels.map((t) => (<CharacterView key={t.id} character={t} playerName={playerName} />));
        return (
            <div>
                {characters}
            </div>);
    }
}

const mapStateToProps = ({ characters }: ApplicationState) => ({
    characters: Array.from(characters.charactersById.values()),
    gameId: 1,
    loading: characters.loading,
    playerName: "Hehe"
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetch: () => dispatch(fetchRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)
