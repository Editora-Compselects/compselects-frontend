import { Box, Text, Card, Flex, Image } from '@chakra-ui/react';
import { depoimentosAutoresImg, mockimageurl, publicacoesImg } from '../../util/imageUrls';
import { useNavigate } from 'react-router-dom';

export const AtalhosHomePage = () => {
    const cardW = "full"

  return (
    <Box bgColor={"#EFF4FD"} color={"#262A38"} pb={12} pt={8}>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={10}>
            A editora da computação.
        </Text>
        <Flex mx={"10vw"} gap={10}>
            <Box cursor={"pointer"} w={cardW} justifyItems={"center"}>
                <a href='#best-sellers'>
                    <Card.Root rounded={"xs"} className='cardShadow holographic-card' >
                        <Card.Body p={0} aspectRatio={"square"}>
                            <Image w={"full"} h={"full"} src={publicacoesImg[0]}></Image>
                        </Card.Body>
                    </Card.Root>
                    <Text mt={3} fontSize={"xl"} fontWeight={"bold"}>Best Sellers</Text>
                </a>
            </Box>
            <Box cursor={"pointer"} w={cardW} justifyItems={"center"}>
                <a href='#lancamentos'>
                    <Card.Root rounded={"xs"} className='cardShadow holographic-card' >
                        <Card.Body p={0} aspectRatio={"square"}>
                            <Image w={"full"} h={"full"} src={publicacoesImg[3]}></Image>
                        </Card.Body>
                    </Card.Root>
                    <Text mt={3} fontSize={"xl"} fontWeight={"bold"}>Lançamentos</Text>
                </a>
            </Box>
            <Box cursor={"pointer"} w={cardW} justifyItems={"center"}>
                <a href='#destaques'>
                    <Card.Root rounded={"xs"} className='cardShadow holographic-card' >
                        <Card.Body p={0} aspectRatio={"square"}>
                            <Image w={"full"} h={"full"} src={publicacoesImg[2]}></Image>
                        </Card.Body>
                    </Card.Root>
                    <Text mt={3} fontSize={"xl"} fontWeight={"bold"}>Destaques</Text>
                </a>
            </Box>
            <Box cursor={"pointer"} w={cardW} justifyItems={"center"}>
                <a href='/autores'>
                    <Card.Root rounded={"xs"} className='cardShadow holographic-card' >
                        <Card.Body p={0} aspectRatio={"square"}>
                            <Image w={"full"} h={"full"} src={depoimentosAutoresImg[3]}></Image>
                        </Card.Body>
                    </Card.Root>
                    <Text mt={3} fontSize={"xl"} fontWeight={"bold"}>Nossos autores</Text>
                </a>
            </Box>
            <Box cursor={"pointer"} w={cardW} justifyItems={"center"}>
                <a href='/publicacoes'>
                    <Card.Root rounded={"xs"} className='cardShadow holographic-card' >
                        <Card.Body p={0} aspectRatio={"square"}>
                            <Image w={"full"} h={"full"} src={publicacoesImg[13]}></Image>
                        </Card.Body>
                    </Card.Root>
                    <Text mt={3} fontSize={"xl"} fontWeight={"bold"}>Todas as publicações</Text>
                </a>
            </Box>
        </Flex>
    </Box>
  );
};