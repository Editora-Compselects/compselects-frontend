import { Box,Flex,For,Text } from "@chakra-ui/react"
import { DepoimentoCard } from "../general/DepoimentoCard"
import { depoimentos } from "../../util/mocks"

export const Comunidade = () => {

    return (
        <>
            <Box color={"#EFF4FD"} bgColor={"#191c27"} p={8} pb={16}>
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