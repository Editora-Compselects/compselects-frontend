import { Avatar, Box, HStack, RatingGroup, Stack,Text,Image, Grid, Flex, For } from "@chakra-ui/react"
import { PublicacaoProps } from "./MiniPublicacao"
import { AvaliacaoCard } from "./AvaliacaoCard"

export const Avaliacoes = (
    {
        item
    }:PublicacaoProps
) => {
    return(
        <>
            <Box my={8}>
                <Flex gap={4} alignItems={"center"}>
                    <Stack maxW="320px" gap="4">
                        <RatingGroup.Root
                            colorPalette="orange"
                            readOnly
                            count={5}
                            defaultValue={item.avaliacaoMedia}
                            size="lg"
                        >
                            <RatingGroup.HiddenInput />
                            <RatingGroup.Control />
                        </RatingGroup.Root>
                    </Stack>
                    <Text fontSize={"lg"}>{item.avaliacoesQtd} avaliações</Text>
                </Flex>

                <Text my={6} fontSize={"lg"}>Avaliações recentes</Text>

                
                <For each={item.avaliacoes}>
                    {av=>
                        <AvaliacaoCard item={av}/>
                    }
                </For>
            </Box>
        </>
    )
}