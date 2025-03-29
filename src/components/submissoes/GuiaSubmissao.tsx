import { Box,Flex, Grid, Separator, Text,Image } from "@chakra-ui/react";
import { mockimageurl } from "../../util/imageUrls";

export const GuiaSubmissao = () => {

    const texto = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit quis mauris eget pulvinar. Donec nec erat eget neque scelerisque pharetra vel rhoncus sem. Proin sit amet nibh sollicitudin, imperdiet augue et, ullamcorper ante. Maecenas non ornare elit. Curabitur gravida ut dolor quis faucibus. Suspendisse potenti. Sed tincidunt lobortis pellentesque. Sed cursus luctus sapien eu cursus.

Nam placerat felis nibh. Vestibulum lobortis leo efficitur purus ultricies convallis. Sed sollicitudin a nisi in tincidunt. Duis massa mi, scelerisque ac urna nec, facilisis luctus dolor. Nunc vel scelerisque dolor. Quisque iaculis lectus metus, vitae fringilla felis hendrerit eget. Integer bibendum varius fermentum. Donec ultrices pretium dui, ut faucibus quam faucibus in. Etiam bibendum, enim sed pulvinar pretium, massa nibh ultricies est, sit amet eleifend risus tortor nec ipsum. Nullam interdum pharetra efficitur.

Fusce consectetur odio eget ex facilisis, pharetra placerat mauris maximus. Aenean accumsan, mauris sed hendrerit semper, mi nunc varius diam, in ultricies justo turpis sit amet ligula. Phasellus bibendum et enim sed ultrices. Nam ultrices odio quis orci suscipit condimentum. Nam ac tincidunt massa, et efficitur magna. Mauris tellus nisl, faucibus vitae lacinia eleifend, varius sit amet elit. Etiam ut urna tincidunt, placerat mi ut, bibendum ex. Duis eu sem bibendum, lacinia augue non, ultrices eros. Maecenas mattis dictum arcu. Nullam posuere quam sit amet neque molestie sagittis. Etiam et nisl at nulla molestie fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
    `
    return (
      <Box>
            <Box bgColor={"white"} color={"#262A38"}>
                <Grid className="grid-cols-2">
                    <Box p={8} textAlign={"center"}>
                        <Text fontSize={"3xl"}>Faça parte da Compselects</Text>
                        <Text textAlign={"justify"} mt={8} fontSize={"lg"}>{texto}</Text>
                    </Box>
                    <Flex>
                        <Separator orientation={"vertical"}></Separator>
                        <Image fit={"cover"} w={"full"} h={"full"} minH={"90vh"} src={mockimageurl}></Image>
                    </Flex>
                </Grid>
            </Box>
      </Box>
    );
  };