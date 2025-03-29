import { Box } from "@chakra-ui/react/box";
import { Flex } from "@chakra-ui/react/flex";
import { BookCopy } from "lucide-react";
import { Link, Text } from "@chakra-ui/react"

export const NavBar = () => {
    return (
      <Box position={"fixed"} zIndex={"999"} px={8} height={"12vh"} w={"full"} bgColor={"#2767BA"} alignContent={"center"} color={"gray.200"}>
        <Flex w={"full"} gap={8} placeContent={"space-between"}>
            <Flex alignItems={"center"} gapX={2}>
                <BookCopy size={"28"}/>
                <Text fontSize={"2xl"}>Editora Compselects</Text>
            </Flex>
            <Flex gapX={4} placeContent={"flex-end"}>
                <Link color={"#EFF4FD"} href="#">Home</Link>
                <Link color={"#EFF4FD"} href="#">Sobre Nós</Link>
                <Link color={"#EFF4FD"} href="#">Publicações</Link>
                <Link color={"#EFF4FD"} href="#">Autores</Link>
                <Link color={"#EFF4FD"} href="#">Submissões</Link>
                <Link color={"#EFF4FD"} href="#">Eventos</Link>
                <Link color={"#EFF4FD"} href="#">Blog</Link>
                <Link color={"#EFF4FD"} href="#">Contato</Link>
            </Flex>
        </Flex>
      </Box>
    );
  };