import * as React from "react";
import * as config from "react-global-configuration";
import FileManager from "../FileManager";

// material UI
import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "material-ui/List";
import Switch from "material-ui/Switch";

// material UI Select
import { FormControl, FormHelperText } from "material-ui/Form";
import Input, { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import Select from "material-ui/Select";

// Icons
import IconHelper from "./IconHelper";
import IConfiguration from "../../models/IConfiguration";
import TimetableServices from "../TimetableServices";

interface IProps {
  name: string;
  iconName: string;
  configName: string;
}

interface IState {
  time: number;
  checked: string[];
}

let notifyOn: boolean = false;

const style: any = {
  width: "100%",
};

const padding: any = {
  padding: "16px",
  paddingTop: "0px",
};

export default class SwitchListItem extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);

    this.state = {
      time: 5,
      checked: ["none"],
    };

    if (this.props.configName === "notificationBeforeClass") {
      const configTime = config.get("notificationBeforeClass");
      if (config.get("notificationBeforeClass") > 0) {
        this.state = {
          checked: [this.props.iconName],
          time: configTime,
        };
        notifyOn = true;
      }
    } else if (config.get(this.props.configName) === true) {
      this.state = {
        checked: [this.props.iconName],
        time: 5,
      };
    }
  }

  public render(): JSX.Element {
    return (
      <div>
        <ListItem>
          <ListItemIcon>
            <IconHelper iconName={this.props.iconName} />
          </ListItemIcon>
          <ListItemText primary={this.props.name} />
          <ListItemSecondaryAction>
            <Switch
              onChange={this.handleToggle(this.props.iconName)}
              checked={this.state.checked.indexOf(this.props.iconName) !== -1}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </div>
    );
  }

  // toggle controller
  private handleToggle = (value) => () => {
    const { checked } = this.state;
    const currentIndex: number = checked.indexOf(value);
    const newChecked: string[] = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    // global settings controller
    const temp: IConfiguration = config.get("Timetable");
    switch (this.props.iconName) {
      case "Notifications":
        temp.notifyAboutUpdates = currentIndex === -1;
        break;

      case "Top":
        temp.allowQuickGroupChange = currentIndex === -1;

      default:
        break;
    }
    config.set(temp);
    TimetableServices.writeConfigurationFile(temp);

    this.setState({
      checked: newChecked,
    });
  }
}
