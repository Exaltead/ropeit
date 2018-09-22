import * as React from 'react';
import { Game as GameModel, GameActionTypes } from 'src/store/games/types'
import { fetchGames, selectGame } from 'src/store/games/actions'
import { Dispatch } from 'redux';
import { EmptyAction } from 'typesafe-actions/dist/types';
import { ApplicationState } from '../store';
import MainMenu from '../components/MainMenu';
import { connect } from 'react-redux';
import GamePicker from 'src/components/GamePicker';
import './SideNav.css'

interface PropsFromState {
    loading: boolean
    games: GameModel[]
    selectedGame?: number
}

interface PropsFromDispatch {
    fetch: () => EmptyAction<GameActionTypes.FETCH_REQUEST>
    select: (selected: number) => void
}

type Props = PropsFromState & PropsFromDispatch

class SideNav extends React.Component<Props>{
    public componentDidMount?() {
        this.props.fetch()
    }
    public render() {
        return (
            <div className="container">
                <div className="picker">
                    <GamePicker selected={this.props.selectedGame} games={this.props.games}
                    onSelected={this.props.select} />
                </div>
                <div className="links">
                    <MainMenu />
                </div>
            </div>)
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetch: () => dispatch(fetchGames.request()),
    select: (selected: number) => dispatch(selectGame(selected))
})

const mapStateToProps = ({ games }: ApplicationState) => ({
    loading: games.loading,
    games: Array.from(games.gamesById.values()),
    selectedGame: games.selectedGame
})

export default connect(mapStateToProps, mapDispatchToProps)(SideNav)