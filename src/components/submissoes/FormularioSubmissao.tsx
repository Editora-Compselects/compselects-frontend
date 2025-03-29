import { Box,Button,createListCollection,FileUpload,Flex,Grid,Input,Portal,Select,Text, Textarea } from "@chakra-ui/react";
import { HiUpload } from "react-icons/hi";

export const FormularioSubmissao = () => {

    const texto = `
    Envie seu livro, artigo ou periódico, etc etc etc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit quis mauris eget pulvinar. Donec nec erat eget neque scelerisque pharetra vel rhoncus sem. Proin sit amet nibh sollicitudin, imperdiet augue et, ullamcorper ante. Maecenas non ornare elit.
    `

    const categorias = createListCollection({
        items: [
          { label: "Livro", value: "livro" },
          { label: "Artigo", value: "artigo" },
          { label: "Periódico", value: "periodico" },
        ],
      })

    return (
      <Box p={8} pb={16} px={12} justifyItems={"center"}>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={6}>Submeta seu trabalho!</Text>
        <Text textAlign={"justify"}>{texto}</Text>

        <Grid mt={8} className="grid-cols-6" gap={3} w={"full"}>
            <Flex className="col-span-2" flexDirection={"column"} gap={3}>
                <Input placeholder="Título do seu trabalho" ></Input>
                <Input placeholder="Autores" ></Input>
                <Select.Root collection={categorias}>
                    <Select.HiddenSelect />
                    <Select.Control>
                        <Select.Trigger>
                        <Select.ValueText  placeholder="Categoria do trabalho" />
                        </Select.Trigger>
                        <Select.IndicatorGroup>
                        <Select.Indicator />
                        </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                        <Select.Positioner>
                        <Select.Content>
                            {categorias.items.map((categoria) => (
                            <Select.Item item={categoria} key={categoria.value}>
                                {categoria.label}
                                <Select.ItemIndicator />
                            </Select.Item>
                            ))}
                        </Select.Content>
                        </Select.Positioner>
                    </Portal>
                </Select.Root>
            </Flex>
            <Box className="col-span-2">
                <Textarea h={"full"} minH={"full"} resize={"none"} placeholder="Resuma brevemente sobre o que se trata o seu trabalho."/>
            </Box>
        
            <Box className="col-span-2">
                <Text mb={3}>*formato PDF, tamanho máximo 5MB.</Text>
                <FileUpload.Root w={"full"}>
                    <FileUpload.HiddenInput />
                    <FileUpload.Trigger asChild w={"full"}>
                        <Button variant="outline" size="sm">
                            <HiUpload /> Envie seu trabalho aqui
                        </Button>
                    </FileUpload.Trigger>
                    <FileUpload.List />
                </FileUpload.Root>
            </Box>
        </Grid>

        <Button bgColor={"#0B1436"} mt={6} px={8}>Submeter</Button>
      </Box>
    );
  };