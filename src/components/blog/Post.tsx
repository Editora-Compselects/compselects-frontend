import { Avatar, Box, Breadcrumb, Button, Card,Flex,For,Grid,Image,Separator,Text, Textarea } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaReddit, FaShare, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { LuShare, LuShare2 } from "react-icons/lu";
import { Comentario } from "./Comentario";

export interface CardProps{
    titulo: string;
    tipo: string;
    conteudo: string;
    autor: string;
    autorImg: string;
    imagem: string;
    data: string;
    comentarios: unknown[];
}

export const Post = (
    {
        titulo,
        conteudo,
        autor,
        tipo,
        autorImg,
        imagem,
        data,
        comentarios
    }: CardProps
) => {
    return (
      <>
        <Box color={"#262A38"}>
            <Image src={imagem} w={"full"} aspectRatio={"ultrawide"} fit={"cover"}/>

            <Box py={8} px={72}>
                <Breadcrumb.Root size={"lg"}>
                    <Breadcrumb.List>
                        <Breadcrumb.Item>
                        <Breadcrumb.Link href="/">Compselects</Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator />
                        <Breadcrumb.Item>
                        <Breadcrumb.Link href="/blog">Blog</Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator />
                        <Breadcrumb.Item>
                        <Breadcrumb.Link href={`#`}>{titulo}</Breadcrumb.Link>
                        </Breadcrumb.Item>
                    </Breadcrumb.List>
                </Breadcrumb.Root>
                <Text fontSize={"3xl"}fontWeight={"bold"} my={4}>{titulo}</Text>
                <Flex alignItems={"center"} gap={3}>
                    <Avatar.Root size={"xl"}>
                        <Avatar.Image src={autorImg} />
                        <Avatar.Fallback name={autor} />
                    </Avatar.Root>
                    <div>
                        <Text>{autor}</Text>
                        <Text color={"gray.500"} mt={1}>{data}</Text>
                    </div>
                </Flex>

                <Separator my={6}/>

                <Text textAlign={"justify"}>
                    {conteudo}
                </Text>

                <Separator my={6}/>

                <Grid className="grid-cols-2">
                    <Text>Gostou dest{tipo === "artigo" ? "e":"a"} {tipo}? Deixe sua opinião abaixo e compartilhe nas redes sociais!</Text>
                    <Flex gap={2} w={"full"} justifyContent={"end"}>
                        <LuShare2 color="#262A38" size={32} cursor={"pointer"}/>
                        <FaWhatsapp color="#262A38" size={32} cursor={"pointer"}/>
                        <FaFacebook color="#262A38" size={32} cursor={"pointer"}/>
                        <FaInstagram color="#262A38" size={32} cursor={"pointer"}/>
                        <FaBluesky color="#262A38" size={32} cursor={"pointer"}/>
                    </Flex>
                </Grid>
                <Separator my={6}/>

                <Text fontSize={"2xl"}>{comentarios.length} comentários nest{tipo === "artigo" ? "e":"a"} {tipo}</Text>

                <Box my={8}>
                    <Flex alignItems={"center"} gap={3}>
                        <Avatar.Root>
                            <Avatar.Fallback />
                        </Avatar.Root>

                        <Text>Escreva um comentário</Text>
                    </Flex>

                    <Textarea minH={"100px"} maxH={"200px"} my={4} placeholder={`O que você achou dest${tipo === "artigo" ? "e":"a"} ${tipo}?`}></Textarea>
                    <Button variant={"surface"} size={"sm"}>Comentar</Button>
                </Box>

                <For each={comentarios}>
                    {av=>
                        <Comentario item={av}/>
                    }
                </For>
            </Box>
        </Box>
      </>
    );
  };