import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import './App.css'
import CharacterList from "./components/CharacterList";
import MainMenu from "./components/MainMenu";

const App = () => {
    return (
        <div>
            <div className='side-nav'>
                <MainMenu />
            </div>
            <div className='content'>
                <Switch>
                    <Redirect exact={true} from="/" to="/characters" />
                    <Route path="/characters" component={CharacterList} />
                    <Route path="/players" component={() => <div>Not done</div>} />
                    <Route path="/notes" component={() => <div>Not done</div>} />
                    <Route component={() => (<div>404 Not found</div>)} />
                </Switch>
            </div >
        </div>)
}

export default App;