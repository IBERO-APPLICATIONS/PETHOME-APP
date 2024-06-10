import { SaveAsOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

export const ButtonSavePet = () => {

const onSaveProfile = () => {
    Swal.fire({
        title: `¿Deseas guardar los datos?`,
        text:  "¡Puedes cancelar la acción!",    
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, guardar!",
        position: "bottom-end",
        width: "400",
        timer: 10000,
        timerProgressBar: true,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title:  "!Guardado!",
            text: "Los cambios se efectuaron correctamente",
            icon: "success",
            position: "bottom-end",
            width: "400",
          });
        }
     });
    }

  return (
    <Button
      size="large"
      sx={{
        color: "white",
        backgroundColor: "pink.main",
        ":hover": { backgroundColor: "pink.main", opacity: 0.9 },
        top: 10,
        bottom: 50,
      }}
      onClick={ onSaveProfile }
    >
      <SaveAsOutlined sx={{ fontSize: 30 }} />
    </Button>
  );
};
