import { Box, Checkbox, Flex, For, Grid, Input, InputGroup, Separator, Stack, Text } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"
import { todasPublicacoes } from "../../util/mocks"
import { useState } from "react";
import { MiniPublicacao } from "./MiniPublicacao";


export const GradePublicacoes = () => {

    const [filtro,setFiltro] = useState("");

    const [categoriasSelecionadas, setCategoriasSelecionadas] = useState<string[]>([]);
    const [categoriaChecked, setCategoriaChecked] = useState<boolean[]>([false,false,false])

    const quantiaTema = Array.from(new Set(todasPublicacoes.map(e => e.tema))).length
    const teamasCheckedInitialState: boolean[] = []
    for (let i = 0; i < quantiaTema; i++) {
        teamasCheckedInitialState.push(false)
    }
    const [temasSelecionados, setTemasSelecionados] = useState<string[]>([]);
    const [temasChecked, setTemasChecked] = useState<boolean[]>(teamasCheckedInitialState)

    const quantiaAnos = Array.from(new Set(todasPublicacoes.map(e => e.ano))).length
    const anosCheckedInitialState: boolean[] = []
    for (let i = 0; i < quantiaAnos; i++) {
        anosCheckedInitialState.push(false)
    }
    const [anosSelecionados, setAnosSelecionados] = useState<number[]>([]);
    const [anosChecked, setAnosChecked] = useState<boolean[]>(anosCheckedInitialState);

    const handleCategoriaCheckbox = (index: number, categoria: string) => {
        setCategoriaChecked(prev => {
            const novoEstado = [...prev];
            novoEstado[index] = !prev[index];
            return novoEstado;
        });

        setCategoriasSelecionadas(prev => {
            if (prev.includes(categoria)) {
                return prev.filter(c => c !== categoria);
            } else {
                return [...prev, categoria];
            }
        });
    };

    const handleTemaCheckbox = (index: number, tema: string) => {
        setTemasChecked(prev => {
            const novoEstado = [...prev];
            novoEstado[index] = !prev[index];
            return novoEstado;
        });

        setTemasSelecionados(prev => {
            if (prev.includes(tema)) {
                return prev.filter(c => c !== tema);
            } else {
                return [...prev, tema];
            }
        });
    };

    const handleAnoCheckbox = (index: number, ano: number) => {
        setAnosChecked(prev => {
            const novoEstado = [...prev];
            novoEstado[index] = !prev[index];
            return novoEstado;
        });

        setAnosSelecionados(prev => {
            if (prev.includes(ano)) {
                return prev.filter(c => c !== ano);
            } else {
                return [...prev, ano];
            }
        });
    };

    if(!!sessionStorage.getItem('autor')){
        setFiltro(sessionStorage.getItem('autor')||'')
        sessionStorage.removeItem('autor')
    }

    const publicacoesFiltradas = todasPublicacoes.filter(pub => {
        const correspondeTexto =
            pub.title.toLowerCase().includes(filtro.toLowerCase()) ||
            pub.author.toLowerCase().includes(filtro.toLowerCase());

        const correspondeCategoria =
            categoriasSelecionadas.length === 0 || categoriasSelecionadas.includes(pub.type);

        const correspondeTema =
            temasSelecionados.length === 0 || temasSelecionados.includes(pub.tema);

        const correspondeAno =
            anosSelecionados.length === 0 || anosSelecionados.includes(pub.ano);

        return correspondeTexto && correspondeCategoria && correspondeTema && correspondeAno;
    });

    return (
        <>
            <Box minH={"88vh"}>
                <Grid className="grid-cols-5">
                    <Flex py={8} pl={8} justifyContent={"space-between"}>
                        <Box w={"90%"}>
                            <Text mb={4} mt={1} fontWeight={"bold"} justifySelf={"center"} fontSize={"xl"}>Buscar Publicações</Text>

                            <Box h={"76vh"} overflowY={"auto"} pb={12}>
                                <Text justifySelf={"center"}>Categoria</Text>
                                <Stack mt={2}>
                                    {["Livro","Artigo","Periódico"].map((categoria, index) => (
                                        <Checkbox.Root 
                                        key={categoria}
                                        checked={categoriaChecked[index]}
                                        onCheckedChange={() =>
                                            handleCategoriaCheckbox(index, categoria)
                                        }>
                                            <Checkbox.HiddenInput />
                                            <Checkbox.Control />
                                            <Checkbox.Label>{categoria}</Checkbox.Label>
                                        </Checkbox.Root>
                                    ))}
                                </Stack>
                                <Separator mt={4}/>
                                <Text mt={4} justifySelf={"center"}>Tema</Text>
                                <Stack mt={2}>
                                    {Array.from(new Set(todasPublicacoes.map(e => e.tema))).map((tema, index) => (
                                        <Checkbox.Root 
                                        key={tema}
                                        checked={temasChecked[index]}
                                        onCheckedChange={() =>
                                            handleTemaCheckbox(index, tema)
                                        }>
                                            <Checkbox.HiddenInput />
                                            <Checkbox.Control />
                                            <Checkbox.Label>{tema}</Checkbox.Label>
                                        </Checkbox.Root>
                                    ))}
                                </Stack>
                                <Separator mt={4}/>
                                <Text mt={4} justifySelf={"center"}>Ano</Text>
                                <Stack mt={2}>
                                    {Array.from(new Set(todasPublicacoes.map(e => e.ano))).map((ano, index) => (
                                        <Checkbox.Root 
                                        key={ano}
                                        checked={anosChecked[index]}
                                        onCheckedChange={() =>
                                            handleAnoCheckbox(index, ano)
                                        }>
                                            <Checkbox.HiddenInput />
                                            <Checkbox.Control />
                                            <Checkbox.Label>{ano}</Checkbox.Label>
                                        </Checkbox.Root>
                                    ))}
                                    
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
                                {publicacoesFiltradas.map((item, i) => (
                                    <MiniPublicacao key={i} item={item} />
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}