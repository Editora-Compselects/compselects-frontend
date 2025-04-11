import { Button, Card,Flex,Image,Text } from "@chakra-ui/react";

export interface CardProps{
    titulo: string;
    conteudo: string;
    autor: string;
    autorImg: string;
    imagem: string;
    data: string;
    comentarios: unknown[];
}

export const PostCard = (
    {
        titulo,
        conteudo,
        autor,
        imagem,
        data,
    }: CardProps
) => {
    return (
      <>
        <Card.Root maxW="sm" overflow="hidden" m={2} w={"25vw"} rounded={"xs"} boxShadow={"md"} border={"none"} className="holographic-card">
            <Image
                h={"50vh"}
                w={"full"}
                fit={"cover"}
                src={imagem}
            />
            <Card.Body gap="2">
                <Card.Title fontSize={"xl"}>{titulo}</Card.Title>
                <Card.Description lineClamp={3}>{conteudo}</Card.Description>
            </Card.Body>
            <Card.Footer gap="2" justifyContent={"space-between"}>
                <Text fontSize={"sm"}>{data}</Text>
                <Button variant="surface">Saiba mais</Button>
            </Card.Footer>
        </Card.Root>
      </>
    );
  };