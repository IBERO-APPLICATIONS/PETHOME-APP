import {
  Avatar,
  Divider,
  Grid,
  ListItemAvatar,
  TextField,
  Typography,
} from "@mui/material";
import { ButtonSavePet } from "../components/ButtonSavePet";

export const PetView = () => {
  return (
    <form>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        sx={{ width: "100%" }}
      >
        <Grid item xs={12} mb={3} textAlign="right">
          <Typography variant="h6" color="primary.main" mb={1}>
            Características de mi mascota
          </Typography>
          <Divider />
        </Grid>

        <Grid item xs={3}>
          <TextField
            label="Peso"
            type="text"
            placeholder="Peso"
            name="peso"
            defaultValue="45kg"
            variant="filled"
            fullWidth
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            label="Raza"
            type="text"
            placeholder="Raza"
            name="raza"
            defaultValue="Bulldog"
            variant="filled"
            fullWidth
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            label="Especie"
            type="text"
            placeholder="Especie"
            name="especie"
            defaultValue="Perro"
            variant="filled"
            fullWidth
          />
        </Grid>

        <Grid item xs={6} mt={3}>
          <TextField
            label="Color"
            type="text"
            placeholder="Color"
            name="color"
            defaultValue="Negro con blanco"
            variant="filled"
            fullWidth
          />
        </Grid>

        <Grid item xs={5} mt={3}>
          <TextField
            label="Genero"
            type="text"
            placeholder="Genero"
            name="genero"
            defaultValue="Hembra"
            variant="filled"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} mb={3} textAlign="right">
          <Typography variant="h6" color="pink.main" mb={1} mt={3}>
            Perfil de mi mascota
          </Typography>
          <Divider />
        </Grid>

        <Grid item xs={5} sm={6} lg={8} mt={4}>
          <TextField
            label="Nombre"
            type="text"
            placeholder="Nombre"
            name="nombre"
            defaultValue="Brunilda"
            color="pink"
            variant="filled"
            fullWidth
          />

         <TextField
            label="Fecha de Nacimiento"
            type="text"
            placeholder="Color"
            name="color"
            defaultValue="24-12-2023"
            color="pink"
            variant="filled"
            sx={{ mt: 3}}
            fullWidth
          />   
        </Grid>

        <Grid item xs={6} sm={5} lg={3} display="flex" justifyContent="center">
          <Grid>
            <ListItemAvatar mt={4}>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                sx={{ width: 200, height: 200 }}
              />
            </ListItemAvatar>
          </Grid>
        </Grid>
      </Grid>

      <ButtonSavePet />
    </form>
  );
};
