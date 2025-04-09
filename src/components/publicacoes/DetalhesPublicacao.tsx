import { Box,Breadcrumb } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { todasPublicacoes } from "../../util/mocks";
import { useEffect } from "react";
import { ApresentacaoPublicacao } from "./ApresentacaoPublicacao";
import { Avaliacoes } from "./Avaliacoes";

export const DetalhesPublicacao = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const publi = todasPublicacoes.filter(e => e.title === id)[0] || 
    {
          title: '',
          type: '',
          author: '',
          summary: '',
          coverImage: "",
          vendas: 0,
          formato: "",
          tema: "",
          ano: 0,
          precoEbook: 0,
          precoFisico: 0,
          avaliacoesQtd: 0,
          avaliacaoMedia: 0,
          avaliacoes: [
            {
              avaliacao: 0,
              foto: "",
              nome: "",
              email: "",
              comentario: "",
            },
          ]
        };

    useEffect(() => {
      if(publi.title == ""){
        navigate('/publicacoes')
      }
    }, [navigate, publi.title]);

    return(
        <>
            <Box m={8}>
                <Box mb={8}>
                  <Breadcrumb.Root size={"lg"}>
                      <Breadcrumb.List>
                          <Breadcrumb.Item>
                          <Breadcrumb.Link href="/home">Compselects</Breadcrumb.Link>
                          </Breadcrumb.Item>
                          <Breadcrumb.Separator />
                          <Breadcrumb.Item>
                          <Breadcrumb.Link href="/publicacoes">Publicações</Breadcrumb.Link>
                          </Breadcrumb.Item>
                          <Breadcrumb.Separator />
                          <Breadcrumb.Item>
                          <Breadcrumb.Link href={`#`}>{publi.title}</Breadcrumb.Link>
                          </Breadcrumb.Item>
                      </Breadcrumb.List>
                  </Breadcrumb.Root>
                </Box>

                <ApresentacaoPublicacao item={publi}/>
                <Avaliacoes item={publi}/>
            </Box>
        </>
    )
}