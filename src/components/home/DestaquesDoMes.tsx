import React, { useState } from 'react';
import { Box, Text, IconButton, Image, Flex, Button } from '@chakra-ui/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { mockimageurl } from '../../util/imageUrls';

export const DestaquesDoMes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const publications = [
    {
      title: 'Programacao Web',
      type: 'livro',
      author: 'Demetrio Mestre',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus. Praesent quis dolor dictum, tincidunt nisl sit amet, ultrices est. Aliquam erat volutpat. Fusce iaculis nulla sapien, at bibendum turpis tincidunt et. In ullamcorper justo justo, ut pulvinar mi fringilla in. Cras sem elit, tempor eget turpis sed, auctor mollis tellus. Etiam ut arcu sed nunc semper sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti.',
      coverImage: mockimageurl,
    },
    {
      title: 'Programacao Web',
      type: 'artigo',
      author: 'Demetrio Mestre',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus. Praesent quis dolor dictum, tincidunt nisl sit amet, ultrices est. Aliquam erat volutpat. Fusce iaculis nulla sapien, at bibendum turpis tincidunt et. In ullamcorper justo justo, ut pulvinar mi fringilla in. Cras sem elit, tempor eget turpis sed, auctor mollis tellus. Etiam ut arcu sed nunc semper sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti.',
      coverImage: mockimageurl,
    },
    {
      title: 'Programacao Web',
      type: 'periódico',
      author: 'Demetrio Mestre',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit id sem a rhoncus. Praesent quis dolor dictum, tincidunt nisl sit amet, ultrices est. Aliquam erat volutpat. Fusce iaculis nulla sapien, at bibendum turpis tincidunt et. In ullamcorper justo justo, ut pulvinar mi fringilla in. Cras sem elit, tempor eget turpis sed, auctor mollis tellus. Etiam ut arcu sed nunc semper sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti.',
      coverImage: mockimageurl,
    },
  ];

  const totalPublications = publications.length;

  const nextPublication = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalPublications));
  };

  const prevPublication = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPublications :prevIndex - 1) % totalPublications);
  };

  return (
    <Box bgColor={"#EFF4FD"} color={"#262A38"} pb={6} pt={8}>
        <Box className="relative w-full overflow-hidden" >
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>
            Publicações em destaque
        </Text>

        <Box
            w={"100vw"}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
            {publications.map((publication, index) => (
                <Box
                key={index}
                className="flex-shrink-0"
                mx={2}
                w={"99vw"}
                h={"76vh"}
                p={10}
                >
                  <Flex>
                    <Image cursor={"pointer"} className='holographic-card' src={publication.coverImage} h={"66vh"} w={"90vw"} fit={"cover"}></Image>
                    <Box ml={8}>
                      <Flex h={"full"} alignItems={"center"} justifyContent={"space-around"} flexDirection={"column"}>
                        <div>
                        <Text fontSize={"3xl"}>{publication.title}</Text>
                        <Text fontSize={"lg"}>por {publication.author}</Text>
                        <Text mt={8} textAlign={"justify"} fontSize={"lg"}>{publication.summary}</Text>
                        </div>
                        <Button bgColor={"#0B1436"} w={"max"}>Ver mais sobre este {publication.type}</Button>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
            ))}
        </Box>

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