import * as React from 'react';
import { CharacterDto } from '../models/CharacterDto';
import { fetchCharactes } from '../Repositories/CharacterRepo';
import { Character } from './Character';

export interface Props {
    gameId: number;
}

interface State {
    characters: CharacterDto[]
    playerName: string
}

export class CharacterList extends React.Component<Props, State>{
    public componentDidMount() {
        fetchCharactes(1)
            .then(t => this.setState(
                (prevState, props) => ({ ...prevState, characters: t })))
    }

    public render() {
        const playerName = this.state.playerName;
        const characters = this.state.characters
            .map(t => (
                <Character key={t.id} character={t} playerName={playerName} />));
        return (
            <div>
                {characters}
            </div>);
    }
}