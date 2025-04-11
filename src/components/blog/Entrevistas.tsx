import { useState } from 'react';
import { Box, Text, IconButton, Image } from '@chakra-ui/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { artigosMock } from '../../util/mocks';
import { PostCard } from './PostCard';
import { useNavigate } from 'react-router-dom';

export const Entrevistas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const totallancamentos = artigosMock.filter(e=>e.tipo === "entrevista").length;

  const nextPublication = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (totallancamentos));
  };

  const prevPublication = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totallancamentos :prevIndex - 1) % totallancamentos);
  };


  function goToEvent(item: unknown){
    sessionStorage.setItem('postAtual',JSON.stringify(item));
    navigate(`/blog/${item.titulo}`);
}
  return (
    <Box color={"#EFF4FD"} bgColor={"#191c27"} pb={6} pt={8}>
        <Box className="relative w-full overflow-hidden" >
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>
            Entrevistas com autores renomados
        </Text>
        
        {/* Carrossel de publicações */}
        <Box
            w={"100vw"}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 20}%)` }}
            pl={8}
        >
            {artigosMock.filter(e=>e.tipo === "entrevista").map((item) => (
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
            top="50%"
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
            top="50%"
            right="4"
            transform="translateY(-50%)"
            bg="blackAlpha.300"
            color="white"
            _hover={{ bg: 'blackAlpha.700' }}
            size="lg"><ChevronRight /></IconButton>
        </Box>
    </Box>
  );
};