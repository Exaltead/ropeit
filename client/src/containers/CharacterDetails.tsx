import { RouteComponentProps, withRouter } from "react-router";
import { ApplicationState } from "src/store";
import { connect } from "react-redux";
import * as React from "react";
import { Character as CharacterModel } from 'src/store/characters/types'
import CharacterDetailsRead from "../components/CharacterDetailsRead";
import { Dispatch } from "redux";
import { fetchRequest } from "../store/characters/actions";

interface PropsFromDispatch {
    fetchCharacter: () => void
}

interface PropsFromState {
    character?: CharacterModel
}

type Props = PropsFromDispatch & PropsFromState

interface State {
    isReadMode: boolean
}

class CharacterDetails extends React.Component<Props, State>{
    public constructor(props: Props) {
        super(props)
        this.state = { isReadMode: true }
    }

    public componentDidMount?() {
        this.props.fetchCharacter()
    }

    public render() {
        if (this.props.character === undefined) {
            return (<p> Character not found</p>)
        }
        if (this.state.isReadMode) {
            return (<CharacterDetailsRead character={this.props.character} />)
        }
        return (<p>Not implemented</p>)
    }
}


interface PathParams {
    characterId: string
}
type ComponentProps = RouteComponentProps<PathParams>


const mapStateToProps = ({ characters }: ApplicationState, compProps: ComponentProps) => {
    const characterId = parseInt(compProps.match.params.characterId, 10)
    return {
        character: characters.charactersById.get(characterId)
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchCharacter: () => dispatch(fetchRequest())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharacterDetails))