import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { startLogout } from "../../store/auth/thunk";
import { showSideBar } from "../../store/home/homeSlice";

export const NavBar = ({ drawerWidth = 240 }) => {
  
  const dispatch = useDispatch(); 
  const { page } = useSelector((state) => state.home);

  const onShowSidebar = () => {
    dispatch( showSideBar(true) )
  }

  const onLogout = () => {
    Swal.fire({
      title: '¿Deseas finalizar sesión?',
      text:"¡Puedes cancelar la acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, cerrar sesión!",
      position: "bottom-end",
      width: "400",
      timer: 10000,
      timerProgressBar: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch( startLogout() );       
      }
   });   
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
          onClick={ onShowSidebar }
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" noWrap component="div">
            {
              page === 'vet' ? 'Veterinarios' 
              : page === 'pet' ? 'Mi mascota'
              : page === 'pro' && 'Productos'
            }
          </Typography>
          <IconButton color="black" onClick={onLogout}>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
