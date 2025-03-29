import { Badge, Card, Image } from "@chakra-ui/react";

export interface PerfilProps {
    nome: string;
    foto: string;
    funcao: string;
    email: string;
    descricao:string;
}

export const PerfilCard = ({
    nome,
    foto,
    funcao,
    email,
    descricao
}:PerfilProps) => {
    return (
            <Card.Root maxW="sm" overflow="hidden" m={2} w={"19vw"} h={"56vh"} rounded={"xs"} className="cardShadow holographic-card">
                <Card.Body gap="2" placeItems={"center"}>
                    <Image src={foto} rounded={"full"} w={"60%"} fit={"cover"}/>
                    <Card.Title fontSize={"xl"}>{nome}</Card.Title>
                    <Badge colorPalette={"cyan"}>{funcao}</Badge>
                    <Card.Description textAlign={"justify"} lineClamp={5}>{descricao}</Card.Description>
                </Card.Body>
            </Card.Root>
    )
}