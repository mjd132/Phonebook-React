import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { drawerList } from "../consts/drawerList";
import { useNavigate } from "react-router";

const DrawerLeft = () => {
  let navigate = useNavigate();
  var date = new Date();
  return (
    <Drawer container variant="permanent">
      <ListItem>
        <ListItemText>
          <Typography variant="h6" fontWeight={"bold"}>
            Welcome Majid
          </Typography>
          <Typography variant="caption">
            Today:{" "}
            {date.toLocaleDateString(undefined, {
              weekday: "short",
              month: "long",
              day: "numeric",
            })}
          </Typography>
        </ListItemText>
      </ListItem>
      <Divider />
      <List>
        {drawerList.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(`${text.route}`)}>
              <ListItemText primary={text.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default DrawerLeft;
