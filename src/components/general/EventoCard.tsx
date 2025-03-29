import { Avatar, Badge, Box, Button, Card, Flex, HStack, Stack, Strong,Text,Image } from "@chakra-ui/react";
import { LuX, LuCheck } from "react-icons/lu";
import { mockimageurl } from "../../util/imageUrls";

export interface EventoProps {
    nome: string;
    foto: string;
    conteudo:string;
    data: string;
    local: string;
    inscricao: string;
}

export const EventoCard = ({
    nome,
    foto,
    conteudo,
    data,
    local,
    inscricao,
}:EventoProps) => {
    return (
            <Card.Root maxW="sm" overflow="hidden" m={2} w={"25vw"} rounded={"xs"} boxShadow={"md"} className="holographic-card">
                <Image
                    src={mockimageurl}
                />
                <Card.Body gap="2">
                    <Card.Title fontSize={"xl"}>{nome}</Card.Title>
                    <Card.Description lineClamp={3}>{conteudo}</Card.Description>
                </Card.Body>
                <Card.Footer gap="2" justifyContent={"space-between"}>
                    <Button variant="plain">{data}</Button>
                    <Button variant="surface">Ler mais</Button>
                </Card.Footer>
            </Card.Root>
    )
}