import { Stack, RatingGroup, HStack, Avatar,Text, Card, Flex,} from "@chakra-ui/react";
import { PublicacaoProps } from "../publicacoes/MiniPublicacao";
import { LuThumbsDown, LuThumbsUp } from "react-icons/lu";

export const Comentario = (
    {
        item
    }:PublicacaoProps
) => {
    return(
        <>
            <Card.Root my={6} boxShadow={"sm"}>
                <Card.Body>
                    <Stack gap="4">

                    <Flex justifyContent={"space-between"}>
                    <HStack gap="4">
                        <Avatar.Root>
                        <Avatar.Fallback name={item.nome} />
                        <Avatar.Image src={item.foto} />
                        </Avatar.Root>
                        <Stack textStyle="sm" gap="0">
                        <Text fontWeight="medium">{item.nome}</Text>
                        <Text color="fg.muted">{item.email}</Text>
                        </Stack>
                    </HStack>
                        
                    <Flex gap={2}>
                        <LuThumbsUp size={"20"} cursor={"pointer"}></LuThumbsUp>
                        <LuThumbsDown size={"20"} cursor={"pointer"}></LuThumbsDown>
                    </Flex>
                    </Flex>

                    <Text>
                        {item.comentario}
                    </Text>
                </Stack>
                </Card.Body>
            </Card.Root>

        </>
    )
}