import React from "react";
import { Link, withRouter } from "react-router-dom";
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
    border-bottom:3px solid ${props => props.current ? "#3498db" : "transparent"};
    text-align:center;
    transition:.3s border-bottom ease-in-out;
`;

const SLink = styled(Link)`
    display:flex;
    height:50px;
    align-items:center;
    justify-content:center;
`;

export default withRouter(({ location: {pathname} }) => (
    <Header>
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item current={pathname === "/tv"}>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item current={pathname === "/search"}>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </Header>
));