import { HealthAndSafetyOutlined, PetsOutlined, StoreOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changePage, showSideBar } from "../../store/home/homeSlice";
import { useEffect, useMemo } from "react";

export const SideBar = ({ drawerWidth = 280 }) => {

  const dispatch = useDispatch();
  const { photoUrl, displayName } = useSelector( state => state.auth );
  const { sideBar } = useSelector((state) => state.home); 
  
  const showSidebar = useMemo(() => sideBar, [sideBar]);

  const onChangePage = (pageActivated) => {
    dispatch( showSideBar(false) );
    dispatch( changePage({pageActivated}) );
  }

  return (
    <Box
      component="nav"
      sx={{ display: { xs: !showSidebar && "none", sm: "block"}, width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{         
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Toolbar>
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src={ photoUrl }
              sx={{ width: 40, height: 40 }}
            />
          </ListItemAvatar>
          <Typography variant="h6" noWrap component="div">
            { displayName }
          </Typography>
        </Toolbar>
        <Divider />

        <List>  
            <ListItem disablePadding >
              <ListItemButton onClick={ () => onChangePage("vet") }>
                <ListItemIcon>
                  <HealthAndSafetyOutlined />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary="Veterinarios" />                  
                </Grid>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={ () => onChangePage("pet") }>
                <ListItemIcon>
                  <PetsOutlined />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary="Mi mascota" />                  
                </Grid>
              </ListItemButton>
            </ListItem>  
            <ListItem disablePadding>
              <ListItemButton onClick={ () => onChangePage("pro") }>
                <ListItemIcon>
                  <StoreOutlined />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary="Productos" />                  
                </Grid>
              </ListItemButton>
            </ListItem>           
        </List>
      </Drawer>
    </Box>
  );
};
