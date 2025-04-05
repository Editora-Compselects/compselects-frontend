import { useState } from 'react';
import { Box, Text, IconButton, Image } from '@chakra-ui/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { mockimageurl } from '../../util/imageUrls';
import { EventoCard } from '../general/EventoCard';
import { useNavigate } from 'react-router-dom';

export const Eventos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  
  const publications = [
    {
        id: 1,
        nome: "Evento 1",
        foto: mockimageurl,
        data: "20/02/25",
        local: "Praça",
        inscricao: "Livre",
        conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus. Praesent quis dolor dictum, tincidunt nisl sit amet, ultrices est."
    },
    {
        id: 2,
        nome: "Feira 1",
        foto: mockimageurl,
        data: "20/02/25",
        local: "Praça",
        inscricao: "Ingresso pago",
        conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus. Praesent quis dolor dictum, tincidunt nisl sit amet, ultrices est."
    },
    {
        id: 3,
        nome: "Conferencia",
        foto: mockimageurl,
        data: "20/02/25",
        local: "Praça",
        inscricao: "Doação de alimento",
        conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus. Praesent quis dolor dictum, tincidunt nisl sit amet, ultrices est."
    },
    {
        id: 4,
        nome: "Feira 2",
        foto: mockimageurl,
        data: "20/02/25",
        local: "Praça",
        inscricao: "Doação de alimento",
        conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus. Praesent quis dolor dictum, tincidunt nisl sit amet, ultrices est."
    },
    {
        id: 5,
        nome: "Conferencia",
        foto: mockimageurl,
        data: "20/02/25",
        local: "Praça",
        inscricao: "Doação de alimento",
        conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus. Praesent quis dolor dictum, tincidunt nisl sit amet, ultrices est."
    },
    {
        id: 6,
        nome: "Feira 2",
        foto: mockimageurl,
        data: "20/02/25",
        local: "Praça",
        inscricao: "Doação de alimento",
        conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus. Praesent quis dolor dictum, tincidunt nisl sit amet, ultrices est."
    },
]

  const totalPublications = publications.length;

  const nextPublication = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalPublications-2));
  };

  const prevPublication = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPublications :prevIndex - 1) % totalPublications);
  };

  function goToEvent(item: unknown){
    sessionStorage.setItem('eventoAtual',JSON.stringify(item));
    navigate(`/eventos/${item.nome}`);
  }

  return (
    <Box bgColor={"white"} color={"#262A38"} pb={10} pt={8}>
        <Box className="relative w-full" >
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>
            Eventos e Conferências
        </Text>
        
        {/* Carrossel de publicações */}
        <Box
            w={"100vw"}
            h={"full"}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 20}%)` }}
        >
            {publications.map((item) => (
                <Box onClick={()=>goToEvent(item)} key={item.id}>
                    <EventoCard nome={item.nome} foto={item.foto} conteudo={item.conteudo} data={item.data} local={item.local} inscricao={item.inscricao} />
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