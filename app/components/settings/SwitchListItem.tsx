import * as React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "material-ui/List";
import Switch from "material-ui/Switch";
import { SwapHoriz, School } from "material-ui-icons";

interface IProps {
  name: string;
  iconName: string;
  onChange: any;
  checked: boolean;
}

const style: any = {
  width: "100%",
};

const padding: any = {
  padding: "16px",
  paddingTop: "0px",
};

const SwitchListItem = (props: IProps) => {
// tslint:disable:object-literal-shorthand
  const icons = {
    SwapHoriz: SwapHoriz,
    School: School,
  };
  const IconName = icons[props.iconName];
  return (
    <div>
      <ListItem>
        <ListItemIcon>
          <IconName />
        </ListItemIcon>
        <ListItemText primary={props.name} />
        <ListItemSecondaryAction>
          <Switch
            onChange={(event) => props.onChange(event, !props.checked)}
            checked={props.checked}
          />
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
};

export default SwitchListItem;
