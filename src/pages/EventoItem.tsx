import { Box } from "@chakra-ui/react";
import { DetalhesEvento } from "../components/eventos/DetalhesEvento";
import { NavBarSkeleton } from "../components/general/NavBarSkeleton";
import { useNavigate, useParams } from "react-router-dom";
import { events } from "../util/mocks";
import { useEffect } from "react";

const EventoItem = () => {
    const navigate = useNavigate();
    let { id } = useParams();
    let evento = events.filter(e => e.nome === id)[0] || 
    {
      id: 0,
      nome: "",
      foto: "",
      data: "",
      local: "",
      inscricao: "",
      conteudo: ""
    };

    useEffect(() => {
      if(evento.nome == ""){
        navigate('/eventos')
      }
    }, []);

    

  return (
    <>
        <NavBarSkeleton/>
        <DetalhesEvento nome={evento.nome||""} foto={evento.foto} conteudo={evento.conteudo} data={evento.data} local={evento.local} inscricao={evento.inscricao}/>
    </>
  );
};

export default EventoItem;