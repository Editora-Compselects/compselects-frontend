import { Box, Flex, Grid,Image, Text } from "@chakra-ui/react"
import { equipeImg, mockimageurl } from "../../util/imageUrls"

export const HistoriaMissao = () => {

    const texto = "Nestes 30 anos de existência, a Editora Compselects tem reafirmado constantemente o seu compromisso com a ciência e com a democratização do conhecimento da computação. Já são mais de 200 livros publicados e diversos livros reconhecidos e adotados por ilustres professores de área de Computação. Sempre em sintonia com a comunidade acadêmica de Computação, a editora nunca parou de inovar. Hoje, atuando em diversas plataformas, publica livros técnicos, pesquisas científicas, artigos acadêmicos e proceedings nos formatos: digital offline (CD e pendrive), digital online"

    return (
        <>
            <Box bgColor={"white"} color={"#262A38"}>
                <Grid className="grid-cols-2">
                    <Box p={8} textAlign={"center"} alignContent={"center"}>
                        <Text fontWeight={"bold"} fontSize={"3xl"}>História e Missão</Text>
                        <Text textAlign={"justify"} mt={8} fontSize={"lg"}>{texto}</Text>
                        </Box>
                    <Flex>
                        <Image fit={"cover"} w={"full"} h={"full"} minH={"90vh"} src={equipeImg}></Image>
                    </Flex>
                </Grid>
            </Box>
        </>
    )
}