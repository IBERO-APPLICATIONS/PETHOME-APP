import { Grid, Typography } from "@mui/material";
import { HomeLayout } from "../layout/HomeLayout";
import { VetView } from "../views/VetView";
import { PetView } from "../views/PetView";
import { ProductsView } from "../views/ProductsView";
import { useSelector } from "react-redux";

export const HomePage = () => {

  const { page } = useSelector((state) => state.home);

  const photoVet1 = "https://img.freepik.com/foto-gratis/cerca-veterinario-cuidando-perro_23-2149100197.jpg";
  const photoVet2 = "https://nupec.com/wp-content/uploads/2022/09/vet-appointment-2021-09-24-03-25-35-utc-min.jpg";
  const photoVet3 = "https://nupec.com/wp-content/uploads/2022/09/vet-and-his-patient-2021-09-24-03-30-50-utc-min.jpg";
  const photoVet4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4QGAItlhTHXyrx20wjm8j5okIm6ey8bgvg&s";

  return (
    <HomeLayout>

      {page === "vet" ? 
      (
        <Grid
          container
          display="flex"
          justifyContent="space-between"
          width="100%"
        >
          <Grid item xs={12} sm={12} md={6}>
            <VetView photoUrl={ photoVet1 } name="Ana María Frnaco Tellez" description="Clínica la Trinidad...." />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <VetView photoUrl={ photoVet2 } name="Franco Escamilla Duarte" description="Clínica cuatro patas..." />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <VetView photoUrl={ photoVet3 } name="Juan Felipe Gomez Moreno" description="Veterinaría al instante..." />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <VetView photoUrl={ photoVet4 } name="Lorena Perez Hernandez" description="Pets shop and Vets..." />
          </Grid>
        </Grid>
      ) : page === "pet" ? (
        <PetView />
      ) : (
        page === "pro" && <ProductsView />
      )}
      
    </HomeLayout>
  );
};
