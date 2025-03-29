import { Badge, Box, Card, Image, Text } from "@chakra-ui/react";

export interface PerfilProps {
    nome: string;
    foto: string;
    funcao: string;
    email: string;
    descricao:string;
    autor: boolean;
}

export const PerfilCard = ({
    nome,
    foto,
    funcao,
    email,
    descricao,
    autor,
}:PerfilProps) => {

    function irParaPublicacoes(){
        //quando clicar aqui, vá para a aba publicações e já coloque o filtro desse autor
    }

    return (
        <Box justifyItems={"center"}>
            <Card.Root maxW="sm" overflow="hidden" m={2} w={"19vw"} h={"56vh"} rounded={"xs"} className="cardShadow holographic-card">
                <Card.Body gap="2" placeItems={"center"}>
                    <Image src={foto} rounded={"full"} w={"60%"} fit={"cover"}/>
                    <Card.Title fontSize={"xl"}>{nome}</Card.Title>
                    {funcao ? <Badge colorPalette={"cyan"}>{funcao}</Badge> : <></>}
                    <Card.Description textAlign={"justify"} lineClamp={5}>{descricao}</Card.Description>
                </Card.Body>
            </Card.Root>
            {
                autor ?
                <Box cursor={"pointer"} onClick={()=>irParaPublicacoes()} className="non-holographic-card">
                    <Text textDecor={"underline"}>Publicações deste autor</Text>
                </Box> 
                :
                <></>
            }
        </Box>
    )
}