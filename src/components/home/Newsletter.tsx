import { Button, Input, Box, Text, Grid, Flex,Image } from '@chakra-ui/react';
import { mockimageurl } from '../../util/imageUrls';


export const Newsletter = () => {

    const texto = "Assine nossa newsletter bla bla bla bla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit quis mauris eget pulvinar. Donec nec erat eget neque scelerisque pharetra vel rhoncus sem."

    return (
        <>
            <Box color={"#EFF4FD"} bgColor={"#0B1436"}>
                <Grid className="grid-cols-2">
                    <Flex>
                        <Image fit={"cover"} w={"full"} src={mockimageurl}></Image>
                    </Flex>
                    <Box p={8} alignContent={"center"}>
                        <Text textAlign={"center"} fontSize={"3xl"}>Fique por dentro de tudo no ramo da computação</Text>
                        <Text textAlign={"justify"} mt={8} fontSize={"lg"}>{texto}</Text>
                        <Input bgColor={"#EFF4FD"} mt={8} color={"#0B1436"} placeholder='Seu e-mail aqui'></Input>
                        <Button className='non-holographic-card' mt={8} bgColor={"#8B9CC4"}>Inscrever-se agora</Button>
                        </Box>
                </Grid>
            </Box>
        </>
    )
}