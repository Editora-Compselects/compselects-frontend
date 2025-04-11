import { Box,Text,For, IconButton } from "@chakra-ui/react";
import { artigosMock } from "../../util/mocks";
import { PostCard } from "./PostCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Artigos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const totalevents = artigosMock.filter(e=>e.tipo === "artigo").length;

  const nextPublication = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalevents));
  };

  const prevPublication = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalevents :prevIndex - 1) % totalevents);
  };

function goToEvent(item: unknown){
    sessionStorage.setItem('postAtual',JSON.stringify(item));
    navigate(`/blog/${item.titulo}`);
}
    
    return (
      <>
        <Box color={"#262A38"} bgColor={"#EFF4FD"} pt={8} pb={16}>
            <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>Novos artigos na área de tecnologia</Text>

            {/* Carrossel de publicações */}
            <Box
                w={"100vw"}
                h={"full"}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 20}%)` }}
                pl={8}
            >
                {artigosMock.filter(e=>e.tipo === "artigo").map((item) => (
                    <Box onClick={()=>goToEvent(item)} key={item.id} mt={6}>
                        <PostCard titulo={item.titulo} conteudo={item.conteudo} autorImg={item.autorImg} autor={item.autor} imagem={item.imagem} data={item.data} comentarios={item.comentarios}/>
                    </Box>
                    ))}
            </Box>
    
            {/* Botões de navegação */}
            <IconButton
                aria-label="Previous publication"
                onClick={prevPublication}
                position="absolute"
                top="58vh"
                left="4"
                transform="translateY(-50%)"
                bg="blackAlpha.300"
                color="white"
                _hover={{ bg: 'blackAlpha.700' }}
                size="lg"><ChevronLeft /></IconButton>
            <IconButton
                aria-label="Next publication"
                onClick={nextPublication}
                position="absolute"
                top="58vh"
                right="4"
                transform="translateY(-50%)"
                bg="blackAlpha.300"
                color="white"
                _hover={{ bg: 'blackAlpha.700' }}
                size="lg"><ChevronRight /></IconButton>
        </Box>
      </>
    );
  };