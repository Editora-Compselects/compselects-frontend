import { Box, Flex, Text } from "@chakra-ui/react"
import { PerfilCard } from "../general/PerfilCard"
import { ourTeam } from "../../util/mocks"

export const Equipe = () => {
    
    return (
        <>
            <Box color={"#EFF4FD"} bgColor={"#191c27"} pb={12} pt={8}>
                <Box className="relative w-full" >
                    <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>
                        Quem somos?
                    </Text>
                    <Flex wrap={"wrap"} justifyContent={"center"} gap={6}>
                        {ourTeam.map((item) => (
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