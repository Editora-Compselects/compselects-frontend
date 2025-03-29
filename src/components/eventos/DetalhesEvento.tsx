import { Box, Breadcrumb, Flex, Grid,Image,Separator,Span,Text } from "@chakra-ui/react"
import { mockimageurl } from "../../util/imageUrls"

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

    const texto = "Donec eget turpis at metus ornare aliquam. Curabitur molestie porttitor dui vitae malesuada. Cras dignissim quam id lectus placerat elementum. Sed laoreet purus malesuada ligula convallis porta. Fusce mollis, urna commodo rhoncus consectetur, neque erat bibendum nisl, fermentum placerat est tortor bibendum justo. Aenean mattis, ex nec consectetur faucibus, quam eros semper velit, et luctus nunc tortor ac ipsum. Morbi tellus risus, sodales a nisl vitae, scelerisque ultrices augue. Duis varius, massa sed lobortis egestas, mauris libero fermentum turpis, luctus interdum nibh quam a tellus. Quisque mollis ipsum in convallis laoreet. Nam ullamcorper accumsan quam, non aliquam velit porttitor a. Donec porta tincidunt nibh, nec commodo dui bibendum nec. Pellentesque tempus cursus tortor et consectetur. Aliquam imperdiet sit amet est eu blandit. Duis elementum felis ut lacus dignissim lobortis."

    return (
        <>
            <Box bgColor={"#EFF4FD"} color={"#262A38"}>
                <Grid className="grid-cols-5">
                    <Flex className="col-span-2">
                        <Image fit={"cover"} w={"full"} h={"full"} minH={"90vh"} src={foto}></Image>
                        <Separator orientation={"vertical"}></Separator>
                    </Flex>
                    <Box className="col-span-3" p={8}>
                        <Breadcrumb.Root size={"lg"}>
                            <Breadcrumb.List>
                                <Breadcrumb.Item>
                                <Breadcrumb.Link href="#">Eventos</Breadcrumb.Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Separator />
                                <Breadcrumb.Item>
                                <Breadcrumb.Link href="#">{nome}</Breadcrumb.Link>
                                </Breadcrumb.Item>
                            </Breadcrumb.List>
                        </Breadcrumb.Root>
                        
                        <Text mt={6} fontSize={"3xl"}>{nome}</Text>
                        <Flex flexDir={"column"} gap={2} mt={4}>
                            <Text textAlign={"justify"} fontSize={"lg"}>Data: {data}</Text>
                            <Text textAlign={"justify"} fontSize={"lg"}>Local: {local}</Text>
                            <Text textAlign={"justify"} fontSize={"lg"}>Inscrição: {inscricao}</Text>
                            <Text textAlign={"justify"} fontSize={"lg"}>Agenda: {texto}</Text>
                        </Flex>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}