import * as React from "react";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import SettingsPage from "./SettingsPage";
import FloorPage from "./FloorPage";
import FilteringPage from "./FilteringPage";

export default class App extends React.Component {
    render(): JSX.Element {
        return (
            <Router>
                <div className="App">
                    <nav>
                        <ul>
                            <li><Link to="/" replace>[Strona główna]</Link></li>
                            <li><Link to="/settings" replace>[Ustawienia]</Link></li>
                            <li><Link to="/filtering" replace>[Filtrowanie]</Link></li>
                            <li><Link to="/floor" replace>[Schemat piętra]</Link></li>
                        </ul>
                    </nav>
                    <hr/>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route path="/settings" component={SettingsPage} />
                        <Route path="/filtering" component={FilteringPage} />
                        <Route path="/floor" component={FloorPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}