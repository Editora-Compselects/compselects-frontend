import { Box, Flex, For, Grid,Image, Text } from "@chakra-ui/react"
import { mockimageurl, parceriasImg } from "../../util/imageUrls"

export const Parcerias = () => {

    return (
        <>
            <Box bgColor={"white"} color={"#262A38"} py={8}>
                    <Box p={8} textAlign={"center"} alignContent={"center"}>
                        <Text fontWeight={"bold"} fontSize={"3xl"}>Nossos parceiros</Text>
                    </Box>
                    <Flex wrap={"wrap"} gap={3} mx={8} mb={12} justifyContent={"center"}>
                        <For each={parceriasImg}>
                            {(item) => <Image className="non-holographic-card" aspectRatio={"square"} maxW={"10vw"} src={item}></Image>}
                        </For>
                    </Flex>
            </Box>
        </>
    )
}