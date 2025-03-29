import { Box } from '@radix-ui/themes';
import { GuiaSubmissao } from '../components/submissoes/GuiaSubmissao';
import { FormularioSubmissao } from '../components/submissoes/FormularioSubmissao';
import { PoliticaEditorial } from '../components/submissoes/PoliticaEditorial';

const Submissoes = () => {
  return (
    <Box>
        <GuiaSubmissao/>
        <PoliticaEditorial/>
        <FormularioSubmissao/>
    </Box>
  );
};

export default Submissoes;