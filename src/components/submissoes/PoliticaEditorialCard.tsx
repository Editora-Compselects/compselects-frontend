import { Avatar, Badge, Box, Button, Card, Flex, HStack, Stack, Strong,Text,Image } from "@chakra-ui/react";
import { LuX, LuCheck } from "react-icons/lu";
import { mockimageurl } from "../../util/imageUrls";

export interface PoliticaEditorialProps {
    nome: string;
    foto: string;
    conteudo:string;
}

export const PoliticaEditorialCard = ({
    nome,
    foto,
    conteudo
}:PoliticaEditorialProps) => {
    return (
            <Card.Root overflow="hidden" m={2} w={"10/12"} rounded={"xs"} border={"none"} className="cardShadow non-holographic-card">
                <Image
                    h={"50vh"}
                    w={"full"}
                    fit={"cover"}
                    src={foto}
                />
                <Card.Body gap="2">
                    <Card.Title textAlign={"center"} fontSize={"xl"}>{nome}</Card.Title>
                    <Card.Description mt={2}>{conteudo}</Card.Description>
                </Card.Body>
            </Card.Root>
    )
}