import { Box,Flex, Grid, Separator, Text,Image } from "@chakra-ui/react";
import { facaParteImg, mockimageurl } from "../../util/imageUrls";

export const GuiaSubmissao = () => {

    const texto = `
    A Editora CompSelect está sempre aberta a novas ideias e contribuições que fortaleçam a produção científica em Ciência da Computação. Se você desenvolveu uma pesquisa relevante, escreveu um artigo técnico ou elaborou um livro acadêmico, este é o espaço para dar visibilidade ao seu trabalho. Nosso processo editorial preza pela qualidade, seriedade e apoio contínuo ao autor, desde a submissão até a publicação final. Ao publicar conosco, você se junta a uma rede de autores, professores e pesquisadores que contribuem ativamente para o avanço do conhecimento na área. Envie sua proposta e venha fazer parte da CompSelect.
    `
    return (
      <Box>
            <Box bgColor={"white"} color={"#262A38"}>
                <Grid className="grid-cols-2" alignItems={"center"}>
                    <Box p={8} textAlign={"center"}>
                        <Text fontWeight={"bold"} fontSize={"3xl"}>Faça parte da Compselects</Text>
                        <Text textAlign={"justify"} mt={8} fontSize={"lg"}>{texto}</Text>
                    </Box>
                    <Flex>
                        <Separator orientation={"vertical"}></Separator>
                        <Image fit={"cover"} w={"full"} h={"full"} minH={"90vh"} src={facaParteImg}></Image>
                    </Flex>
                </Grid>
            </Box>
      </Box>
    );
  };