import React, { useEffect, useState } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const HeroSection = () => {
  const images = [ //depois mudar pra imagens relevantes
    'https://picsum.photos/id/1015/300/300',
    'https://picsum.photos/id/1016/200/300',
    'https://picsum.photos/id/1018/300/200',
    'https://picsum.photos/id/1022/400/300',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  // Função para mudar para a próxima imagem
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  // Função para mudar para a imagem anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  // Alterar a imagem automaticamente a cada 10 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <Box className="relative w-full h-[90vh] overflow-hidden">
      <div className="relative w-full h-full">
        {/* Exibindo as imagens com animação */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
              index === currentIndex
                ? 'opacity-100 translate-x-0'
                : index === (currentIndex + 1) % totalImages
                ? 'opacity-0 translate-x-full'
                : 'opacity-0 translate-x-[-100vw]'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Setas de navegação utilizando IconButton do Chakra UI */}
      <IconButton
        aria-label="Previous slide"
        onClick={prevSlide}
        position="absolute"
        top="50%"
        left="4"
        transform="translateY(-50%)"
        bg="blackAlpha.300"
        color="white"
        _hover={{ bg: 'blackAlpha.700' }}
        size="lg"><ChevronLeft /></IconButton>
      <IconButton
        aria-label="Next slide"
        onClick={nextSlide}
        position="absolute"
        top="50%"
        right="4"
        transform="translateY(-50%)"
        bg="blackAlpha.300"
        color="white"
        _hover={{ bg: 'blackAlpha.700' }}
        size="lg"><ChevronRight /></IconButton>
    </Box>
  );
};