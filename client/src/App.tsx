import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CharacterList from "./components/CharacterList";

import SideNav from "./containers/SideNav";
import CharacterDetails from "./containers/CharacterDetails"
import styled from "styled-components";


const NavSlot = styled.div`
    position: absolute;
    height: 100%;
    width: 150px;
`

const ContentSlot = styled.div`
    position: absolute;
    top: 0px;
    margin-left: 160px
`

const App = () => {
    return (
        <div>
            <NavSlot>
                <SideNav />
            </NavSlot>
            <ContentSlot>
                <Switch>
                    <Redirect exact={true} from="/" to="/characters" />
                    <Route exact={true} path="/characters" component={CharacterList} />
                    <Route path="/characters/:characterId" component={CharacterDetails} />
                    <Route path="/players" component={() => <div>Not done</div>} />
                    <Route path="/notes" component={() => <div>Not done</div>} />
                    <Route component={() => (<div>404 Not found</div>)} />
                </Switch>
            </ContentSlot >
        </div>)
}

export default App;