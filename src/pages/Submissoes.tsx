import { Box } from '@radix-ui/themes';
import { GuiaSubmissao } from '../components/submissoes/GuiaSubmissao';
import { FormularioSubmissao } from '../components/submissoes/FormularioSubmissao';
import { PoliticaEditorial } from '../components/submissoes/PoliticaEditorial';
import { NavBarSkeleton } from '../components/general/NavBarSkeleton';

const Submissoes = () => {
  return (
    <>
        <NavBarSkeleton/>
        <GuiaSubmissao/>
        <PoliticaEditorial/>
        <FormularioSubmissao/>
    </>
  );
};

export default Submissoes;