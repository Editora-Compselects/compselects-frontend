import React, { useState } from 'react';
import { Box, Text, IconButton, Card } from '@chakra-ui/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Lancamento = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const publications = [
    {
      title: 'Programacao Web',
      author: 'Demetro Mestre',
      coverImage: 'https://picsum.photos/id/1022/400/300',
    },
    {
      title: 'Programacao Web',
      author: 'Demetro Mestre',
      coverImage: 'https://picsum.photos/id/1022/400/300',
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
    <Box color={"#8B9FE0"} bgColor={"gray.100"}  pb={12} pt={8}>
        <Box className="relative w-full overflow-hidden" >
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>
            Nossos últimos lançamentos!
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
            p={4}
            w={"20vw"}
            h={"50vh"}
            borderWidth="1px"
            borderColor={"#6573A1"}
            bgColor={"#858FAB"}
            borderRadius="lg"
            boxShadow="md"
            textAlign="center"
            color={"gray.200"}
            >
                <Box
                className="bg-cover bg-center w-full h-64 rounded-md"
                style={{ backgroundImage: `url(${publication.coverImage})` }}
                />
                <Text fontWeight="bold" mt={4}>{publication.title}</Text>
                <Text>{publication.author}</Text>
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