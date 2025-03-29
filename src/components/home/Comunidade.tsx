import { Box,Flex,For,Text } from "@chakra-ui/react"
import { mockimageurl } from "../../util/imageUrls"
import { DepoimentoCard } from "../general/DepoimentoCard"

export const Comunidade = () => {

    const depoimentos = [
        {
            nome: "Usuario",
            email: "usuario@email.com",
            tipo: "leitor",
            foto: mockimageurl,
            comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus. Praesent quis dolor dictum, tincidunt nisl sit amet, ultrices est."
        },
        {
            nome: "Usuario",
            email: "usuario@email.com",
            tipo: "autor",
            foto: mockimageurl,
            comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus. Praesent quis dolor dictum, tincidunt nisl sit amet, ultrices est."
        },
        {
            nome: "Usuario",
            email: "usuario@email.com",
            tipo: "autor",
            foto: mockimageurl,
            comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus. Praesent quis dolor dictum, tincidunt nisl sit amet, ultrices est."
        },
        {
            nome: "Usuario",
            email: "usuario@email.com",
            tipo: "leitor",
            foto: mockimageurl,
            comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus. Praesent quis dolor dictum, tincidunt nisl sit amet, ultrices est."
        },
        {
            nome: "Usuario",
            email: "usuario@email.com",
            tipo: "leitor",
            foto: mockimageurl,
            comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus. Praesent quis dolor dictum, tincidunt nisl sit amet, ultrices est."
        },
        {
            nome: "Usuario",
            email: "usuario@email.com",
            tipo: "leitor",
            foto: mockimageurl,
            comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus. Praesent quis dolor dictum, tincidunt nisl sit amet, ultrices est."
        },
        {
            nome: "Usuario",
            email: "usuario@email.com",
            tipo: "leitor",
            foto: mockimageurl,
            comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus. Praesent quis dolor dictum, tincidunt nisl sit amet, ultrices est."
        },
        {
            nome: "Usuario",
            email: "usuario@email.com",
            tipo: "leitor",
            foto: mockimageurl,
            comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus. Praesent quis dolor dictum, tincidunt nisl sit amet, ultrices est."
        },
    ]

    return (
        <>
            <Box color={"#EFF4FD"} bgColor={"#0B1436"} p={8} pb={16}>
                <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>Nossa Comunidade</Text>

                <Flex wrap={"wrap"} gap={6} justifyContent={"center"}>
                    <For each={depoimentos}>
                        {(item) =>
                        <DepoimentoCard nome={item.nome} email={item.email} tipo={item.tipo} foto={item.foto} comentario={item.comentario}/>
                        }
                    </For>
                </Flex>
            </Box>
        </>
    )
}