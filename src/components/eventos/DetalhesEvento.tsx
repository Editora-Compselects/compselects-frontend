import { Box, Breadcrumb, Flex, Grid,Image,Separator,Text } from "@chakra-ui/react"

export interface EventoProps {
    nome: string;
    foto: string;
    conteudo:string;
    data: string;
    local: string;
    inscricao: string;
}

export const DetalhesEvento = ({
    nome,
    foto,
    conteudo,
    data,
    local,
    inscricao,
}:EventoProps) => {

    return (
        <>
            <Box color={"#262A38"}>
                <Grid className="grid-cols-5">
                    <Flex className="col-span-2">
                        <Image fit={"cover"} w={"full"} h={"full"} minH={"90vh"} src={foto}></Image>
                        <Separator orientation={"vertical"}></Separator>
                    </Flex>
                    <Box className="col-span-3" p={8}>
                        <Breadcrumb.Root size={"lg"}>
                            <Breadcrumb.List>
                                <Breadcrumb.Item>
                                <Breadcrumb.Link href="/">Compselects</Breadcrumb.Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Separator />
                                <Breadcrumb.Item>
                                <Breadcrumb.Link href="/eventos">Eventos</Breadcrumb.Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Separator />
                                <Breadcrumb.Item>
                                <Breadcrumb.Link href={`#`}>{nome}</Breadcrumb.Link>
                                </Breadcrumb.Item>
                            </Breadcrumb.List>
                        </Breadcrumb.Root>
                        
                        <Text mt={6} fontSize={"3xl"}fontWeight={"bold"}>{nome}</Text>
                        <Flex flexDir={"column"} gap={2} mt={4}>
                            <Text textAlign={"justify"} fontSize={"lg"}>Data: {data}</Text>
                            <Text textAlign={"justify"} fontSize={"lg"}>Local: {local}</Text>
                            <Text textAlign={"justify"} fontSize={"lg"}>Inscrição: {inscricao}</Text>
                            <Text textAlign={"justify"} fontSize={"lg"}>Agenda: {conteudo}</Text>
                        </Flex>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}