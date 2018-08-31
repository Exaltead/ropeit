import * as React from "react";
import { Route, Switch } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import MainMenu from "./components/MainMenu";

const App = () => {
    return (
        <div>
            <MainMenu onClick={(selection) => console.log(selection)} />
            <Switch>
                <Route path="/" component={CharacterList} />
                <Route component={() => (<div>404 Not found</div>)} />
            </Switch>
        </div>)
}

export default App;