import { Box } from "@chakra-ui/react";
import { DetalhesEvento } from "../components/eventos/DetalhesEvento";
import { NavBarSkeleton } from "../components/general/NavBarSkeleton";

const EventoItem = () => {

    const evento = JSON.parse(sessionStorage.getItem('eventoAtual')||"");

  return (
    <>
        <NavBarSkeleton/>
        <DetalhesEvento nome={evento.nome} foto={evento.foto} conteudo={evento.conteudo} data={evento.data} local={evento.local} inscricao={evento.inscricao}/>
    </>
  );
};

export default EventoItem;