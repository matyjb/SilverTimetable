import * as React from "react";
import * as config from "react-global-configuration";

import { HashRouter as Router, NavLink, Link, Route, Switch, Redirect } from "react-router-dom";

// material UI
import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "material-ui/List";
import Button from "material-ui/Button";

// settings Components
import IconHelper from "../settingsComponents/IconHelper";

interface IProps {
  name: string;
  iconName: string;
  linkPage: string;
}

const style: any = {
  width: "100%",
};

const padding: any = {
  padding: "16px",
  paddingTop: "0px",
};

const linkStyle: any = {
  color: "#4F4F4F",
  textDecoration: "none",
};

export default class SwitchListItem extends React.Component<IProps, {}> {

  public render(): JSX.Element {
    return (
      <div>
        <NavLink to={this.props.linkPage}
        style={linkStyle}>
          <ListItem button>
            <ListItemIcon>
              <IconHelper iconName={this.props.iconName} />
            </ListItemIcon>
            <ListItemText primary={this.props.name} />
          </ListItem>
        </NavLink>
      </div>
    );
  }
}
