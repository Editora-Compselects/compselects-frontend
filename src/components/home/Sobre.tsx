import { Box, Flex, Grid,Image,Separator,Span,Text } from "@chakra-ui/react"
import { mockimageurl } from "../../util/imageUrls"

export const Sobre = () => {

    const texto = "Donec eget turpis at metus ornare aliquam. Curabitur molestie porttitor dui vitae malesuada. Cras dignissim quam id lectus placerat elementum. Sed laoreet purus malesuada ligula convallis porta. Fusce mollis, urna commodo rhoncus consectetur, neque erat bibendum nisl, fermentum placerat est tortor bibendum justo. Aenean mattis, ex nec consectetur faucibus, quam eros semper velit, et luctus nunc tortor ac ipsum. Morbi tellus risus, sodales a nisl vitae, scelerisque ultrices augue. Duis varius, massa sed lobortis egestas, mauris libero fermentum turpis, luctus interdum nibh quam a tellus. Quisque mollis ipsum in convallis laoreet. Nam ullamcorper accumsan quam, non aliquam velit porttitor a. Donec porta tincidunt nibh, nec commodo dui bibendum nec. Pellentesque tempus cursus tortor et consectetur. Aliquam imperdiet sit amet est eu blandit. Duis elementum felis ut lacus dignissim lobortis."

    return (
        <>
            <Box bgColor={"#EFF4FD"} color={"#262A38"}>
                <Grid className="grid-cols-2">
                    <Box p={8} textAlign={"center"} alignContent={"center"}>
                        <Text fontSize={"3xl"}>A Editora</Text>
                        <Text textAlign={"justify"} mt={8} fontSize={"lg"}>{texto}</Text>
                        <Text textAlign={"justify"} mt={8} fontSize={"lg"}>Quer saber mais sobre a Compselects? Explore nossa aba <Span cursor={"pointer"} color={"#1353A6"}>Sobre Nós</Span>!</Text>
                    </Box>
                    <Flex>
                        <Separator orientation={"vertical"}></Separator>
                        <Image fit={"cover"} w={"full"} src={mockimageurl}></Image>
                    </Flex>
                </Grid>
            </Box>
        </>
    )
}