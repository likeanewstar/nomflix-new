import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    display:flex;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:50px;
    background:rgba(20,20,20,.8);
    color:#fff;
    align-items:center;
    box-shadow:0 1px 5px 2px rgba(0,0,0,0.8);
`;

const List = styled.ul`
    display:flex;
`;

const Item = styled.li`
    width:80px;
    height:50px;
    text-align:center;
`;

const SLink = styled(Link)`
    display:flex;
    height:50px;
    align-items:center;
    justify-content:center;
`;

export default () => (
    <Header>
        <List>
            <Item>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </Header>
);