import { Box } from "@chakra-ui/react/box";
import { Flex } from "@chakra-ui/react/flex";
import { BookCopy } from "lucide-react";
import { Link, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
    const navigate = useNavigate();
    return (
      <Box position={"fixed"} zIndex={"999"} px={8} height={"12vh"} w={"full"} bgColor={"#101f50"} alignContent={"center"} color={"#EFF4FD"}>
        <Flex w={"full"} gap={8} placeContent={"space-between"}>
            <Flex alignItems={"center"} gapX={2}>
                <BookCopy size={"28"}/>
                <Text fontSize={"2xl"}>Editora Compselects</Text>
            </Flex>
            <Flex gapX={4} placeContent={"flex-end"}>
                <Link color={"#EFF4FD"} href="#" onClick={()=>navigate("/home")}>Home</Link>
                <Link color={"#EFF4FD"} href="#" onClick={()=>navigate("/sobre")}>Sobre Nós</Link>
                <Link color={"#EFF4FD"} href="#" onClick={()=>navigate("/publicacoes")}>Publicações</Link>
                <Link color={"#EFF4FD"} href="#" onClick={()=>navigate("/autores")}>Autores</Link>
                <Link color={"#EFF4FD"} href="#" onClick={()=>navigate("/submissoes")}>Submissões</Link>
                <Link color={"#EFF4FD"} href="#" onClick={()=>navigate("/eventos")}>Eventos</Link>
                <Link color={"#EFF4FD"} href="#" onClick={()=>navigate("/blog")}>Blog</Link>
                <Link color={"#EFF4FD"} href="#" onClick={()=>navigate("/contato")}>Contato</Link>
            </Flex>
        </Flex>
      </Box>
    );
  };