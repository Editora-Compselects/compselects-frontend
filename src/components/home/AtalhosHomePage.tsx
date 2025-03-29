import { Box, Text, Card, Flex, Image } from '@chakra-ui/react';
import { mockimageurl } from '../../util/imageUrls';

export const AtalhosHomePage = () => {

    const cardW = "full"

  return (
    <Box bgColor={"#EFF4FD"} color={"#262A38"} pb={12} pt={8}>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={10}>
            A editora da computação.
        </Text>
        <Flex mx={"10vw"} gap={10}>
            <Box cursor={"pointer"} w={cardW} justifyItems={"center"}>
                <Card.Root rounded={"xs"} className='cardShadow holographic-card' >
                    <Card.Body p={0} aspectRatio={"square"}>
                        <Image w={"full"} h={"full"} src={mockimageurl}></Image>
                    </Card.Body>
                </Card.Root>
                <Text mt={3} fontSize={"xl"} fontWeight={"bold"}>Best Sellers</Text>
            </Box>
            <Box cursor={"pointer"} w={cardW} justifyItems={"center"}>
                <Card.Root rounded={"xs"} className='cardShadow holographic-card' >
                    <Card.Body p={0} aspectRatio={"square"}>
                        <Image w={"full"} h={"full"} src={mockimageurl}></Image>
                    </Card.Body>
                </Card.Root>
                <Text mt={3} fontSize={"xl"} fontWeight={"bold"}>Lançamentos</Text>
            </Box>
            <Box cursor={"pointer"} w={cardW} justifyItems={"center"}>
                <Card.Root rounded={"xs"} className='cardShadow holographic-card' >
                    <Card.Body p={0} aspectRatio={"square"}>
                        <Image w={"full"} h={"full"} src={mockimageurl}></Image>
                    </Card.Body>
                </Card.Root>
                <Text mt={3} fontSize={"xl"} fontWeight={"bold"}>Destaques</Text>
            </Box>
            <Box cursor={"pointer"} w={cardW} justifyItems={"center"}>
                <Card.Root rounded={"xs"} className='cardShadow holographic-card' >
                    <Card.Body p={0} aspectRatio={"square"}>
                        <Image w={"full"} h={"full"} src={mockimageurl}></Image>
                    </Card.Body>
                </Card.Root>
                <Text mt={3} fontSize={"xl"} fontWeight={"bold"}>Nossos autores</Text>
            </Box>
            <Box cursor={"pointer"} w={cardW} justifyItems={"center"}>
                <Card.Root rounded={"xs"} className='cardShadow holographic-card' >
                    <Card.Body p={0} aspectRatio={"square"}>
                        <Image w={"full"} h={"full"} src={mockimageurl}></Image>
                    </Card.Body>
                </Card.Root>
                <Text mt={3} fontSize={"xl"} fontWeight={"bold"}>Todas as publicações</Text>
            </Box>
        </Flex>
    </Box>
  );
};