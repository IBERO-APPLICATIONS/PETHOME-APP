import { StoreOutlined } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const ProductsView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        borderRadius: 3,
      }}
    >
      <Grid item xs={12}>
        <StoreOutlined sx={{ fontSize: 100, color: "white" }} />
      </Grid>

      <Grid item xs={12} textAlign='center'>
         <Typography color="white" variant="h4" >503</Typography>
         <Typography color="white" variant="h6" >Servicio no disponible</Typography>
      </Grid>
    </Grid>
  );
};
