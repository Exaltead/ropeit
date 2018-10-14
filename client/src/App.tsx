import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CharacterList from "./components/CharacterList";

import SideNav from "./containers/SideNav";
import CharacterDetails from "./containers/CharacterDetails"
import styled from "styled-components";

const FlexContainer = styled.div`
    display:flex;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
`

const NavSlot = styled.div`
    position: absolute;
    height: 100%;
    width: 150px;
`

const ContentSlot = styled.div`
    height:100%;
    margin-left: 160px;
    flex-grow: 1;
    allgn-self: flex-end
`

const App = () => {
    return (
        <FlexContainer>
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
        </FlexContainer>)
}

export default App;