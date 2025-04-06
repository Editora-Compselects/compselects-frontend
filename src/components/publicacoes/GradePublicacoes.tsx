import { Box, Checkbox, Flex, For, Grid, Input, InputGroup, Separator, Stack, Text } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"
import { todasPublicacoes } from "../../util/mocks"
import { useState } from "react";
import { MiniPublicacao } from "./MiniPublicacao";


export const GradePublicacoes = () => {

    const [filtro,setFiltro] = useState("");


    return (
        <>
            <Box minH={"88vh"}>
                <Grid className="grid-cols-5">
                    <Flex py={8} pl={8} justifyContent={"space-between"}>
                        <Box w={"90%"}>
                            <Text mb={4} justifySelf={"center"} fontSize={"xl"}>Buscar Publicações</Text>

                            <Box h={"76vh"} overflowY={"auto"} pb={12}>
                                <Text justifySelf={"center"}>Categoria</Text>
                                <Stack mt={2}>
                                    <Checkbox.Root>
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Control />
                                        <Checkbox.Label>Livros</Checkbox.Label>
                                    </Checkbox.Root>

                                    <Checkbox.Root>
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Control />
                                        <Checkbox.Label>Artigos</Checkbox.Label>
                                    </Checkbox.Root>

                                    <Checkbox.Root>
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Control />
                                        <Checkbox.Label>Periódicos</Checkbox.Label>
                                    </Checkbox.Root>
                                </Stack>
                                <Separator mt={4}/>
                                <Text mt={4} justifySelf={"center"}>Tema</Text>
                                <Stack mt={2}>
                                    <For each={Array.from(new Set(todasPublicacoes.map(e => e.tema)))}>
                                        {tema=>
                                        <Checkbox.Root>
                                            <Checkbox.HiddenInput />
                                            <Checkbox.Control />
                                            <Checkbox.Label>{tema}</Checkbox.Label>
                                        </Checkbox.Root>
                                    }
                                    </For>
                                    
                                </Stack>
                                <Separator mt={4}/>
                                <Text mt={4} justifySelf={"center"}>Ano</Text>
                                <Stack mt={2}>
                                    <For each={Array.from(new Set(todasPublicacoes.map(e => e.ano)))}>
                                        {tema=>
                                        <Checkbox.Root>
                                            <Checkbox.HiddenInput />
                                            <Checkbox.Control />
                                            <Checkbox.Label>{tema}</Checkbox.Label>
                                        </Checkbox.Root>
                                    }
                                    </For>
                                </Stack>
                            <Separator mt={4}/>
                            </Box>
                        </Box>
                        <Separator orientation={"vertical"} h={"full"}/>
                    </Flex>
                    <Box className="col-span-4" p={8}>
                        <InputGroup startElement={<LuSearch />} w={"full"} justifyItems={"center"}>
                            <Input placeholder="Buscar título ou autor..." onChange={(e)=>setFiltro(e.target.value)}/>
                        </InputGroup>

                        <Box mt={8} overflowY={"auto"} h={"76vh"}>
                            <Grid className="grid-cols-5" placeItems={"center"} gap={4} m={2} mb={12}>
                                <For each={todasPublicacoes.filter(p => p.title.includes(filtro) || p.author.includes(filtro))}>
                                    {(item) =>
                                        <MiniPublicacao item={item}/>
                                    }
                                </For>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}