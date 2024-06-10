import { Box, Toolbar } from "@mui/material";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { showSideBar } from "../../store/home/homeSlice";

const drawerWidth = 280; 

export const HomeLayout = ({ children }) => {  

  const dispatch = useDispatch();

  const onShowSidebar = () => {
    dispatch( showSideBar(false) )
  }

  return (
    <Box sx={{ display: "Flex" }} >

      <NavBar drawerWidth={ drawerWidth } />

      <SideBar drawerWidth={ drawerWidth }/>        

      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <Toolbar />
        { children }
      </Box>
    </Box>
  );
};
