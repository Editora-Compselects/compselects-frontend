import { Box,Text ,Flex, Skeleton, Grid} from "@chakra-ui/react";
import GoogleMapEmbed from "./GoogleMapEmbed";

export const FaleConosco = () => {

    const texto = "Praesent quis dolor dictum, tincidunt nisl sit amet, ultrices est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus. Praesent quis dolor dictum, tincidunt nisl sit amet, ultrices est."

    return (
      <>
        <Box bgColor={"white"} color={"#262A38"}>
            <Box h={"88vh"}>
                <Grid h={"full"} className="grid-cols-2">
                    <Box p={8} placeContent={"center"}>
                        <Text fontSize="3xl" fontWeight="bold" mb={4} textAlign={"center"}>
                            Fale conosco!
                        </Text>
                        <Text fontSize={"lg"} textAlign={"justify"}>
                            {texto}
                        </Text>

                        <Flex flexDir={"column"} gap={2} mt={12}>
                                <Text fontSize="2xl" mb={4}>Informações de contato e redes sociais:</Text>
                                <Flex gap={2} flexDir={"column"}>
                                    <Text fontSize="lg">Telefone: +55 (83) 9 9999-9999</Text>
                                    <Text fontSize="lg">E-mail de suporte: contato@compselects.com</Text>
                                    <Text fontSize="lg">E-mail para parcerias: parcerias@compselects.com</Text>
                                    <Text fontSize="lg">Endereço: Rua das Flores, 123, Jardim das Acácias, São Paulo, SP</Text>
                                    <Text fontSize="lg">Facebook: Compselects</Text>
                                    <Text fontSize="lg">Instagram: @compselects</Text>
                                </Flex>
                        </Flex>
                    </Box>
                    
                    <GoogleMapEmbed/>
                </Grid>
            </Box>
        </Box>
      </>
    );
  };