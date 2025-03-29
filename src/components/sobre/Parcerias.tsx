import { Box, Flex, For, Grid,Image, Text } from "@chakra-ui/react"
import { mockimageurl } from "../../util/imageUrls"

export const Parcerias = () => {
    const parcerias = [
        mockimageurl,
        mockimageurl,
        mockimageurl,
        mockimageurl,
        mockimageurl,
        mockimageurl,
        mockimageurl,
        mockimageurl,
        mockimageurl,
        mockimageurl,
        mockimageurl,
    ]

    return (
        <>
            <Box bgColor={"white"} color={"#262A38"}>
                    <Box p={8} textAlign={"center"} alignContent={"center"}>
                        <Text fontSize={"3xl"}>Nossos parceiros</Text>
                    </Box>
                    <Flex wrap={"wrap"} gap={3} mx={8} mb={12} justifyContent={"center"}>
                        <For each={parcerias}>
                            {(item) => <Image cursor={"pointer"} className="non-holographic-card" aspectRatio={"square"} maxW={"10vw"} src={item}></Image>}
                        </For>
                    </Flex>
            </Box>
        </>
    )
}