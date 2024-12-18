
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Menu as MenuIcon } from '@mui/icons-material';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import React, { useState } from "react";

const drawerWidth = 240;

const SideBar = () => {
  const rows = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ]

  const [window, setWindow] = useState(true);
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: (theme) => theme.palette.background.default,
        },
      }}
    >
      <Box sx={{ p: 2, width: '100%' ,display: 'flex', alignItems: 'center'}}>
        <IconButton edge="start" sx={{ mr: 20 }}>
          <MenuIcon onClick={() => {setWindow(!window)}}/>
        </IconButton>
        <IconButton edge="start" sx={{ mr: 2 }}>
          <CreateRoundedIcon />
        </IconButton>
      </Box>
      <Box sx={{ overflow: "auto"}}>
        <List >
          {rows.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};

export default SideBar;
