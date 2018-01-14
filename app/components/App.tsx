import * as Colors from "material-ui/colors";
import createMuiTheme from "material-ui/styles/createMuiTheme";
import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import FloorPage from "./Pages/FloorPage";
import MainPage from "./Pages/MainPage";
import SettingsPage from "./Pages/SettingsPage";
import AboutPage from "./Pages/AboutPage";

// AppBar/Navigation
import NavigationToolbar from "./navigation/NavigationToolbar";

// Config
import config from "react-global-configuration";
import configuration from "../DefaultConfiguration";

const theme: any = createMuiTheme({
    palette: {
        secondary: Colors.yellow,
    },
});

export default class App extends React.Component {
    private mainPage: MainPage;
    constructor(props: any) {
        super(props);
        // mobile touch delay fix
        // initReactFastclick();
        // config
        config.set(configuration, { freeze: false });
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            navigator.splashscreen.hide();
            StatusBar.styleLightContent();
            StatusBar.overlaysWebView(false); // config one doesn't work (on iOS)
            if (device.platform === "Android") {
                StatusBar.backgroundColorByHexString("#303F9F");
            } else if (device.platform === "iOS") {
                StatusBar.backgroundColorByHexString("#3f51b5");
            }
        }
    }

    public render(): JSX.Element {
        return (
            <Router>
                <div className="app-container" style={{ WebkitOverflowScrolling: "touch" }}>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props) => <MainPage ref={(mainPage) => this.mainPage = mainPage} />}
                        />
                        <Route path="/settings" component={SettingsPage} />
                        <Route path="/floor" component={FloorPage} />
                        <Route path="/about" component={AboutPage} />
                    </Switch>
                    <NavigationToolbar onRefreshClick={() => this.mainPage.refresh()} />
                </div>
            </Router>
        );
    }
}
