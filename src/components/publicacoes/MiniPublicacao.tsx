import { Box,Image,Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export interface PublicacaoProps {
    item: unknown;
}

export const MiniPublicacao = (
    {item} : PublicacaoProps
) => {
    const navigate = useNavigate();
    return(
        <>
            <Box
            key={item.title}
            className="flex-shrink-0"
            textAlign="center"
            cursor={"pointer"}
            onClick={()=>navigate(`/publicacoes/${item.title}`)}
            >
            <Image className='non-holographic-card' src={item.coverImage} aspectRatio={"portrait"} fit={"cover"} w={"100vw"}></Image>
            <Text lineClamp={1} fontSize={"xl"} mt={2}>{item.title}</Text>
            <Text color="fg.muted" lineClamp={1}>{item.author}</Text>
            </Box>
        </>
    )
}