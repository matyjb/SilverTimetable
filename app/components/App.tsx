import * as React from "react";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import FilteringPage from "./Pages/FilteringPage";
import FloorPage from "./Pages/FloorPage";
import MainPage from "./Pages/MainPage";
import SettingsPage from "./Pages/SettingsPage";

export default class App extends React.Component {
    public render(): JSX.Element {
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
                        <Route path="/floor" render={() => <FloorPage pinpointCoordinates={{ x: 50, y: 20}}/>} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
