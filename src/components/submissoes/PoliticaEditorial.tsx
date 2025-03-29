import { Box, Flex, Grid, Separator,Image,Text, Card } from "@chakra-ui/react";
import { mockimageurl } from "../../util/imageUrls";
import { PoliticaEditorialCard } from "./PoliticaEditorialCard";

export const PoliticaEditorial = () => {

    const texto1 = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit quis mauris eget pulvinar. Donec nec erat eget neque scelerisque pharetra vel rhoncus sem. Proin sit amet nibh sollicitudin, imperdiet augue et, ullamcorper ante. Maecenas non ornare elit. Curabitur gravida ut dolor quis faucibus. Suspendisse potenti. Sed tincidunt lobortis pellentesque. Sed cursus luctus sapien eu cursus.

Nam placerat felis nibh. Vestibulum lobortis leo efficitur purus ultricies convallis. Sed sollicitudin a nisi in tincidunt. Duis massa mi, scelerisque ac urna nec, facilisis luctus dolor. Nunc vel scelerisque dolor. Quisque iaculis lectus metus, vitae fringilla felis hendrerit eget. Integer bibendum varius fermentum. Donec ultrices pretium dui, ut faucibus quam faucibus in. Etiam bibendum, enim sed pulvinar pretium, massa nibh ultricies est, sit amet eleifend risus tortor nec ipsum. Nullam interdum pharetra efficitur.

Fusce consectetur odio eget ex facilisis, pharetra placerat mauris maximus. Aenean accumsan, mauris sed hendrerit semper, mi nunc varius diam, in ultricies justo turpis sit amet ligula. Phasellus bibendum et enim sed ultrices. Nam ultrices odio quis orci suscipit condimentum. Nam ac tincidunt massa, et efficitur magna. Mauris tellus nisl, faucibus vitae lacinia eleifend, varius sit amet elit. Etiam ut urna tincidunt, placerat mi ut, bibendum ex. Duis eu sem bibendum, lacinia augue non, ultrices eros. Maecenas mattis dictum arcu. Nullam posuere quam sit amet neque molestie sagittis. Etiam et nisl at nulla molestie fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
    `

    const texto2 = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit quis mauris eget pulvinar. Donec nec erat eget neque scelerisque pharetra vel rhoncus sem. Proin sit amet nibh sollicitudin, imperdiet augue et, ullamcorper ante. Maecenas non ornare elit. Curabitur gravida ut dolor quis faucibus. Suspendisse potenti. Sed tincidunt lobortis pellentesque. Sed cursus luctus sapien eu cursus.

    `

    const texto3 = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit quis mauris eget pulvinar. Donec nec erat eget neque scelerisque pharetra vel rhoncus sem. Proin sit amet nibh sollicitudin, imperdiet augue et, ullamcorper ante. Maecenas non ornare elit. Curabitur gravida ut dolor quis faucibus. Suspendisse potenti. Sed tincidunt lobortis pellentesque. Sed cursus luctus sapien eu cursus.

Nam placerat felis nibh. Vestibulum lobortis leo efficitur purus ultricies convallis. Sed sollicitudin a nisi in tincidunt. Duis massa mi, scelerisque ac urna nec, facilisis luctus dolor. Nunc vel scelerisque dolor. Quisque iaculis lectus metus, vitae fringilla felis hendrerit eget. Integer bibendum varius fermentum. Donec ultrices pretium dui, ut faucibus quam faucibus in. Etiam bibendum, enim sed pulvinar pretium, massa nibh ultricies est, sit amet eleifend risus tortor nec ipsum. Nullam interdum pharetra efficitur.

    
    `

    return (
      <Box>
            <Box color={"#EFF4FD"} bgColor={"#0B1436"} p={8} pb={16}>
                <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>Política Editorial</Text>
                <Grid className="grid-cols-3" justifyItems={"center"}>
                    <PoliticaEditorialCard nome="Políticas de Revisão" foto={mockimageurl} conteudo={texto1}/>
                    <PoliticaEditorialCard nome="Ética" foto={mockimageurl} conteudo={texto2}/>
                    <PoliticaEditorialCard nome="Direitos Autorais" foto={mockimageurl} conteudo={texto3}/>
                </Grid>
            </Box>
      </Box>
    );
  };