import { Box } from "@chakra-ui/react";
import { DetalhesEvento } from "../components/eventos/DetalhesEvento";

const EventoItem = () => {

    const evento = JSON.parse(sessionStorage.getItem('eventoAtual')||"");

  return (
    <Box>
        <DetalhesEvento nome={evento.nome} foto={evento.foto} conteudo={evento.conteudo} data={evento.data} local={evento.local} inscricao={evento.inscricao}/>
    </Box>
  );
};

export default EventoItem;