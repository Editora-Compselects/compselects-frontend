import { Box,Flex,Text,For } from "@chakra-ui/react";
import { DepoimentoCard } from "../general/DepoimentoCard";
import { depoimentosAutores } from "../../util/mocks";

export const DepoimentosAutores = () => {
    return (
      <>
        <Box color={"#EFF4FD"} bgColor={"#0B1436"} p={8} pb={16}>
            <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>O que nossos autores dizem?</Text>

            <Flex wrap={"wrap"} gap={6} justifyContent={"center"}>
                <For each={depoimentosAutores}>
                    {(item) =>
                        <DepoimentoCard nome={item.nome} email={item.email} tipo={item.tipo} foto={item.foto} comentario={item.comentario}/>
                    }
                </For>
            </Flex>
        </Box>
      </>
    );
  };