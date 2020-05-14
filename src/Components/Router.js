import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom"; // 이 부분에서 HashRouter 참조하면 HashRouter로 사용 가능
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" component={TV} />
            <Route path="/search" component={Search} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
);