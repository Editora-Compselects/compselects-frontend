import { Box, Link, Text, Grid, Flex } from "@chakra-ui/react"
import { BookCopy, Mail, Phone } from "lucide-react"
import { FaFacebook, FaInstagram } from "react-icons/fa"

export const Footer = () => {
    return (
        <>
            <Box bg="#1353A6" color="#EFF4FD" py={8}>

                <Grid className="grid-cols-4">
                    <Box alignItems={"end"} display={"flex"} mx={8} gapX={2}>
                        <BookCopy size={"96"}></BookCopy>
                        <div>
                            <Text fontSize={"3xl"}>Editora</Text>
                            <Text fontSize={"3xl"} mt={-4}>Compselects</Text>
                        </div>
                    </Box>
                    <Box display={"grid"} className="grid-cols-2">
                        <Flex flexDirection={"column"}>
                            <Link color={"#EFF4FD"} href="#">Home</Link>
                            <Link color={"#EFF4FD"} href="#">Sobre Nós</Link>
                            <Link color={"#EFF4FD"} href="#">Publicações</Link>
                            <Link color={"#EFF4FD"} href="#">Autores</Link>
                        </Flex>
                        <Flex flexDirection={"column"}>
                            <Link color={"#EFF4FD"} href="#">Submissões</Link>
                            <Link color={"#EFF4FD"} href="#">Eventos</Link>
                            <Link color={"#EFF4FD"} href="#">Blog</Link>
                            <Link color={"#EFF4FD"} href="#">Contato</Link>
                        </Flex>
                    </Box>
                    <Box>
                        <Text fontSize={"xl"}>Siga-nos nas redes sociais!</Text>
                        <Flex alignItems={"center"} gapX={2} mt={2}>
                         <FaFacebook size={24}></FaFacebook> 
                         <Link color={"#EFF4FD"} href="#">Compselects</Link>
                        </Flex>
                        <Flex alignItems={"center"} gapX={2} mt={2}>
                         <FaInstagram size={24}></FaInstagram> 
                         <Link color={"#EFF4FD"} href="#">@compselects</Link>
                        </Flex>
                    </Box>
                    <Box>
                        <Text fontSize={"xl"}>Contato</Text>
                        <Flex alignItems={"center"} gapX={2} mt={2}>
                         <Phone></Phone> 
                         <Link color={"#EFF4FD"} href="#">+55 (83) 9 9999-9999</Link>
                        </Flex>
                        <Flex alignItems={"center"} gapX={2} mt={2}>
                         <Mail></Mail>
                         <Link color={"#EFF4FD"} href="#">contato@compselects.com</Link>
                        </Flex>
                    </Box>
                </Grid>

                <Box textAlign="center" mt={8}>
                    <Text fontSize="sm">&copy; {new Date().getFullYear()} Editora Compselects. Todos os direitos reservados.</Text>
                </Box>
            </Box>
        </>
    )
}