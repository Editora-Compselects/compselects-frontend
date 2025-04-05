import { Box } from "@chakra-ui/react";
import { EventosLista } from "../components/eventos/EventosLista";
import { NavBarSkeleton } from "../components/general/NavBarSkeleton";

const Eventos = () => {
  return (
    <>
        <NavBarSkeleton/>
        <EventosLista/>
    </>
  );
};

export default Eventos;