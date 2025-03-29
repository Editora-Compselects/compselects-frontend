import { Box, Flex, Grid,Image,Separator,Span,Text } from "@chakra-ui/react"
import { mockimageurl } from "../../util/imageUrls"
import { EventoCard } from "../general/EventoCard"
import { PerfilCard } from "../general/PerfilCard"

export const Equipe = () => {

    const publications = [
        {
            nome: "Pessoa 1",
            foto: mockimageurl,
            funcao: "editor",
            email: "pessoa@email.com",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus."
        },
        {
            nome: "Pessoa 1",
            foto: mockimageurl,
            funcao: "editor",
            email: "pessoa@email.com",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus."
        },
        {
            nome: "Pessoa 1",
            foto: mockimageurl,
            funcao: "editor",
            email: "pessoa@email.com",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus."
        },
        {
            nome: "Pessoa 1",
            foto: mockimageurl,
            funcao: "editor",
            email: "pessoa@email.com",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus."
        },
        {
            nome: "Pessoa 1",
            foto: mockimageurl,
            funcao: "editor",
            email: "pessoa@email.com",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus."
        },
        {
            nome: "Pessoa 1",
            foto: mockimageurl,
            funcao: "editor",
            email: "pessoa@email.com",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus."
        },
    ]
    
    return (
        <>
            <Box color={"#EFF4FD"} bgColor={"#0B1436"} pb={10} pt={8}>
                <Box className="relative w-full" >
                    <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>
                        Quem somos?
                    </Text>
                    <Flex wrap={"wrap"} justifyContent={"center"} gap={6}>
                        {publications.map((item) => (
                            <Box>
                                <PerfilCard autor={false} nome={item.nome} foto={item.foto} funcao={item.funcao} email={item.email} descricao={item.descricao} />
                            </Box>
                        ))}
                    </Flex>
                
                </Box>
            </Box>
        </>
    )
}