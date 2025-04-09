import { Box,Text,Flex,Input,Textarea,Button, Grid,Image } from "@chakra-ui/react";
import { mockimageurl } from "../../util/imageUrls";

export const Form = () => {
    return (
      <>
        <Box color={"#EFF4FD"} bgColor={"#0B1436"}>
            <Grid className="grid-cols-2">
                <Flex>
                    <Image fit={"cover"} w={"full"} h={"full"} minH={"80vh"} src={mockimageurl}></Image>
                </Flex>
                <Box p={8} alignContent={"center"}>
                    <Text textAlign={"center"} fontSize={"3xl"}>Ou entre em contato conosco diretamente através deste formulário</Text>
                    <Flex flexDir={"column"} mt={8} gap={2}>
                    <Input bgColor={"#EFF4FD"} color={"#0B1436"} placeholder='Seu nome'></Input>
                    <Input bgColor={"#EFF4FD"} color={"#0B1436"} placeholder='Seu endereço de e-mail'></Input>
                    <Input bgColor={"#EFF4FD"} color={"#0B1436"} placeholder='Telefone para contato'></Input>
                    <Input bgColor={"#EFF4FD"} color={"#0B1436"} placeholder='Assunto do e-mail'></Input>
                    <Textarea minH={"100px"} bgColor={"#EFF4FD"} color={"#0B1436"} placeholder='Mensagem'/>

                    </Flex>
                    <Button className='non-holographic-card' mt={8} bgColor={"#8B9CC4"} px={6}>Enviar</Button>
                    <Text mt={2}>Enviaremos sua mensagem para o nosso e-mail de suporte.</Text>
                    </Box>
            </Grid>
        </Box>
      </>
    );
  };