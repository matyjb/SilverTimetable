import * as React from "react";
import config from "react-global-configuration";
import Divider from "material-ui/Divider";
import Drawer from "material-ui/Drawer";
import Typography from "material-ui/Typography";
import List from "material-ui/List";
import IconButton from "material-ui/IconButton";
import LinkListItem from "./LinkListItem";
// Icons
import Hamburger from "material-ui-icons/Menu";
import EventBlocksMoreHolder from "../EventBlocksMoreHolder";
import { Swipeable } from "react-touch";

const styles = {
  list: {
    width: 250,
  },
};

interface IState {
  left: boolean;
}

declare let navigator: any;

export default class LeftDrawer extends React.Component<{}, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      left: false,
    };

    const onBB = () => {
      if (this.state.left) {
        this.toggleDrawer(false);
      } else if (window.location.hash === "#/"
        && EventBlocksMoreHolder.eventBlocksMore.some((ebm) => ebm.state.bottom)) {
        EventBlocksMoreHolder.eventBlocksMore.forEach((ebm) => ebm.toggleDrawer(null, false));
      } else if (window.location.hash === "#/") {
        navigator.app.exitApp();
      } else {
        window.location.replace("index.html#/");
      }

    };
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      document.addEventListener("backbutton", onBB, true);
    }
  }

  public render() {
    const sideList = (
      <div style={{ width: 250 }}>
        <List style={{ paddingTop: 0 }}>
          <div style={{ height: 160, backgroundColor: "#3f51b5", top: 0, display: "flex", marginBottom: 16 }}>
            <div style={{ display: "inline-block", alignSelf: "flex-end", marginLeft: 16, marginBottom: 6 }}>
              <Typography type="headline" gutterBottom style={{ color: "white", marginBottom: 0 }}>
                {config.get("filters").degree &&
                  config.get("filters").fieldOfStudy + " (" + config.get("filters").degree + ")"
                }
              </Typography>
              <Typography gutterBottom style={{ color: "white" }}>
                {config.get("filters").mode &&
                  <React.Fragment>
                    {config.get("filters").mode}, semestr {config.get("filters").semester}
                  </React.Fragment>
                  // react fragment - w razie problemow zaktualizuj vscode
                }
              </Typography>
            </div>
          </div>
          <LinkListItem name="Plan" iconName="Event" linkPage="/" onClick={null} />
          <LinkListItem name="Ustawienia" iconName="Settings" linkPage="/settings" onClick={null} />
          <LinkListItem name="Schemat piętra" iconName="Map" linkPage="/floor" onClick={null} />
          <LinkListItem name="O aplikacji" iconName="Info" linkPage="/about" onClick={null} />
        </List>
      </div>
    );

    const footerStyle: any = {
      position: "absolute",
      bottom: 0,
      width: "100%",
    };
    return (
        <Swipeable onSwipeLeft={() => {this.toggleDrawer(false); }}>
          <div>
            <IconButton
              color="contrast"
              onClick={() => this.toggleDrawer(true)} style={{ marginLeft: -12, marginRight: 20 }}
            >
              <Hamburger />
            </IconButton>
              <Drawer open={this.state.left} onClose={() => this.toggleDrawer(false)} >
                <div
                  tabIndex={0}
                  role="button"
                  onClick={() => this.toggleDrawer(false)}
                  onKeyDown={() => this.toggleDrawer(false)}
                >
                  {sideList}
                  {config.get("timetable") &&
                    <div style={footerStyle}>
                      <Divider />
                      <Typography type="body1" style={{
                        marginLeft: 16, marginTop: 16, marginBottom: 16,
                        color: "rgba(0, 0, 0, 0.56)",
                      }}>
                        Ostatnia aktualizacja: <br /> {config.get("timetable").date.replace("T", " ").slice(0, -3)}
                      </Typography>
                    </div>
                  }
                </div>
              </Drawer>
          </div>
        </Swipeable>
    );
  }

  public toggleDrawer(open) {
    this.setState({
      left: open,
    });
  }
}
