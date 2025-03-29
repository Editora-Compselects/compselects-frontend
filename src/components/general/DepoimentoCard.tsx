import { Avatar, Badge, Box, Button, Card, Flex, HStack, Stack, Strong,Text } from "@chakra-ui/react";
import { LuX, LuCheck } from "react-icons/lu";

export interface DepoimentoProps {
    nome: string;
    email: string;
    tipo: string;
    foto: string;
    comentario:string;
}

export const DepoimentoCard = ({
    nome,
    email,
    tipo,
    foto,
    comentario
}:DepoimentoProps) => {
    return (
        <>
            <Card.Root width="320px" className="cardShadow">
                <Card.Body>
                    <HStack mb="6" gap="3">
                    <Avatar.Root>
                        <Avatar.Image src={foto} />
                        <Avatar.Fallback name={nome} />
                    </Avatar.Root>
                    <Stack gap="0" w={"full"}>
                        <Flex justifyContent={"space-between"}>
                        <Text fontWeight="semibold" textStyle="sm">
                        {nome} 
                        </Text>
                        <Badge colorPalette={tipo === "autor" ? "cyan" : "blue"}>{tipo}</Badge>
                        </Flex>
                        <Text color="fg.muted" textStyle="sm">
                        {email}
                        </Text>
                    </Stack>
                    </HStack>
                    <Card.Description>
                    {comentario}
                    </Card.Description>
                </Card.Body>
            </Card.Root>
        </>
    )
}