import { useState } from 'react';
import { Box, Text, IconButton, Image } from '@chakra-ui/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Lancamentos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const publications = [
    {
      title: 'Programacao Web',
      type: 'Livro',
      coverImage: 'https://picsum.photos/id/1022/400/300',
    },
    {
      title: 'Programacao Web',
      type: 'Livro',
      coverImage: 'https://picsum.photos/id/1022/400/300',
    },
    {
      title: 'Programacao Web',
      type: 'Livro',
      coverImage: 'https://picsum.photos/id/1022/400/300',
    },
    {
      title: 'Programacao Web',
      type: 'Livro',
      coverImage: 'https://picsum.photos/id/1022/400/300',
    },
    {
      title: 'Programacao Web',
      type: 'Livro',
      coverImage: 'https://picsum.photos/id/1022/400/300',
    },
    {
      title: 'Programacao Web',
      type: 'Livro',
      coverImage: 'https://picsum.photos/id/1022/400/300',
    },
    {
      title: 'Programacao Web',
      type: 'Artigo',
      coverImage: 'https://picsum.photos/id/1018/300/200',
    },
    {
      title: 'Programacao Web',
      type: 'Artigo',
      coverImage: 'https://picsum.photos/id/1018/300/200',
    },
    {
      title: 'Programacao Web',
      type: 'Artigo',
      coverImage: 'https://picsum.photos/id/1018/300/200',
    },
    {
      title: 'Programacao Web',
      type: 'Artigo',
      coverImage: 'https://picsum.photos/id/1018/300/200',
    },
    {
      title: 'Programacao Web',
      type: 'Artigo',
      coverImage: 'https://picsum.photos/id/1018/300/200',
    },
  ];

  const totalPublications = publications.length;

  const nextPublication = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalPublications-3));
  };

  const prevPublication = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPublications :prevIndex - 1) % totalPublications);
  };

  return (
    <Box color={"#EFF4FD"} bgColor={"#0B1436"} pb={6} pt={8}>
        <Box className="relative w-full overflow-hidden" >
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>
            Últimos lançamentos
        </Text>
        
        {/* Carrossel de publicações */}
        <Box
            w={"100vw"}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 20}%)` }}
        >
            {publications.map((publication, index) => (
                <Box
                key={index}
                className="flex-shrink-0"
                mx={2}
                w={"20vw"}
                h={"70vh"}
                textAlign="center"
                color={"#EFF4FD"}
                cursor={"pointer"}
                >
                <Image className='non-holographic-card' src={publication.coverImage} fit={"cover"} w={"full"} h={"80%"}></Image>
                <Text fontSize={"xl"} mt={6}>{publication.title}</Text>
                <Text>{publication.type}</Text>
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