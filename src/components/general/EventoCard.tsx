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

    const eventDate = data.split('/');
    const curDate = ['17','04','25'];
    const passou = curDate[2] > eventDate[2] || curDate[1] > eventDate[1] && curDate[2] == eventDate[2] || curDate[0] > eventDate[0] && curDate[1] == eventDate[1] && curDate[2] == eventDate[2];

    return (
            <Card.Root maxW="sm" overflow="hidden" m={2} w={"25vw"} rounded={"xs"} boxShadow={"md"} className="holographic-card">
                <Image
                    h={"50vh"}
                    w={"full"}
                    fit={"cover"}
                    src={foto}
                />
                <Card.Body gap="2">
                    <Flex justifyContent={"space-between"}>
                        <Card.Title fontSize={"xl"}>{nome}</Card.Title>
                        <Badge colorPalette={ passou ? "orange" : "green"}>{ passou ? "Passado" : "Em breve"}</Badge>
                    </Flex>
                    <Card.Description lineClamp={3}>{conteudo}</Card.Description>
                </Card.Body>
                <Card.Footer gap="2" justifyContent={"space-between"}>
                    <Text fontSize={"sm"}>{data}</Text>
                    <Button variant="surface">Saiba mais</Button>
                </Card.Footer>
            </Card.Root>
    )
}