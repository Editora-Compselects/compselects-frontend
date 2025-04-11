import { Box } from "@chakra-ui/react";
import { DetalhesEvento } from "../components/eventos/DetalhesEvento";
import { NavBarSkeleton } from "../components/general/NavBarSkeleton";
import { useNavigate, useParams } from "react-router-dom";
import { artigosMock, events } from "../util/mocks";
import { useEffect } from "react";
import { Post } from "../components/blog/Post";

const BlogPost = () => {
    const navigate = useNavigate();
    let { id } = useParams();
    let evento = artigosMock.filter(e => e.titulo === id)[0] || 
    {
      id: 0,
      titulo: "",
      conteudo: "",
      autor: "Pessoa 1",
      autorImg: "",
      tipo: "",
      imagem: "",
      data: "31/02/2025",
      comentarios: []
    };

    useEffect(() => {
      if(evento.titulo == ""){
        navigate('/blog')
      }
    }, []);

    

  return (
    <>
        <NavBarSkeleton/>
        <Post titulo={evento.titulo || ""} tipo={evento.tipo || ""} conteudo={evento.conteudo || ""} autor={evento.autor || ""} autorImg={evento.autorImg || ""} imagem={evento.imagem || ""} data={evento.data || ""} comentarios={evento.comentarios || []}/>
    </>
  );
};

export default BlogPost;