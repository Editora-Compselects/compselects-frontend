import { Box, Flex, Grid,Image,Separator,Span,Text } from "@chakra-ui/react"
import { editoraImg, mockimageurl } from "../../util/imageUrls"
import { useNavigate } from "react-router-dom";

export const Sobre = () => {

    const texto = "Com mais de 30 anos de atuação, a Editora CompSelect é referência na publicação de conteúdos voltados à Ciência da Computação. Nosso catálogo reúne livros técnicos, pesquisas científicas, artigos e periódicos acadêmicos, sempre com foco na qualidade editorial e no compromisso com a disseminação do conhecimento. Reconhecida por professores, pesquisadores e instituições de ensino, a CompSelect mantém uma relação próxima com a comunidade acadêmica, promovendo a inovação, o rigor científico e o acesso ao saber em múltiplos formatos e plataformas."
    const navigate = useNavigate();

    return (
        <>
            <Box bgColor={"#EFF4FD"} color={"#262A38"}>
                <Grid className="grid-cols-2">
                    <Box p={8} textAlign={"center"} alignContent={"center"}>
                        <Text fontWeight={"bold"} fontSize={"3xl"}>A Editora</Text>
                        <Text textAlign={"justify"} mt={8} fontSize={"lg"}>{texto}</Text>
                        <Text textAlign={"justify"} mt={8} fontSize={"lg"}>
                            Quer saber mais sobre a Compselects? Explore nossa aba <Span textDecor={"underline"} cursor={"pointer"} color={"#101f50"} onClick={()=>navigate("/sobre")}>Sobre Nós</Span>!</Text>
                    </Box>
                    <Flex>
                        <Separator orientation={"vertical"}></Separator>
                        <Image fit={"cover"} w={"full"} h={"full"} minH={"90vh"} src={editoraImg}></Image>
                    </Flex>
                </Grid>
            </Box>
        </>
    )
}