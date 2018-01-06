import * as React from "react";
import config from "react-global-configuration";
import * as Moment from "moment";
import ITimetableEvent from "../models/ITimetableEvent";

import Button from "material-ui/Button";
import Divider from "material-ui/Divider";
import Drawer from "material-ui/Drawer";
import Typography from "material-ui/Typography";
import List from "material-ui/List";
import { withStyles } from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import LinkListItem from "./appNavigationComponents/LinkListItem";
import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import { blue, purple } from "material-ui/colors";

import IconHelper from "./settingsComponents/IconHelper";

// Router
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";

const styles = {
  list: {
    width: 250,
  },
};

interface IProps {
  name: string;
  lecturers: string[];
  type: string;
  room: string;
  building: string;
  endTime: Moment.Moment;
  remarks?: string;
  startTime: Moment.Moment;
  isFaculty: boolean;
  onClick(event: ITimetableEvent): void;
}

interface IState {
  bottom: boolean;
}

export default class EventBlockMore extends React.Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      bottom: false,
    };
  }

  public render() {
    const { startTime, endTime } = this.props;
    const sideList = (
      <div>
        <List>
          <div style={{marginBottom: 16, marginLeft: 16, marginRight: 16, marginTop: 6 }}>
            <Typography type="headline">{this.props.name}</Typography>
            <Typography type="subheading" gutterBottom style={{color: "#787878"}}>
            {this.uppercaseFirstLetter(this.props.type) + " "}
            {startTime.format("HH:mm ")} - {endTime.format("HH:mm")}</Typography>
            {this.renderLecturers()}
            {this.renderRemarks()}
          </div>
          <Divider />
          <div style={{color: "black", marginTop: 6}}>
            <LinkListItem
              name="Strona wykładowcy"
              iconName="Website"
              linkPage={null}
              onClick={this.props.onClick}
              color="black"
            />
            {this.renderRoom()}
          </div>
        </List>
      </div>
    );

    const footerStyle: any = {
      position: "absolute",
      bottom: 0,
      width: "100%",
    };
    return (
      <div>
        <IconButton onClick={this.toggleDrawer(true)} style={{color: "#787878", width: 34, height: 24, marginTop: 6}}>
          <IconHelper iconName="More"/>
        </IconButton>
        <Drawer anchor="bottom" open={this.state.bottom} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }

  private toggleDrawer = (open) => () => {
    this.setState({
      bottom: open,
    });
  }

  private renderRoom() {
    let location = "/floor";
    let text = "Budynek " + this.props.building + ", ";

    if (this.props.room.substring(0, 2) === "Au" || this.props.room.substring(0, 2) === "au") {
      text += this.lowercaseFirstLetter(this.props.room);
    } else {
      text += "sala " + this.props.room;
    }
    if (this.props.building !== "34") {
      location = "/";
    }

    return (
      <LinkListItem
        name={text}
        iconName="Map"
        linkPage={location}
        onClick={null}
        color="black"
      />
    );
  }

  private lowercaseFirstLetter(text) {
    return text.charAt(0).toLowerCase() + text.slice(1);
  }

  private uppercaseFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  private renderRemarks() {
    if (this.props.remarks != null) {
      return (
        <div style={{marginTop: 12}}>
          <Typography gutterBottom>{this.props.remarks}</Typography>
        </div>
      );
    } else {
      return (<div/>);
    }
  }

  private renderLecturers() {
    const rows = [];
    for (const item of this.props.lecturers) {
      rows.push(this.renderOneLecturer(item));
    }
    return (
      <div style={{marginTop: 10}}>
      {rows}
      </div>
    );
  }

  private renderOneLecturer(name) {
    const style = {
      marginBottom: 6,
      marginRight: 6,
    };
    return (
      <Chip
        avatar={<Avatar>{name.match(/\b(\w)/g).join("")}</Avatar>}
        label={name}
        style={style}
      />
    );
  }

}
