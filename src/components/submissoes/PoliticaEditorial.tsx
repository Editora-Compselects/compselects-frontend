import { Box, Flex, Grid, Separator,Image,Text, Card } from "@chakra-ui/react";
import { mockimageurl, politicaEditorialImg } from "../../util/imageUrls";
import { PoliticaEditorialCard } from "./PoliticaEditorialCard";

export const PoliticaEditorial = () => {

    const texto1 = `Todos os trabalhos submetidos à Editora CompSelect passam por um processo criterioso de avaliação. As propostas são inicialmente analisadas quanto à adequação temática, originalidade e relevância científica. Em seguida, passam por revisão técnica e editorial, realizada por especialistas da área, garantindo a qualidade e a consistência do conteúdo publicado. O processo é conduzido de forma transparente, respeitando os prazos acordados e priorizando a excelência acadêmica.`

    const texto2 = `A CompSelect mantém um compromisso firme com a ética acadêmica e editorial. Espera-se que todos os trabalhos submetidos sejam originais, devidamente referenciados e livres de qualquer forma de plágio ou má conduta científica. Casos de duplicidade de submissão, falsificação de dados ou ausência de consentimento de coautores não são tolerados. Trabalhamos em conformidade com boas práticas editoriais, assegurando integridade, responsabilidade e respeito à comunidade científica.`

    const texto3 = `A Editora CompSelect valoriza a autoria e o reconhecimento intelectual de todos os colaboradores. Os direitos autorais das obras publicadas permanecem com os autores, salvo em casos específicos acordados previamente em contrato. Ao submeter um trabalho, o autor concede à CompSelect o direito de publicação, distribuição e divulgação da obra, respeitando os formatos e canais definidos. Todas as publicações seguem as normas legais de proteção à propriedade intelectual e observam as boas práticas de licenciamento, garantindo transparência, segurança e respeito aos direitos dos autores e coautores envolvidos.`

    return (
      <Box>
            <Box color={"#EFF4FD"} bgColor={"#191c27"} p={8} pb={16}>
                <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>Política Editorial</Text>
                <Grid className="grid-cols-3" justifyItems={"center"}>
                    <PoliticaEditorialCard nome="Políticas de Revisão" foto={politicaEditorialImg[0]} conteudo={texto1}/>
                    <PoliticaEditorialCard nome="Ética" foto={politicaEditorialImg[1]} conteudo={texto2}/>
                    <PoliticaEditorialCard nome="Direitos Autorais" foto={politicaEditorialImg[2]} conteudo={texto3}/>
                </Grid>
            </Box>
      </Box>
    );
  };