import { Box, Separator,Flex,Grid,Text,Image } from "@chakra-ui/react";
import { mockimageurl, sejaUmAutorImg } from "../../util/imageUrls";

export const SejaUmAutor = () => {

    const texto = "A CompSelect convida pesquisadores, docentes e profissionais da área de Ciência da Computação a submeterem suas obras para publicação. Trabalhamos com livros, artigos, periódicos e demais produções técnico-científicas, oferecendo um processo editorial criterioso, com revisão técnica, diagramação profissional e ampla divulgação no meio acadêmico. Nosso compromisso é valorizar a produção intelectual de qualidade, promovendo visibilidade e reconhecimento para autores que desejam contribuir com o avanço da ciência e da tecnologia. Se você tem um projeto editorial e busca uma editora séria, comprometida com o rigor científico e a excelência editorial, entre em contato conosco e envie sua proposta."

    return (
      <>
        <Box bgColor={"#EFF4FD"} color={"#262A38"}>
            <Grid className="grid-cols-2">
                <Box p={8} textAlign={"center"} alignContent={"center"}>
                    <Text fontSize={"3xl"} fontWeight={"bold"}>Seja um autor!</Text>
                    <Text textAlign={"justify"} mt={8} fontSize={"lg"}>{texto}</Text>
                </Box>
                <Flex>
                    <Separator orientation={"vertical"}></Separator>
                    <Image fit={"cover"} w={"full"} h={"full"} minH={"90vh"} src={sejaUmAutorImg}></Image>
                </Flex>
            </Grid>
        </Box>
      </>
    );
  };