import * as React from 'react';
import { Game as GameModel, GameActionTypes } from 'src/store/games/types'
import { fetchGames } from 'src/store/games/actions'
import { Dispatch } from 'redux';
import { EmptyAction } from 'typesafe-actions/dist/types';
import { ApplicationState } from '../store';
import MainMenu from '../components/MainMenu';
import { connect } from 'react-redux';

interface PropsFromState {
    loading: boolean
    games: GameModel[]
}

interface PropsFromDispatch {
    fetch: () => EmptyAction<GameActionTypes.FETCH_REQUEST>
}

type Props = PropsFromState & PropsFromDispatch

class SideNav extends React.Component<Props>{
    public componentDidMount?() {
        this.props.fetch()
    }
    public render() {
        return (
            <div>
                <MainMenu />
            </div>)
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetch: () => dispatch(fetchGames.request())
})

const mapStateToProps = ({ games }: ApplicationState) => ({
    loading: games.loading,
    games: Array.from(games.gamesById.values())
})

export default connect(mapStateToProps, mapDispatchToProps)(SideNav)