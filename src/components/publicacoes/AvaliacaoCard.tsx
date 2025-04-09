import { Stack, RatingGroup, HStack, Avatar,Text, Card,} from "@chakra-ui/react";
import { PublicacaoProps } from "./MiniPublicacao";

export const AvaliacaoCard = (
    {
        item
    }:PublicacaoProps
) => {
    return(
        <>
            <Card.Root my={6} boxShadow={"sm"}>
                <Card.Body>
                    <Stack gap="4">

                    <RatingGroup.Root
                        colorPalette="orange"
                        readOnly
                        count={5}
                        defaultValue={item.avaliacao}
                        size="xs"
                        mt={1}
                    >
                        <RatingGroup.HiddenInput />
                        <RatingGroup.Control />
                    </RatingGroup.Root>

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

                    <Text>
                        {item.comentario}
                    </Text>
                </Stack>
                </Card.Body>
            </Card.Root>

        </>
    )
}