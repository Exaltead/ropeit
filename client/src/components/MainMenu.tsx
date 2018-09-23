import * as React from 'react';
import { Link } from 'react-router-dom';
// import './MainMenu.css'
import styled from 'styled-components';

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    align-content: flex-start;
`

const StyledLi = styled.li`
    margin: 20px;
    margin-left: 0rem;
    list-style-type: none;
    color: antiquewhite
`

const MainMenu = () => {
    return (
        <StyledUl>
            <StyledLi><Link to='/players'> Players </Link> </StyledLi>
            <StyledLi><Link to='/characters'> Characters </Link></StyledLi>
            <StyledLi><Link to='/notes'> Notes </Link></StyledLi>
        </StyledUl>
    );
}

export default MainMenu;