import { Button, Input, Box, Text, Grid, Flex,Image } from '@chakra-ui/react';
import { mockimageurl, newsletterImg } from '../../util/imageUrls';


export const Newsletter = () => {

    const texto = "Assine nosso newsletter para não perder as novidades nos inúmeros campos da computação. Notícias relacionadas aos nossos eventos, postagens e publicações serão enviadas ao email cadastrado."

    return (
        <>
            <Box color={"#EFF4FD"} bgColor={"#191c27"}>
                <Grid className="grid-cols-2">
                    <Flex>
                        <Image fit={"cover"} w={"full"} h={"full"} minH={"90vh"} src={newsletterImg}></Image>
                    </Flex>
                    <Box p={8} alignContent={"center"}>
                        <Text fontWeight={"bold"} textAlign={"center"} fontSize={"3xl"}>Fique por dentro de tudo no ramo da computação</Text>
                        <Text textAlign={"justify"} mt={8} fontSize={"lg"}>{texto}</Text>
                        <Input bgColor={"#EFF4FD"} mt={8} color={"#191c27"} placeholder='Seu e-mail aqui'></Input>
                        <Button className='non-holographic-card' mt={8} bgColor={"#8B9CC4"}>Inscrever-se agora</Button>
                        </Box>
                </Grid>
            </Box>
        </>
    )
}