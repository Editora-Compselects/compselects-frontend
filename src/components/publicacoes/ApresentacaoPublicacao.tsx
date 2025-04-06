import { Box,Button,Flex,Grid,Image,Separator,Text } from "@chakra-ui/react"
import { PublicacaoProps } from "./MiniPublicacao"

export const ApresentacaoPublicacao = (
    {
        item
    }:PublicacaoProps
) => {

    function formatarPreco(p:number){
        return ((p).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }));
    }

    return(
        <>
            <Grid className="grid-cols-5">
                <Image src={item.coverImage} aspectRatio={"portrait"} fit={"cover"} w={"100vw"}></Image>
                <Box ml={8} className="col-span-3">
                    <Flex alignContent={"space-between"} flexDirection={"column"}>
                        <div>
                            <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
                                <Text fontSize={"3xl"}>{item.title}</Text>
                            </Flex>
                            <Text>{item.type} por {item.author}</Text>
                            <Text mt={8} textAlign={"justify"}>{item.summary}</Text>
                        </div>
                    </Flex>
                </Box>
                <Flex h={"full"} flexDir={"column"} justifyContent={"space-between"}>
                    <Box justifyItems={"center"}>
                        <Text fontSize={"xl"}>{item.vendas} vendidos</Text>
                        <Text fontSize={"xl"}>Adquira agora!</Text>
                    </Box>
                    <Flex flexDir={"column"} gap={4} alignItems={"center"}>
                        { 
                            item.formato.includes('fisico') ?
                            <>
                                <Box>
                                    <Text fontSize={"3xl"}>{formatarPreco(item.precoFisico)}</Text>
                                    <Text>Físico</Text>
                                </Box>
                            </>
                            :
                            <>
                            </>
                        }
                        {
                            item.formato.includes('ebook') ?
                            <>
                                <Box>
                                    <Text fontSize={"3xl"}>{formatarPreco(item.precoEbook)}</Text>
                                    <Text>Digital</Text>
                                    <Text>Formato PDF</Text>
                                </Box>
                            </>
                            :
                            <>
                            </>
                        }
                    </Flex>

                    <Button w={"max"} px={8} alignSelf={"center"}>Adquirir</Button>
                </Flex>
            </Grid>
            <Separator mt={8}/>
        </>
    )
}