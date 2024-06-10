import { AddLocationOutlined, HandshakeOutlined } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Grid,
  Link,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import Swal from "sweetalert2";

export const VetView = ({photoUrl, name, description}) => {

  const onHireVet = () => {

    Swal.fire({
      title: `¿Deseas contratar a ${name}?`,
      text:  "¡Puedes cancelar la acción!",    
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, contratar!",
      position: "bottom-end",
      width: "400",
      timer: 10000,
      timerProgressBar: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title:  "¡Contratado!",
          text: "El Veterinario estará llegando a su hogar en aprox. 10 min",
          icon: "success",
          position: "bottom-end",
          width: "400",
        });
      }
   });
  };

  return (
    <Grid
      container
      sx={{
        border: 3,
        borderColor: "primary.main",
        borderRadius: 2,
        height: { sm: 240, xs: 220 },
        mt: 2,
        p: 1,
        width: "98%",
      }}
      display="flex"
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid item xs={4}>
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src={photoUrl}
            sx={{ width: 100, height: 100 }}
          />
        </ListItemAvatar>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </Grid>

      <Grid item xs={6} textAlign="left">
        <Button color="secondary" sx={{ padding: 2 }}>
          <AddLocationOutlined sx={{ fontSize: 30, mr: 1 }} />
          <Link
            href="https://maps.app.goo.gl/ZB5S4pppoxfeWCU3A"
            underline="none"
          >
            Localizar
          </Link>
        </Button>
      </Grid>

      <Grid item xs={6} textAlign="right">
        <Button color="secondary" sx={{ padding: 2 }} onClick={onHireVet}>
          <HandshakeOutlined sx={{ fontSize: 30, mr: 1 }} />
          Contratar
        </Button>
      </Grid>
    </Grid>
  );
};
